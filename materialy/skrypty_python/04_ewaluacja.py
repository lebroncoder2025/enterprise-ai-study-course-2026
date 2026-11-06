"""Policz retrieval recall@K, precision@K i MRR bez bibliotek."""
examples = [
    {'gold': {'D01'}, 'ranked': ['D03','D01','D02']},
    {'gold': {'D03'}, 'ranked': ['D03','D02','D01']},
    {'gold': {'D02','D04'}, 'ranked': ['D04','D05','D03']},
    {'gold': {'D07'}, 'ranked': ['D01','D02','D03']},
]

def eval_retrieval(rows, k=2):
    recalls, precisions, reciprocal_ranks = [], [], []
    for row in rows:
        found = set(row['ranked'][:k]) & row['gold']
        recalls.append(len(found)/len(row['gold']))
        precisions.append(len(found)/k)
        first = next((idx+1 for idx, doc in enumerate(row['ranked'])
                      if doc in row['gold']), None)
        reciprocal_ranks.append(1/first if first else 0)
    return {
        'Recall@K': sum(recalls)/len(rows),
        'Precision@K': sum(precisions)/len(rows),
        'MRR': sum(reciprocal_ranks)/len(rows),
    }

for k in (1,2,3):
    print('K =',k, eval_retrieval(examples,k))
print('\nMetryki retrieval nie sprawdzają jeszcze faithfulness ani correctness odpowiedzi LLM.')
