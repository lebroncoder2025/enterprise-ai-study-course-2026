# 01 · Mapa narzędzi: co jest modelem, co aplikacją, a co agentem?

> **Najważniejsza zasada:** GPT i Claude to rodziny modeli. ChatGPT, Claude.ai i Microsoft 365 Copilot to aplikacje. Copilot Studio to platforma do budowania agentów. Codex, Claude Code i GitHub Copilot mogą działać jako agenci programistyczni. Te nazwy nie są zamienne.

## Cztery piętra architektury

1. **Model** — silnik obliczający kolejne tokeny, klasyfikację albo wywołanie narzędzia (np. model GPT lub Claude). Ma tokenizator i wytrenowane wagi. Sam z siebie nie ma uprawnień do Twojego SharePointa.
2. **Harness / runtime agenta** — oprogramowanie organizujące kontekst, historię, dostępne narzędzia, wyniki ich wywołań, limity i zatwierdzenia. To ono zamienia sam model w działającą aplikację agentową.
3. **Aplikacja lub platforma** — interfejs i środowisko użytkownika: ChatGPT, Claude.ai, Microsoft 365 Copilot, VS Code, Copilot Studio. Dostarcza logowanie, narzędzia, UI, zasady i rozliczenia.
4. **Dane i integracje** — pliki, repozytorium Git, Microsoft Graph, Azure AI Search, SQL, konektory Power Platform i usługi API. To źródła kontekstu albo cele działań, a nie „wiedza wpisana w wagach”.

## Szybkie porównanie ośmiu produktów

| Produkt | Co rzeczywiście robi? | Gdzie działasz? | „Stały kontekst” | Przykładowe zadanie |
|---|---|---|---|---|
| **Copilot Studio** | Buduje i publikuje agenty oraz kontrolowane procesy | Power Platform / Copilot Studio | Agent **Instructions**, Knowledge, Topics, zmienne | Asystent procedur jakościowych w Teams |
| **Microsoft 365 Copilot** | Pomaga pracownikowi na danych M365, do których ma uprawnienia | Aplikacje i chat Microsoft 365 | Kontekst pracy / udostępnione pliki / agenci | Podsumowanie spotkania i dokumentów |
| **ChatGPT** | Ogólny asystent i obszar pracy z plikami i narzędziami | ChatGPT | Instrukcje projektu / instrukcje niestandardowe w obsługiwanych zakresach | Analiza danych, redakcja i badania |
| **Claude.ai** | Asystent tekstowy, analityczny i projektowy | Claude w przeglądarce / desktop | Project instructions + Project Knowledge | Analiza długiej specyfikacji |
| **Codex** | Agent inżynierii oprogramowania | IDE / CLI / środowisko zadania | `AGENTS.md`, reguły repo, konfiguracja narzędzi | Zmiana endpointu i uruchomienie testów |
| **Claude Code** | Agent do pracy na kodzie i terminalu | CLI / IDE / desktop | `CLAUDE.md`, `.claude/rules`, ustawienia | Refaktoryzacja modułu i testy |
| **GitHub Copilot** | Sugestie kodu, chat, tryb agentowy i delegacja zadań | VS Code, IDE, GitHub | `.github/copilot-instructions.md`, instrukcje ścieżek | Zmiana plików w projekcie |
| **Azure AI Search** | Indeksowanie i retrieval; nie jest chatbotem | Usługa w Azure | Indeks, schema i polityki zapytań | Wybranie 5 fragmentów PDF do RAG |

**Uwaga:** GitHub Copilot jako narzędzie programisty to coś innego niż nazwa „GitHub Copilot harness” używana w nowych wariantach Copilot Studio. Obie technologie należą do ekosystemu Microsoft/GitHub, ale mają inne role i powierzchnie konfiguracji.

## Przykład jednego zadania w różnych narzędziach

**Zadanie:** „Z dokumentacji jakościowej ustal, czy aktualizacja systemu wymaga zatwierdzenia”.

- W **Microsoft 365 Copilot** użytkownik pyta we własnym chacie, a wynik zależy od dostępnego kontekstu i jego uprawnień do dokumentów.
- W **Copilot Studio** twórca projektuje dedykowanego agenta, ustala instrukcje, wiedzę, narzędzia, uprawnienia i kanały. Agent może rozmawiać w Teams.
- W **ChatGPT/Claude** użytkownik może załączyć dokument lub używać narzędzi, do których ma dostęp. To nie jest automatycznie firmowa integracja z M365.
- W **Codex/Claude Code/GitHub Copilot** można zlecić napisanie i przetestowanie kodu aplikacji, która później obsłuży takie pytanie. Agent codingowy i gotowy chatbot biznesowy to różne systemy.

## Minićwiczenie — rozpoznaj warstwy

„Copilot Studio używa SharePointa, wywołuje Power Automate i publikuje agenta w Teams.” Rozbij to zdanie: **Copilot Studio = builder**, **SharePoint = źródło danych**, **Power Automate / Agent Flow = narzędzie/proces**, **Teams = kanał**. Model LLM i mechanizm orkiestracji działają w tle.

**Pułapka:** żaden z tych produktów nie daje uprawnień „do wszystkiego”, tylko dlatego, że użytkownik wpisał odpowiedni prompt. Tożsamość, scopes konektora, DLP i uprawnienia systemów docelowych są odrębnymi kontrolami.

Źródła: [Copilot Studio — overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/overview), [Microsoft Copilot — grounding](https://support.microsoft.com/en-us/microsoft-365-copilot/what-information-does-copilot-use-to-answer-my-prompt), [VS Code — agent harness](https://code.visualstudio.com/docs/agents/concepts/agent-harnesses).
