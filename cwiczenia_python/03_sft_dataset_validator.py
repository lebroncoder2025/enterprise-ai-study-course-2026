"""Dydaktyczny walidator pliku danych SFT w stylu messages (nie jest uploaderem API).
Uruchom: python 03_sft_dataset_validator.py
"""
import json
from pathlib import Path

p = Path(__file__).with_name('sft_przyklady.jsonl')
if not p.exists():
    rows = [
        {'messages': [{'role':'user','content':'Podaj kategorię: cieknąca pompa'},
                      {'role':'assistant','content':'{"category":"mechanical_issue"}'}]},
        {'messages': [{'role':'user','content':'Podaj kategorię: błąd autoryzacji konta'},
                      {'role':'assistant','content':'{"category":"access_issue"}'}]},
    ]
    p.write_text('\n'.join(json.dumps(x, ensure_ascii=False) for x in rows)+'\n', encoding='utf-8')

seen = set()
for i, line in enumerate(p.read_text(encoding='utf-8').splitlines(), 1):
    item = json.loads(line)
    m = item.get('messages')
    assert isinstance(m, list) and len(m) >= 2, f'Linia {i}: messages musi być listą'
    assert m[0].get('role') == 'user', f'Linia {i}: brak user'
    assert m[-1].get('role') == 'assistant', f'Linia {i}: brak assistant'
    key = m[0]['content'].strip().casefold()
    assert key not in seen, f'Linia {i}: duplikat promptu'
    seen.add(key)
    try:
        json.loads(m[-1]['content'])  # zadanie wymaga poprawnego JSON wewnątrz odpowiedzi
    except json.JSONDecodeError as exc:
        raise ValueError(f'Linia {i}: assistant nie zwrócił poprawnego JSON') from exc
    print('OK', i, key)
print('Sprawdzone rekordy:', len(seen))
print('Uwaga: walidator nie sprawdza PII, licencji, bezpieczeństwa ani zgodności z konkretnym API.')
