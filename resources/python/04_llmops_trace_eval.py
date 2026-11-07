"""Licz metryki spans jednego ilustrowanego requestu RAG / Agentic."""
spans = [
    ('auth', 50, 0.0000),
    ('search', 140, 0.0010),
    ('rerank', 90, 0.0013),
    ('llm', 1050, 0.0072),
    ('validate', 30, 0.0000),
]
for name, latency_ms, cost_usd in spans:
    print(f'{name:12s} latency: {latency_ms:4d} ms | cost: ${cost_usd:.4f}')
print('Suma serial latency:', sum(x[1] for x in spans), 'ms')
print('Suma kosztów ilustrowanych:', round(sum(x[2] for x in spans), 4), 'USD')

# Golden retrieval set: relevant_doc_ids known from human review.
relevant = {'SOP-v4', 'VAL-03'}
retrieved = ['SOP-v4', 'NEWS-07', 'VAL-03', 'MISC-01']
k = 3
recall_k = len(set(retrieved[:k]) & relevant) / len(relevant)
precision_k = len(set(retrieved[:k]) & relevant) / k
print(f'Recall@{k}: {recall_k:.3f}; Precision@{k}: {precision_k:.3f}')
print('Przykład danych fikcyjnych. W produkcji latency może obejmować współbieżne spans.')
