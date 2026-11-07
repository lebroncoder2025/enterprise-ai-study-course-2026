# Rozmowa z liderem: 20 scenariuszy i odpowiedzi


> **Cel:** Każdą odpowiedź buduj jako `problem → opcje → decyzja → ryzyko → metryka weryfikacji`. Lider techniczny zwykle sprawdzi *dlaczego* wybierasz architekturę, a nie samą definicję.

## Scenariusze do przećwiczenia na głos

1. **Kiedy RAG zamiast SFT?** Gdy podstawowym problemem jest aktualna wiedza i cytowania. SFT do dopasowania zachowania; sprawdź benchmark.
2. **Czy LoRA jest bezgradientowa?** Nie: zamraża bazę, a gradienty aktualizują adaptery.
3. **Czy trening 7B na CPU ma sens?** W zasadzie możliwy, często koszt czasowy i pamięć czynią go niepraktycznym. Zacznij od mniejszego modelu lub usługi zarządzanej.
4. **Jak wykryć data leakage?** Sprawdź lineage, czas dostępności cech, grupowanie rekordów i podział testowy.
5. **Co to jest champion–challenger?** Porównywanie produkcyjnego modelu z kandydatem na identycznym benchmarku przed promocją.
6. **LLM zwrócił poprawny HTTP 200, ale nieprawdziwą odpowiedź.** To problem ewaluacji semantycznej, nie availability; zbadaj retrieval i faithfulness.
7. **Model wybiera zły tool.** Zmierz tool selection accuracy, popraw opisy/schematy, eval cases i routing.
8. **Agent robi 15 pętli Search.** Zastosuj budżety kroków, limit kosztu, timeout, warunek stop.
9. **Agent wykonał zapis dwa razy.** Dodaj idempotency key i zatwierdzenie; testuj retry.
10. **Dane z SharePointa wyciekają przez RAG.** Egzekwuj ACL per użytkownik w retrieval, audyt i testy użytkowników z różnymi rolami.
11. **Jak wdrożyć agentów do Teams?** Copilot Studio: skonfiguruj agent, publish, channels, auth i polityki tenant.
12. **W czym Foundry jest inne niż Azure Portal?** Foundry skupia modele/agenty/evals, portal zasoby/identity/network/monitoring.
13. **Jak zmierzyć koszt aplikacji GenAI?** Koszt tokenów, tool calls, Search, infrastruktury, storage, tracing, koszt per task i wartość biznesowa.
14. **Co logować w trace?** Spans, wersje, czas, statusy, tokeny, koszty — bez niepotrzebnego PII.
15. **Co jeśli jakość spada miesiąc po wdrożeniu?** Zweryfikuj drift danych, zmiany źródeł, wersję promptu/modelu, błąd narzędzi i feedback użytkowników.
16. **Jak wybrać metryki ewaluacji RAG?** Retrieval recall@k, groundedness, answer relevance, citation accuracy, latency i koszt.
17. **Jak bezpiecznie dać agentowi Code Interpreter?** Izolowany runtime, ograniczenia zasobów, brak przypadkowego dostępu do sieci i dokumentów, logi.
18. **Jak uniknąć wąskiego gardła przy agentach?** Zidentyfikuj P95 spanów, cachuj bezpieczne odczyty, mierz równoległość, timeouty i budżet tokenów.
19. **Czy instrukcja „nie wysyłaj danych” wystarczy?** Nie. Potrzebujesz wymuszonych uprawnień, DLP, filtrów i API-side checks.
20. **Kiedy workflow zamiast agenta?** Gdy ścieżka jest powtarzalna, wysoka stawka i ważna audytowalność. Agenta warto włączać w niejednoznacznych krokach pod kontrolą.

## Trzy zadania na 10 minut

**Zadanie A:** narysuj system RAG: użytkownik → SSO → Flask → Search → LLM → odpowiedź; pokaż, gdzie sprawdzasz ACL i logujesz spans.

**Zadanie B:** dobierz metodę dla klasyfikacji 50 tys. rekordów z SQL. Zacznij od regresji logistycznej lub boosting i podaj sensowny baseline.

**Zadanie C:** agent ma zatwierdzać zmianę GxP. Narysuj granicę, w której LLM tylko proponuje, a system IAM, workflow i człowiek podejmują decyzję.

## Kryterium jakości odpowiedzi

Dobra odpowiedź mówi nie tylko „użyję X”, ale też „wybiorę X, jeśli miara Y na zbiorze Z wykaże poprawę, a ryzyka A/B obejmę kontrolą C”.
