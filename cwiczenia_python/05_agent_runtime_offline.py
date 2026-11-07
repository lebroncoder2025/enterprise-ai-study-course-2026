"""Offline simulation of a controlled agent runtime (no real LLM or API calls).
Illustrates identity, ACL, allowed tools, tool validation, idempotency and approval.
"""
from dataclasses import dataclass, field

@dataclass
class Session:
    principal: str
    allowed_doc_ids: set[str]
    can_approve: bool = False
    processed_keys: set[str] = field(default_factory=set)

DOCS = {
    'SOP-001': {'title': 'Change control', 'version': 'v4'},
    'FIN-039': {'title': 'Financial close', 'version': 'v2'},
}

def get_doc(session: Session, doc_id: str):
    if doc_id not in session.allowed_doc_ids:
        raise PermissionError('DENIED by document ACL')
    return DOCS[doc_id]

def approve_change(session: Session, change_id: str, idempotency_key: str, user_confirmation: bool):
    if not session.can_approve or not user_confirmation:
        raise PermissionError('DENIED: explicit approval required')
    if idempotency_key in session.processed_keys:
        return {'status': 'not-repeated', 'id': change_id}
    session.processed_keys.add(idempotency_key)
    return {'status': 'approved-once', 'id': change_id}

user = Session(principal='user@contoso.example', allowed_doc_ids={'SOP-001'})
print('Authorized read:', get_doc(user, 'SOP-001'))
try:
    get_doc(user, 'FIN-039')
except PermissionError as e:
    print('Correct ACL failure:', e)
try:
    approve_change(user, 'CR-105', idempotency_key='CR-105-attempt1', user_confirmation=True)
except PermissionError as e:
    print('Correct approval failure:', e)

manager = Session(principal='manager@contoso.example', allowed_doc_ids={'SOP-001'}, can_approve=True)
for _ in range(2):
    print('Safe retry:', approve_change(manager, 'CR-105', 'CR-105-attempt1', True))
print('Uwaga: w prawdziwej aplikacji kontrola dostępu i idempotencja muszą być trwałe i egzekwowane przez systemy docelowe, a nie tylko pamięć RAM.')
