"""Architecture-only sample. No cloud connection, no real Microsoft authentication.
Points out what is *actually* required from enterprise Flask + RAG + LLM.
"""
from dataclasses import dataclass

@dataclass(frozen=True)
class User:
    id: str
    groups: frozenset[str]

DOCUMENTS = [
    {'id': 'sop-1', 'text': 'Change control needs approval.', 'groups': {'quality'}},
    {'id': 'finance-2', 'text': 'Financial close process.', 'groups': {'finance'}},
]

def search_index(question: str, identity: User):
    """Mock per-user security trimming. Production: use proven ACL/RBAC enforcement."""
    return [d for d in DOCUMENTS if identity.groups.intersection(d['groups'])]

def call_model(question: str, chunks: list[dict]) -> str:
    """Mock generation; a real deployment is accessed through authenticated API."""
    if not chunks: return 'Nie mam dostępu do odpowiednich źródeł.'
    return f"Pytanie: {question}\nŹródła: {', '.join(d['id'] for d in chunks)}"

def handle_question(question: str, identity: User):
    # 1. Identity is authenticated by actual Entra / backend auth layer.
    # 2. Check access to retrieved documents (not only login to the website).
    sources = search_index(question, identity)
    # 3. Assemble a context and call deployment through Managed Identity if supported.
    # 4. Validate and log metadata without unnecessary personal data.
    return call_model(question, sources)

print(handle_question('Change control?', User('employee', frozenset({'quality'}))))
print(handle_question('Change control?', User('employee2', frozenset({'other'}))))
