# Runtime agenta produkcyjnego: tools, błędy i bezpieczeństwo


> **W jednym zdaniu:** Produkcyjny agent jest kontrolowaną pętlą **observe → decide → act → verify**, a nie samym LLM-em z dostępem do API.

## Co się dzieje podczas pojedynczego requestu?

1. Wejście użytkownika, kontekst sesji i identity claims.
2. Klasyfikacja zadania, pobranie dokumentów oraz kontrola uprawnień.
3. Model otrzymuje instrukcje systemowe i opis dozwolonych tools.
4. Model zwraca tekst albo ustrukturyzowane żądanie `tool_name(arguments)`.
5. **Backend** weryfikuje schemat, ACL, rate limits, side effects i przekazuje wywołanie do narzędzia.
6. Narzędzie zwraca wynik. Backend sanitizuje nieufne treści i dodaje je do kontekstu.
7. Agent kończy odpowiedź lub uruchamia kolejny dozwolony krok; wszystkie etapy mają spans w trace.

## Cztery awarie, o których zapyta lider

**Tool timeout:** LLM czeka za długo na API; dodaj timeout i circuit breaker. **Duplicate retry:** użytkownik kliknął dwa razy, a agent powtórzył zakup/akceptację; użyj idempotency key. **Prompt injection:** dokument z RAG próbuje przekonać model do wykonania innej instrukcji; odseparuj dane od instrukcji, a realne uprawnienia sprawdzaj poza modelem. **Infinite loop:** agent wywołuje search 40 razy; ustaw limit kroków, tokenów i kosztu.

## Structured outputs i testowanie

Waliduj wynik JSON Schema; nie polegaj na tekście „zwróć tylko JSON”. Dla `approve_change` wymagaj approval, podpisu i autoryzacji narzędzia. Mierz **tool selection accuracy**, **task success rate**, **unsafe-action rate**, **latency P95**, **cost/request**, **retries** i **abstention quality**.

## Prompty i uprawnienia — kluczowe rozróżnienie

Instrukcja „Nigdy nie ujawniaj danych” jest przydatną zasadą zachowania, lecz **nie zastępuje** filtrów ACL, RBAC, Entra ID, mechanizmów DLP, scoping tokens czy sprawdzania uprawnień w usłudze docelowej.

## Case study

Agent ma pobierać dokumenty z SharePointa i przygotować zmianę statusu. Wersja dla użytkownika zwykłego pobiera tylko odczyty z jego uprawnień. Akcja zapisu trafia do osobnego API, które wymaga zatwierdzenia i zapisuje audyt. Gdy wyszukiwanie nie daje źródeł, agent **odmawia pewnej odpowiedzi**.

Źródła: [Copilot Studio security](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance), [OpenTelemetry GenAI semantics](https://opentelemetry.io/docs/specs/semconv/gen-ai/).
