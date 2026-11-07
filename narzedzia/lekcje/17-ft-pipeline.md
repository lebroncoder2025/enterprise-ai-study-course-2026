# Dane fine-tuningowe, podział, eksperyment i ewaluacja


> **W jednym zdaniu:** Dobre dostrajanie jest eksperymentem opartym na danych i metrykach. Bez sensownego datasetu model nauczy się przypadkowych wzorców, nie zachowania oczekiwanego przez firmę.

## Pipeline krok po kroku

1. **Problem biznesowy:** np. klasyfikacja opisów zdarzeń do jednej z ustalonych kategorii.
2. **Model bazowy i baseline:** zbierz wynik przy dobrym prompcie, bez treningu.
3. **Zbiór:** zanonimizowane, legalnie dopuszczone pary instrukcja–odpowiedź. Usuń duplikaty, błędne etykiety i dane wrażliwe.
4. **Split:** train/validation/test (z uwzględnieniem klientów, dokumentów i czasu, aby uniknąć przecieku).
5. **Format:** JSONL w schemacie modelu; waliduj parserem i schematem, zanim wyślesz do usługi.
6. **Trening:** SFT lub inna wybrana metoda, logowane hiperparametry i eksperymenty.
7. **Checkpoint:** zapis adaptera lub pełnego modelu; dołącz wersję danych, commit, metryki, licencje.
8. **Offline eval:** porównanie z baseline na zamrożonym golden set; analiza błędów i bezpieczeństwa.
9. **Review / approval:** decyzja według ryzyka i governance.
10. **Staging → canary → production:** monitorowanie kosztu, jakości, driftu, rollback.

## Hiperparametry

**Learning rate** określa wielkość kroku. **Batch size** liczbę przykładów naraz. **Epochs** liczbę pełnych przejść przez dane. **Sequence length** maksymalną długość przykładu. **LoRA rank** steruje rozmiarem adaptera. **Weight decay** ogranicza wzrost parametrów. **Early stopping** przerywa, gdy walidacja się pogarsza.

## Jakie dane nigdy nie mogą wejść na trening bez analizy?

Dane pacjentów, dokumenty poufne, dane osobowe, treści z niejasną licencją oraz wewnętrzne materiały poza uprawnieniami zespołu. Sama anonimizacja nazwy w jednym polu może nie wystarczyć.

## Przykładowa checklista wyników

| Metryka | Baseline | Po SFT | Decyzja |
|---|---|---|---|
| Accuracy klasyfikacji | 0.84 | 0.89 | sprawdź confusion matrix |
| False negatives dla klasy krytycznej | 18 | 7 | czy poprawa nie zwiększyła FP? |
| P95 latency (ms) | 1100 | 1300 | koszt kompromisu |
| Format JSON valid | 96% | 99% | dodatkowa walidacja backendu |

*Liczby są wyłącznie fikcyjnym przykładem ćwiczeniowym.*

Źródła: [Foundry fine-tuning](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/fine-tuning-considerations), [Hugging Face Training](https://huggingface.co/docs/transformers/trainer).
