# Rozszerzenie: prompt roles, kontekst i Code Interpreter

Zaktualizowano: 2026-11-07.

## Co dodano
- 26: role system/developer/user/assistant/tool oraz hierarchia instrukcji, prompt injection, few-shot, szablony.
- 27: gdzie konfiguruje się stałe instrukcje i źródła wiedzy w Copilot Studio, Foundry, Flask i coding agentach; kontekst, okno kontekstowe, memoria i RAG.
- 28: przy jakich warunkach model proponuje Code Interpreter i co fizycznie robi runtime; tool_choice auto/required/none; bezpieczeństwo i tracing.
- 29: słownik 36 terminów z przykładami, scenariusze decyzyjne i pytania lidera.
- Laboratorium J: składanie kontekstu z rolami i wykrycie przykładowej próby prompt injection.
- Laboratorium K: symulacja narzędzia z wyborem tool_choice, kontrolą dostępności, uprawnień i approval.
- 16 dodatkowych pytań (teraz 76) w module narzędziowym; zachowano wcześniejsze postępy.

## Ważne rozróżnienia
Wybór narzędzia przez LLM to nie to samo co uruchomienie Pythona. Model może zgłosić tool call, a runtime wykonuje kod w sandboxie. Same prompty nie gwarantują uprawnień ani poprawności. Pseudokonfiguracje w lekcjach są oznaczone jako edukacyjne; przy rzeczywistej integracji użyj dokumentacji i aktualnego SDK.

## Otwieranie
START_TUTAJ.html → Narzędzia AI PRO → lekcje 26–29; samodzielnie: narzedzia/index.html.
Gdy wideo YouTube nie działa w iframe, skorzystaj z oryginalnego linku; nie każdy film zezwala na embedding.

Źródła techniczne:
https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/code-interpreter
https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice
https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-mode-guidance
https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-instructions
https://learn.microsoft.com/en-us/agent-framework/agents/tools/
