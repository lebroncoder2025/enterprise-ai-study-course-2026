# 06 · OpenAI Codex — agent programistyczny, nie samo okno czatu

> **Codex = model + agentowy harness + repozytorium + narzędzia + uprawnienia.** W przeciwieństwie do zwykłego chatu może czytać pliki projektu, proponować zmiany, uruchamiać testy i iterować do uzyskania działającego wyniku — gdy pozwala na to środowisko.

## Model działania zadania

1. **Cel:** „Napraw import danych CSV bez zmiany publicznego API”.
2. **Kontekst:** instrukcje `AGENTS.md`, kod repo, dokumentacja, testy, historia bieżącej sesji.
3. **Plan:** znalezienie funkcji importującej, wykrycie błędu, przygotowanie poprawki.
4. **Tool calls:** odczyt plików, wyszukiwanie kodu, edycja, polecenia testowe — zależnie od uprawnień i sandboxa.
5. **Obserwacja:** agent dostaje wynik komendy, np. `pytest failed: 1` i poprawia kod.
6. **Wynik:** diff, opis zmiany i raport testów. Przegląd człowieka nadal jest potrzebny.

## Reguły, które działają wielokrotnie: `AGENTS.md`

W głównym katalogu repozytorium możesz umieścić plik `AGENTS.md`, z krótką mapą projektu i poleceniami walidacji:

```md
# AGENTS.md
## Project
Flask backend in app/, tests in tests/, Azure adapters in integrations/.
## Commands
- Test: python -m pytest -q
- Lint: ruff check .
## Constraints
- Never read or commit `.env` secrets.
- Do not change API response schemas without approval.
- Prefer small, reviewable diffs.
- If a test cannot run, explain precisely why.
```

Codex może odczytywać instrukcje globalne i repozytoryjne od katalogów nadrzędnych do bieżącego, zgodnie z konfiguracją. **To wskazówki dla agenta, nie system uprawnień.** Do zabronienia operacji trzeba używać sandboxa, reguł approvals, polityk repo i CI/CD.

## Kiedy Codex, a kiedy ChatGPT?

- **ChatGPT:** „Wyjaśnij tę funkcję, napisz przykład użycia i opisz architekturę”. Praca konwersacyjna i plikowa.
- **Codex:** „Zmień projekt w repozytorium, uruchom testy i przygotuj review-ready patch”. Praca w środowisku kodu.
- **Własna aplikacja na modelu GPT przez API:** Ty implementujesz backend, narzędzia, autoryzację i routing. Sama nazwa modelu nie daje gotowego agenta.

## Przykład z Azure

W repo masz `server.py` i `azure_search.py`. Zlecasz agentowi: „Zamień klucz API na Managed Identity tam, gdzie obsługuje to konfiguracja i klient Azure; zapewnij zgodność w dev i prod; testy bez prawdziwych sekretów”. Agent powinien najpierw sprawdzić architekturę, zaproponować migrację, napisać testy z mockami i zgłosić ograniczenia. **Nie powinien zakładać, że ma prawo sam zmienić konfigurację produkcyjną w Azure.**

## Pułapki jakościowe

„Tests pass” jest wiarygodne tylko wtedy, gdy agent **rzeczywiście uruchomił** testy i masz dowód. Sprawdzaj, czy odpowiedź nie jest jedynie deklaracją; wymagaj logów, diffów, testów i analizy ryzyka. Trwałe instrukcje mogą ograniczać błędy, ale nie wyeliminują wszystkich.

**Dokumentacja i przykłady firmy:** [Codex: praca z AGENTS.md](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide), [Codex development workflows](https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex), [OpenAI Agents](https://developers.openai.com/api/docs/guides/agents).
