# Koszt, adopcja i wartość biznesowa rozwiązań AI

> **Nie każda aplikacja, która odpowiada poprawnie, ma wartość biznesową.** Praktyczne AI trzeba mierzyć również wykorzystaniem, czasem pracy, zaufaniem użytkowników i kosztami utrzymania.

## Składniki kosztu
**Input tokens / output tokens** — koszt wejścia i wyjścia zależny od modelu i umowy. **Retrieval** — indeks, wyszukiwanie, embeddingi i aktualizacje. **Compute** — hosting API/App Service i ewentualne GPU/CPU. **Tools** — wywołania zewnętrznych API i Code Interpreter. **Operacje** — monitoring, bezpieczeństwo, rozwój i praca ludzi nad ewaluacją.

## Dlaczego długi system prompt kosztuje?
Stałe instrukcje przesyłane przy każdym wywołaniu zajmują tokeny. **Prompt caching** w niektórych API może obniżać koszt wspólnych prefiksów, ale nie zmienia wag ani nie zwalnia z kontroli danych. Dodatkowe wywołania narzędzi zwiększają latency i mogą generować opłaty. **Context compression** i selektywny retrieval pomagają, jeśli zachowasz jakość.

## KPI i pułapki
- **Adoption:** odsetek aktywnych użytkowników i częstotliwość korzystania. Wysoka liczba wejść nie oznacza jeszcze sukcesu.
- **Task success rate:** czy użytkownik zakończył zadanie, nie tylko dostał wiadomość.
- **Human correction rate:** ile wyników wymaga poprawy.
- **Escalation/abstention:** czy system prawidłowo przekazuje trudne przypadki.
- **Time saved / value:** mierz względem wiarygodnego baseline, a nie szacuj bez pomiarów.
- **Cost per successful task:** bardziej przydatny niż koszt pojedynczego wywołania.

## Przykład obliczenia
Aplikacja wykonała 1000 zapytań za 50 zł. 700 zakończyło zadanie poprawnie. **Koszt na udane zadanie wynosi 50/700 ≈ 0,071 zł**, nie 50/1000 = 0,05 zł. To fikcyjny przykład naukowy; w rzeczywistości dochodzą koszty infrastruktury i ludzi.

**Związek z enterprise environment:** oferta wprost mówi o cost, value, adoption, usage data, forecast and optimisation of infrastructure/API costs.
