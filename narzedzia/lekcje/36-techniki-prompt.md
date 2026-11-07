# Zero-shot, few-shot, decomposition i narzędzia

> **Prosta reguła:** jeśli zadanie jest jasne, zacznij od prostego zero-shot. Jeśli wynik ma specyficzny styl lub format, pokaż 1–3 reprezentatywne przykłady. Nie zwiększaj długości promptu bez pomiaru jakości.

## Zero-shot, one-shot, few-shot
**Zero-shot:** instrukcja bez przykładów. „Przypisz zgłoszenie do kategorii: system, proces lub dokumentacja”. **One-shot:** jeden przykład wejścia i oczekiwanego wyjścia. **Few-shot:** kilka przykładów, najlepiej obejmujących zarówno typowe, jak i trudne przypadki. Przykłady są częścią kontekstu, a nie treningiem wag modelu.

## Task decomposition, prompt chaining
Zadanie „Zrób audyt 100 zgłoszeń” podziel na: pobranie danych → wyodrębnienie pól → walidacja pól → grupowanie → podsumowanie → przegląd przez człowieka. Każdy etap ma osobny kontrakt i test. **Prompt chaining** to łączenie kolejnych wywołań; nie musi być autonomicznym agentem.

## ReAct i plan–execute
Wzorzec **ReAct** polega na przeplataniu rozumowania z działaniami, często jako wywołania narzędzi i obserwacje ich wyników. W praktyce dostawcy nie zawsze udostępniają pełne pośrednie rozumowanie. **Plan–execute** oddziela plan od wykonywania kroków. **Router** wybiera ścieżkę spośród ustalonych możliwości. Żaden z tych wzorców nie zwalnia z kontroli uprawnień.

## Kiedy lepsze są narzędzia niż „mądry prompt”?
„Policz medianę 40 000 rekordów” — użyj kodu/Code Interpreter lub SQL, nie licz na ręczne liczenie token po tokenie. „Jaka jest najnowsza wersja procedury?” — użyj retrieval z kontrolą aktualności. „Wyślij e-mail” — użyj API, a przed wysłaniem często zatwierdzenia.

## Common traps
„Wypisz wszystkie myśli” nie jest niezawodną techniką poprawy jakości ani właściwą metodą audytu. Preferuj **sprawdzalne uzasadnienie, źródła, kroki obliczeń i testy wyników**, nie domaganie się ukrytej wewnętrznej ścieżki rozumowania. „Zachowuj się jak ekspert” nie zastępuje danych i kryteriów oceny.

**Związek z enterprise environment:** zdefiniuj baseline (prosty prompt), porównaj warianty na niezmiennym eval set, przeanalizuj błędy, dopiero potem zwiększaj złożoność.
