# 07 · Claude Code — agent do terminala, IDE i dużych repozytoriów

> Claude Code nie jest tym samym co **Claude.ai** w przeglądarce. To środowisko agentowe dla pracy nad kodem: może analizować repo, planować, edytować pliki, uruchamiać komendy i integrować narzędzia. Granice działań zależą od permissions i sandboxa.

## Jak wygląda praktyczna sesja?

1. Uruchamiasz Claude Code w katalogu repozytorium przez CLI lub obsługiwaną integrację IDE.
2. Agent czyta lokalną strukturę projektu i instrukcje w `CLAUDE.md` (we właściwym zasięgu).
3. Prosisz: „Dodaj testy walidujące puste i uszkodzone załączniki”.
4. Agent przegląda kod, przygotowuje zmiany, może poprosić o uprawnienie do komendy, uruchamia testy i iteruje.
5. Ty czytasz diff, weryfikujesz wyniki i decydujesz o merge/release.

## `CLAUDE.md` — odpowiednik instrukcji projektu

Umieść go w repozytorium, jeśli chcesz, by zachowanie było spójne dla osób pracujących z tym kodem:

```md
# CLAUDE.md
## Architecture
This repository contains Flask API, Azure Search adapter, UI and tests.
## Rules
- Never invent environment variables or cloud resources.
- Do not access production credentials.
- Write tests before modifying request authentication.
- Always distinguish mock results from production verification.
## Validation
Run `pytest -q` after changes and show the summary.
```

Dokumentacja Claude Code przewiduje również reguły, konfigurację settings i — w określonych zastosowaniach — parametr `--append-system-prompt` do dołączenia instrukcji. **Nie myl instrukcji z `settings.json`:** instrukcja wpływa na zachowanie, a ustawienia dotyczą także permissions, narzędzi i hooków. Przykładowo `.claude/settings.json` może być współdzielonym plikiem projektu, a `.claude/settings.local.json` ustawieniem tylko na lokalnym komputerze.

## CLAUDE.md, Skills, MCP, Hooks — różne role

- **CLAUDE.md:** zawsze przydatne podstawowe wskazówki o projekcie.
- **Skills:** wielokrotnego użytku instrukcje i materiały do konkretnego zadania (np. „release checklist”).
- **MCP:** sposób podłączenia narzędzi i danych zewnętrznych.
- **Hooks:** deterministyczny krok uruchamiany przy określonym zdarzeniu agenta; ważny do sprawdzania albo automatyzowania, gdzie sam prompt jest zbyt słaby.
- **Permissions/Sandbox:** rzeczywiste granice wykonywania poleceń. Nie zastępuj ich prośbą w stylu „nie rób niczego niebezpiecznego”.

## Przykład: zmiana architektury API

„Rozdziel wyszukiwanie Azure AI Search od Flask route; zachowaj endpoint; napisz testy integracyjne z mockiem; nie dotykaj środowiska produkcyjnego”. Dobry agent powinien znaleźć obecną implementację, przygotować minimalny diff, zachować kontrakt i zwrócić opis ryzyk. Nie należy brać jego kodu na wiarę bez review i testów.

## Co jest ważne w środowisku farmaceutycznym?

Przed podłączeniem repo do zewnętrznej usługi upewnij się, że polityka organizacji pozwala na przetwarzanie konkretnych plików. Identyfikatory badań, dane osobowe, procedury i sekrety nie powinny trafiać do narzędzia bez odpowiedniej autoryzacji. Ustawienia uprawnień, retencja i umowy dostawcy są oddzielne od tego, czy model dobrze programuje.

**Oficjalne źródła:** [Claude Code quickstart](https://code.claude.com/docs/en/quickstart), [Memory i CLAUDE.md](https://code.claude.com/docs/en/memory), [Settings](https://code.claude.com/docs/en/settings), [MCP](https://code.claude.com/docs/en/mcp), [Claude Code use cases](https://support.claude.com/en/articles/14553517-claude-code-common-developer-use-cases).
