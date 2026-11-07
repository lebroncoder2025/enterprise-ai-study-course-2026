# Ćwiczenia Python — naprawdę działają bez API

Uruchom terminal w tym folderze, Python 3.10+.

1. `python 01_gradient_cpu.py` — gradient descent w Pythonie bez bibliotek; zapis wagi do JSON.
2. `pip install numpy` i `python 02_lora_numpy.py` — trenowanie macierzy adaptera A/B na CPU, matematycznie poprawne (nie model 7B).
3. `python 03_sft_dataset_validator.py` — stworzenie i kontrola fikcyjnego zestawu JSONL SFT.
4. `python 04_llmops_trace_eval.py` — suma latencji, kosztów, Recall@K, Precision@K.

**Bezpieczeństwo:** przykłady używają danych fikcyjnych. Nie wprowadzaj tutaj danych pacjentów ani danych firmowych.
5. `python 05_agent_runtime_offline.py` — ACL, approval, idempotency i bezpieczne retry (pełna symulacja bez prawdziwych uprawnień chmurowych).
6. `python 06_enterprise_request_architecture.py` — przykładowa logika identyfikacji, security trimming RAG i przekazania kontekstu do modelu (mock, nie autoryzacja produkcyjna).
