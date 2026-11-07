# Plan nauki — rozmowa z liderem Agentic Workflows i MLOps

Ten plan jest przeznaczony do nauki *rozumienia*, nie recytacji. Otwórz `narzedzia/index.html` albo `narzedzia/TOOLKIT_JEDEN_PLIK.html`.

## Tryb awaryjny: 90–110 minut

| Czas | Lekcje / laboratoria | Wynik nauki |
|---|---|---|
| 0–15 min | 01 Mapa i 04 Flow vs agent | Narysuj deterministic flow, router, planner i event-driven agent. |
| 15–35 min | 18 Agentic patterns, 19 Agent runtime, lab G | Ustal w którym miejscu sprawdzasz ACL, approval, tool schema, timeout i retry. |
| 35–55 min | 13 Gradient, 14 metody FT, 15 LoRA, lab D/E | Wytłumacz SFT vs DPO vs RFT, Full vs LoRA vs QLoRA i oblicz jeden gradient. |
| 55–75 min | 20 MLOps, 21 LLMOps, lab I | Rozpisz Data → Train → Registry → Deploy → Monitor → Rollback. |
| 75–95 min | 22 Microsoft Foundry, 23 Azure Enterprise | Wytłumacz App Service, Entra, Search, Foundry, Key Vault, Monitor i granice dostępu. |
| +15 min | 25 scenariusze, 60 pytań | Odpowiedz bez notatek na 5 losowych problemów. |

## Sześć sesji po 50 minut

**Sesja 1 — fundamenty:** 12 Model ML, 13 Gradient. Skrypt `cwiczenia_python/01_gradient_cpu.py`, lab D. Pytanie kontrolne: *czym różni się aktualizacja wag od użycia promptu?*

**Sesja 2 — fine-tuning:** 14 SFT/DPO/RFT, 15 LoRA/QLoRA, 16 CPU/RAM, 17 treningowy dataset. Zmierz rank i liczbę parametrów w lab E/F. Pytanie: *jakie dane, koszty i ograniczenia decydują o SFT vs RAG?*

**Sesja 3 — Agentic:** 02 Copilot Studio, 04 Workflow, 18 Patterns, 19 Runtime. Zbuduj przykładowego agenta w lab A/B/G. Pytanie: *jak bronisz się przed nieautoryzowanym tool call?*

**Sesja 4 — Enterprise:** 10 Azure, 22 Foundry, 23 Azure enterprise, 24 governance. Narysuj usługę end-to-end. Pytanie: *dlaczego SSO nie wystarcza do ACL w RAG?*

**Sesja 5 — MLOps:** 20 MLOps, 21 LLMOps, 11 Evals, lab H/I. Pytanie: *kiedy wprowadzasz shadow/canary i jakie kryteria rollback?*

**Sesja 6 — rozmowa:** 25 Scenariusze lidera, 60 pytań. Wybierz 3 architektury i w 90 sekund opisz trade-offs.

## Pętla uczenia się na każdy temat (10–15 min)

1. **Intuicja (2 min):** jedna definicja w prostych słowach, bez skrótów.
2. **Mechanizm (3 min):** co jest wejściem, co się dzieje wewnątrz, jaki wynik powstaje.
3. **Eksperyment (3 min):** zmień parametr lub tryb i przewidź wynik zanim klikniesz.
4. **Różnica i ryzyko (2 min):** powiedz, kiedy nie używałbyś danej technologii.
5. **Teach-back (2 min):** odpowiedz z pamięci, jak osobie nietechnicznej.
6. **Późniejsza powtórka:** powtórz po 1 dniu i po 3 dniach; wróć do własnych błędów.

**Priorytet przed liderem:** bardzo dobra odpowiedź techniczna to *wybór + argument + metryka + ryzyko + kontrola*. Nie udawaj doświadczenia z treningiem modeli, jeśli znasz je tylko z kursu.


## Dodatek · 25–35 minut
1. Lekcja 26: system/developer/user/tool — 6 min.
2. Lekcja 27: gdzie w Copilot Studio i Foundry trafia kontekst — 8 min.
3. Lekcja 28: dokładny cykl Code Interpreter — 8 min.
4. Laboratorium K: przełącz auto/required/none i blokadę uprawnień — 6 min.
5. Lekcja 29: mini-słownik do rozmowy — według potrzeb.
