# Context Engineering: co trafia do modelu i kiedy

> **Context engineering:** organizowanie informacji i stanu, które **rzeczywiście trafiają do modelu** podczas odpowiedniego wywołania. To szersze niż pisanie jednej instrukcji.

## Przykładowa struktura wywołania
- **System/developer/agent instructions:** trwałe reguły działania składane przez aplikację.
- **User message:** aktualna prośba i ewentualne załączniki.
- **History:** wybrane poprzednie wiadomości. Własna aplikacja musi zdecydować, które zachować.
- **Retrieved context:** fragmenty z SharePoint, SQL, Azure AI Search, oznaczone źródłem.
- **Tool output:** np. obliczenia z Code Interpreter; traktuj jako dane wymagające oceny.
- **Tool schemas:** lista dostępnych narzędzi, argumentów i ograniczeń.

## Stałe instrukcje kontra stała wiedza
„Odpowiadaj po polsku i cytuj dokumenty” jest **instrukcją**. „Pracuj na aktualnej procedurze Q-102” jest potrzebą **wiedzy** — lepiej dostarczyć ją z kontrolowanego źródła, a nie wpisywać zawartość w system prompt. „Zapamiętaj wybraną jednostkę organizacyjną” dotyczy **stanu sesji/pamięci aplikacji**. Każda z tych warstw ma inny cykl życia.

## Token budget i selekcja
Context window jest ograniczone. Nie ładuj całego SharePointa do promptu. Najpierw filtruj po ACL i statusie źródła, potem retrieval, reranking, deduplikacja, a w promptcie zachowaj tylko istotne fragmenty z metadanymi. **Context poisoning** to celowe zatrucie tych danych nieprawdziwą lub złośliwą treścią.

## Przykład w Azure
Flask na App Service otrzymuje żądanie po Entra SSO. Backend sprawdza tożsamość i uprawnienia, odpytuje Azure AI Search, składa kontekst i wysyła go do LLM przez odpowiednie API. Jeśli model zażąda Code Interpreter, narzędzie działa w zgodnym runtime, a nie automatycznie w procesie Flaska. **Managed Identity i Key Vault** pomagają unikać trzymania kluczy w kodzie.

## Jak debugować prompt?
Zapisz wersję szablonu, identyfikatory dokumentów, parametry modelu, typy narzędzi, ocenę tokenów, latencję i koszty. Logi mogą zawierać dane wrażliwe — stosuj maskowanie i retencję. Porównaj wyniki na golden set przy tej samej wersji dokumentów.

**W ofercie enterprise environment:** prompt and context engineering, observability, latency, tokens, cost telemetry i privacy są osobnymi wymaganiami — powiedz, jak je mierzysz.
