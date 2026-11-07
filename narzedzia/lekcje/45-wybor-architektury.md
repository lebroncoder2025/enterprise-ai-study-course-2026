# Jak wybierać ML, GenAI, RAG, tuning lub agenta?

> **Najważniejsze pytanie lidera:** dlaczego wybrałeś agentic workflow zamiast prostego skryptu, modelu klasycznego lub zwykłego RAG?

## Drzewo decyzji
**Czy rezultat jest ściśle deterministyczny?** Jeżeli tak, preferuj reguły, SQL lub kod. **Czy potrzebna jest prognoza na danych z etykietami?** Rozważ klasyczny ML. **Czy trzeba znaleźć źródła?** Rozważ search/RAG. **Czy wynik musi być językową syntezą?** Rozważ LLM z RAG i walidacją. **Czy zadanie wymaga wieloetapowych działań?** Rozważ workflow. **Czy kolejne kroki trudno przewidzieć i uzasadniona jest dynamiczna decyzja?** Rozważ agenta.

## Przykłady farmaceutyczne — wyłącznie edukacyjne
| Zadanie | Pierwszy kandydat | Dlaczego | Najważniejszy test |
|---|---|---|---|
| Policzenie liczby otwartych rekordów | SQL | Dokładne zapytanie | Porównanie z raportem referencyjnym |
| Prognoza czasu zamknięcia | Regresja/boosting | Dane tabelaryczne | MAE + drift + leakage |
| Odpowiedź na pytanie o SOP | RAG + LLM | Aktualne źródła i cytaty | Retrieval recall, faithfulness, ACL |
| Ekstrakcja pól z tekstu | NER/LLM structured output | Ustrukturyzowanie danych | Precision/recall + schema |
| Przygotowanie szkicu zgłoszenia | Agent lub flow z approval | Narzędzia i wieloetapowość | Tool accuracy, human approval, audit |

## Kiedy fine-tuning ma sens?
Gdy masz dobre przykłady i musisz trwale zmienić zachowanie modelu: format, styl, specjalistyczne etykiety lub zdolności zadania. **Nie używaj go jako domyślnego sposobu „wgrania najnowszych dokumentów”**. RAG często lepiej rozwiązuje problem aktualności i cytowalności.

## Trade-offs do wyjaśnienia
Porównaj **jakość, latency, koszty, zgodność, prywatność, utrzymanie, failure modes, vendor lock-in, potrzeby biznesu**. Najlepszy benchmark publiczny nie dowodzi, że model jest najlepszy na Twoich własnych przypadkach. Dla działań z efektami ubocznymi preferuj twarde kontrole i zatwierdzenia.

**Ćwiczenie:** dla trzech pytań użytkownika wypisz: wejście, metodę, źródło prawdy, ryzyka, kontrolę oraz metrykę sukcesu. Porównaj z przytoczonymi przykładami.
