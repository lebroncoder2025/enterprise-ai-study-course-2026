"""Mały retriever BM25 bez pakietów zewnętrznych. Zmień query i sprawdź ranking."""
import math
import re
from collections import Counter

docs = {
    'D01': 'SOP-101 Zmiana systemu wymaga change control i zatwierdzenia QA.',
    'D02': 'URS opisuje wymagania, a RTM łączy wymagania i testy.',
    'D03': 'Azure AI Search indeksuje dokumenty, wspiera wektory i RAG.',
    'D04': 'Entra ID dostarcza SSO, ale nie zastępuje kontroli uprawnień do dokumentu.',
    'D05': 'Kontrole SOX dotyczą sprawozdawczości finansowej i dostępu.',
}
query = 'change control zatwierdzenia QA'

def toks(s):
    return re.findall(r'[a-z0-9ąćęłńóśźż-]+', s.lower())

N = len(docs)
tokens = {name: toks(text) for name,text in docs.items()}
avg_len = sum(map(len,tokens.values()))/N
df = Counter(t for words in tokens.values() for t in set(words))

def score(query, words):
    counts = Counter(words)
    out = 0.0
    for t in toks(query):
        tf = counts[t]
        idf = math.log(1 + (N - df[t] + 0.5)/(df[t] + 0.5))
        out += idf * tf * 2.2/(tf + 1.2*(0.25 + 0.75*len(words)/avg_len))
    return out

for key, sc in sorted(((key, score(query, words)) for key, words in tokens.items()),
                      key=lambda item:item[1], reverse=True):
    print(f'{key}: BM25={sc:.4f} | {docs[key]}')
print('\nBM25 to metoda leksykalna. Wektory semantyczne i RRF to oddzielne komponenty.')
