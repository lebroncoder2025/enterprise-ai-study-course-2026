# Agentic workflow: router, planner, graph i multi-agent


> **W jednym zdaniu:** Agentic AI to nie jeden konkretny produkt. To projektowanie systemu, który wykorzystuje model do podejmowania decyzji o krokach pracy — zawsze w granicach uprawnień i dostępnych narzędzi.

## Cztery architektury

| Wzorzec | Kto wybiera następny krok? | Przewaga | Ryzyko |
|---|---|---|---|
| **Deterministic flow / DAG** | projektant reguł i warunków | testowalność, przewidywalność | mniejsza elastyczność |
| **Router** | model wybiera ścieżkę z ograniczonej listy | prostota, kontrola | błędne skierowanie |
| **Planner–executor** | model planuje, wykonawca uruchamia zatwierdzone tools | elastyczność przy złożonych zadaniach | zapętlenie, koszt, brak celu |
| **Multi-agent / supervisor** | nadzorca deleguje wyspecjalizowanym agentom | podział odpowiedzialności | trudność obserwacji i debugowania |

**Reflection/critic** to dodatkowy etap oceny wyniku przez model lub narzędzie, ale nie jest dowodem poprawności. **Human-in-the-loop** oznacza punkt, w którym człowiek zatwierdza wynik lub akcję.

## Przykład: kontrola procedury GxP

**Flow deterministyczny:** `trigger → pobierz SOP → sprawdź status → warunek → przygotuj szkic → approval`. Każdy krok z góry znany. Model może generować podsumowanie, ale nie modyfikuje ścieżki.

**Agent generatywny:** `cel użytkownika → wyszukaj dokument → sprawdź wersję → w razie niejasności pobierz metadane → zaproponuj rozwiązanie`. Wybór odczytów zależy od wyniku poprzedniego kroku. Nie dajemy nieograniczonego dostępu do zapisu.

**Autonomiczny agent zdarzeniowy:** po publikacji nowej procedury system sam startuje, tworzy raport różnic i propozycję akcji. Samodzielne uruchomienie nie oznacza prawa do samodzielnego zatwierdzania procesów GxP.

## Jak dodać tool?

Każde narzędzie powinno mieć **kontrakt**: nazwę, opis działania, schemat wejścia, schemat wyniku, wymagane uprawnienia i rodzaj efektu ubocznego. Przykładowo `get_document_status(document_id)` jest read-only, ale `approve_document(document_id)` jest operacją wysokiego ryzyka i wymaga silnych kontroli poza promptem.

## Granice systemu

- Maksymalna liczba kroków i tokenów; deadline, timeout i circuit breaker.
- Allowlist narzędzi, autoryzacja per użytkownik, read-only jako stan domyślny.
- Retry tylko dla operacji idempotentnych lub z kluczem idempotencyjnym.
- Structured output, walidacja JSON i źródeł, rejestrowanie wywołań w traces.
- Warunek przerwania i eskalacja do człowieka.

Źródło: [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/overview), [Microsoft Foundry workflow lab](https://microsoftlearning.github.io/mslearn-ai-agents/Instructions/Exercises/06-build-workflow-ms-foundry.html).
