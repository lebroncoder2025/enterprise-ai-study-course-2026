# MLOps/LLMOps i obserwowalność od podstaw

> **MLOps** to praktyki inżynierskie służące zarządzaniu całym cyklem życia systemów ML. **LLMOps** rozszerza je o prompty, kontekst, modele zewnętrzne, narzędzia i jakość generowanych odpowiedzi.

## Pięć pętli jakości
1. **Data quality:** sprawdź schemat, brakujące wartości, PII i lineage danych.
2. **Experiment tracking:** zapisz wersję danych, kodu, hiperparametrów, modeli, metryk i losowego ziarna.
3. **Release:** testy jednostkowe, integracyjne, evals, security checks, approvals, promocja do środowisk.
4. **Operations:** monitoruj availability, latency, tokens, koszty, tracing i jakość treści.
5. **Feedback:** ludzkie zgłoszenia, analiza błędów, korekty promptu/danych/modelu i ponowne testy.

## Wersjonuj więcej niż model
W RAG wynik zależy od **modelu**, **promptu**, **indeksu**, **źródeł**, **rerankera**, **tool schemas** i **konfiguracji bezpieczeństwa**. Zmiana w którejkolwiek warstwie może wywołać regresję, mimo że wersja samego LLM się nie zmieniła. To powód, aby zapisywać ślady (*traces*) i identyfikatory konfiguracji.

## Jak wygląda trace?
`request-id → authorization → search.query (40 ms) → reranker (80 ms) → model.generate (950 ms) → output-validator (5 ms)`. Liczby to **przykład szkoleniowy**, nie realne parametry Azure. Trace pokazuje przebieg wykonania, a nie całą prywatną ścieżkę rozumowania LLM.

## Drift
**Data drift** — zmienia się rozkład danych wejściowych; **concept drift** — zmienia się zależność wejście-wynik; **answer quality drift** — pogarsza się jakość odpowiedzi w użytkowym kontekście. Tych pojęć nie mieszaj z samym wzrostem liczby tokenów czy kosztów.

## Wdrożenie bez niespodzianek
**Shadow:** kandydat przetwarza kopię ruchu, ale jego odpowiedzi nie są pokazywane użytkownikowi. **Canary:** mała część realnego ruchu przechodzi przez nową wersję. **Rollback:** przywrócenie ostatniej dobrej konfiguracji. W działaniach z efektem ubocznym agent potrzebuje deduplikacji, idempotency keys i kontroli uprawnień.

**Związek z enterprise environment:** ogłoszenie wymaga tracing, token telemetry, latency, cost, drift i hallucination monitoring; warto znać znaczenie każdej warstwy.
