# 05 · GitHub Copilot — sugestie kodu, chat, Agent Mode i trwałe reguły repo

> **GitHub Copilot nie jest tylko autouzupełnianiem.** W IDE możesz otrzymywać sugestie pojedynczych linijek, rozmawiać o repozytorium, planować rozwiązanie i uruchamiać tryb agentowy, który analizuje pliki, proponuje edycje, wykonuje wybrane komendy i weryfikuje rezultat.

## Jak wygląda rzeczywisty przepływ?

1. Otwierasz projekt w VS Code. Copilot może dostać kontekst aktywnego pliku, otwartego workspace i instrukcji repo (zależnie od trybu i ustawień).
2. W zwykłym **Chat** możesz zapytać: „Wyjaśnij endpoint `/analyze` i pokaż możliwe błędy”. Model analizuje dostępny kontekst i odpowiada.
3. W **Agent Mode** prosisz: „Dodaj walidację plików CSV, napisz testy i uruchom je”. Harness agenta planuje działania, wybiera pliki, proponuje edycje i komendy. Pozostajesz osobą akceptującą zmiany i działania zgodnie z uprawnieniami.
4. Wynik trzeba sprawdzić: `git diff`, testy, lint, działanie aplikacji. **Autouzupełnienie kodu nie oznacza, że kod jest bezpieczny lub poprawny.**

## Stałe instrukcje: dokładne nazwy plików

**Całe repozytorium:** `.github/copilot-instructions.md`.

```md
# Wskazówki dla GitHub Copilot
- Aplikacja backendowa to Python 3 + Flask.
- Nie zmieniaj kontraktów API bez aktualizacji testów.
- Wszystkie nowe endpointy mają walidację wejścia i obsługę błędów.
- Nie zapisuj kluczy API w kodzie; używaj środowiska / managed identity.
- Przed zakończeniem uruchom pytest i pokaż wynik.
```

**Wskazówki dla określonych plików:** `.github/instructions/python.instructions.md`.

```md
---
applyTo: "**/*.py"
---
Stosuj type hints, logowanie bez danych wrażliwych oraz testy pytest.
```

**Wielokrotnie używany prompt na żądanie:** `.github/prompts/review-api.prompt.md`. To *szablon zadania*, a nie automatyczny kontekst każdej rozmowy. **Własny agent specjalistyczny:** plik `.github/agents/NAZWA.md` (w obsługiwanych powierzchniach).

`AGENTS.md` jest również wykorzystywany przez część harnessów programistycznych, ale nie zakładaj identycznej kolejności odczytu w każdym narzędziu. Dla natywnego GitHub Copilot używaj przede wszystkim oficjalnej dokumentacji o jego instrukcjach.

## Mini-projekt praktyczny

Użytkownik: „W mojej aplikacji Flask dodaj endpoint, który pobiera dokumenty i zwraca listę trafień z Azure AI Search”.

Dobry proces z GitHub Copilot:

- Najpierw **plan**: interfejs API, autoryzacja, format danych i scenariusze błędów.
- Potem **implementacja**: klient search i walidacja wejścia.
- Następnie **testy**: puste zapytanie, brak uprawnień, timeout Azure, złośliwe parametry.
- Na końcu **przegląd**: model nie powinien sam publikować na produkcję bez uprawnień i procesu release.

## Czego nie mylić?

**GitHub Copilot Chat** pomaga w rozmowie o kodzie. **GitHub Copilot Agent Mode** wykonuje zadania w projekcie. **Copilot Studio** tworzy agentów dla procesów biznesowych. **Microsoft 365 Copilot** pracuje z kontekstem Microsoft 365. Ta sama marka „Copilot” nie oznacza tego samego produktu.

### Oficjalny zrzut ekranu

<figure class="official-shot"><img loading="lazy" src="https://code.visualstudio.com/assets/learn/customizations/ep-2-1-cust-ui.png" alt="Oficjalny zrzut VS Code pokazujący ustawienia custom instructions"/><figcaption>Visual Studio Code (Microsoft): konfiguracja instrukcji w narzędziach agenta. <a href="https://code.visualstudio.com/learn/customizations/2-instructions" target="_blank" rel="noopener noreferrer">Źródło ↗</a></figcaption></figure>

Źródła: [GitHub Copilot w IDE](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides), [Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode), [Instructions](https://docs.github.com/en/copilot/reference/customization-cheat-sheet), [VS Code customizations](https://code.visualstudio.com/docs/copilot/concepts/customization).
