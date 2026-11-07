# Ewaluacja GenAI: golden sets, groundedness i regresje

> **RAG może znaleźć właściwy dokument i mimo to odpowiedzieć błędnie.** Dlatego oceniaj osobno wyszukiwanie, syntezę odpowiedzi oraz działania agenta.

## Jak zbudować golden dataset?
Przygotuj reprezentatywne pytania: typowe, trudne, niejednoznaczne, bez odpowiedzi w źródłach, z literówkami, z nieaktualnymi wersjami, z próbami wyłudzenia danych. Dla każdego zapisz **źródło prawdy**, oczekiwane zachowanie, kryterium oceny, dozwolone odmowy i ewentualne wymagane cytaty. Nie wszystkie pytania muszą mieć jedną dosłowną odpowiedź — czasem oceniamy kryteria.

## Trzy warstwy metryk
**Retrieval:** Recall@K, Precision@K, MRR lub nDCG, pokrycie uprawnień i freshness. **Generation:** answer correctness, faithfulness/groundedness, citation accuracy, abstention, format compliance. **Agent:** tool-call success, plan completion, authorization failures, latency, cost, retry count, harm/side effects, liczba zatwierdzeń.

## LLM-as-a-Judge — mocne i słabe strony
Drugi model może oceniać odpowiedzi według rubryki, ale bywa stronniczy względem długości, stylu lub własnej rodziny modelu. Porównuj jego wyniki z ocenami ludzi; używaj przykładów kalibracyjnych. Nie utożsamiaj „judge powiedział dobrze” z gwarancją poprawności procesu regulowanego.

## Regression tests dla promptów
Wersja promptu 1.1 może poprawić pięć pytań, a pogorszyć trzy inne. Zapisz wersję instrukcji, model, narzędzia, indeks i dokumenty. Uruchom identyczny zestaw po zmianie i zbadaj **delta quality + delta cost + delta latency**. Skonfiguruj próg decyzji o wydaniu lub cofnięciu wdrożenia.

## Case: asystent SOP
Przypadek 1: źródło aktualne, odpowiedź i cytat poprawne — pass. Przypadek 2: źródło nieobecne — poprawne zachowanie to wskazanie braku podstawy. Przypadek 3: użytkownik bez ACL — odmowa już na etapie retrieval/authorization. Przypadek 4: właściwe źródło, ale zły numer procedury — generation failure. Oznacz rozbieżności, nie tylko ocenę łączną.

**Związek z enterprise environment:** eval harness, golden datasets, prompt regression checks i real user feedback to jedne z najważniejszych punktów oferty.

## Ewaluacja agenta: wynik końcowy i przebieg działania

Samo sprawdzenie odpowiedzi końcowej nie mówi, czy agent wybrał właściwe narzędzie, przekazał poprawne argumenty ani poprawnie zinterpretował wynik. Rozdziel dwa poziomy:

| Poziom | Pytanie | Przykładowe kryteria |
|---|---|---|
| **System / wynik** | Czy użytkownik dostał poprawny i bezpieczny rezultat? | task completion, groundedness, kompletność, właściwa odmowa, brak skutków ubocznych |
| **Proces / narzędzia** | Czy agent wykonał dozwolone kroki poprawnie? | tool selection, tool-call accuracy, poprawność argumentów, sukces wywołania, wykorzystanie wyniku narzędzia |

Zapisz dla każdej próby wejście, oczekiwane zachowanie, trace i wersje komponentów. Porównuj stały zestaw przypadków między wersjami; testuj także brak danych, błędne uprawnienia, timeout narzędzia, niejednoznaczne wejście i próbę prompt injection. LLM-as-a-judge jest pomocny przy skali, ale kalibruj go ludzką oceną i nie traktuj pojedynczego wyniku jako akceptacji. Dla zmian wysokiego ryzyka definiuj progi, ręczny review i wymagany approval poza modelem.

**Mini-przykład:** agent wyszukuje rekord, po czym szkicuje zmianę. Wynik końcowy oceniasz pod kątem poprawności pól i zgodności z prośbą; trace osobno sprawdza, czy odczyt był read-only, ID rekordu się zgadzało, żadne narzędzie zapisu nie uruchomiło się przed approval, a odpowiedź użyła faktycznego wyniku API.

**Źródła producenta:** <a href="https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators" target="_blank" rel="noopener">Microsoft Foundry: agent evaluators</a>; <a href="https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-overview" target="_blank" rel="noopener">Microsoft Foundry: evaluation overview</a>.

