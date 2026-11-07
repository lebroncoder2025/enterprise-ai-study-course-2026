# Azure Portal: architektura Enterprise AI od SSO do API


> **W jednym zdaniu:** Enterprise AI to nie trzy włączone usługi. To **cały łańcuch tożsamości, sieci, dostępu do danych, uruchomienia modelu, ewaluacji, kosztów i operacji**.

## Twoja architektura Flask + RAG krok po kroku

`Browser → Entra ID SSO → App Service (Flask backend) → Azure AI Search → Foundry model deployment → odpowiedź → browser`.

Aplikacja przeglądarkowa nie musi znać kluczy do modeli ani Search. To **backend** wykonuje wywołania serwerowe. Lepiej używać **Managed Identity + Entra ID/RBAC** niż stałych kluczy w kodzie, jeśli dana usługa i integracja to obsługuje. Sekrety, które pozostają, umieszczaj w Key Vault. Azure DNS / custom domain rozwiązuje adresację, ale nie zastępuje SSO ani autoryzacji do dokumentów.

## Krok po kroku po stronie Azure Portal

1. **Resource Group** z tagami owner/environment/cost center; ogranicz uprawnienia.
2. **App Service Plan** i **Web App** z Python/Flask: runtime, region, App Settings, deployment slots jeśli plan wspiera.
3. **Authentication**: Entra ID i zasady dostępu użytkownika (lub właściwy komponent pośredni). Rozdziel login użytkownika od tożsamości serwisowej backendu.
4. **Identity**: włącz system-assigned albo user-assigned managed identity.
5. **Azure AI Search**: data source, indexer lub własny ingestion, chunking, embeddings, indeksy, filtry i uprawnienia dokumentów.
6. **Microsoft Foundry**: project, deployment modelu, narzędzia, ewentualne agent runtime.
7. **Role assignments**: minimalne role dla tożsamości backendu w Search, Foundry/modelu, Key Vault, storage.
8. **Network**: rozważ private endpoints / VNet integration / public access; nie wszystko automatycznie znika z internetu.
9. **Telemetry**: Application Insights, Azure Monitor, Log Analytics, alerty, limity kosztów.
10. **Release**: CI/CD, testy regresyjne, DLP, polityki retencji, audyt zmian i rollback.

## Search zabezpieczony per użytkownik

To, że backend ma `Search Index Data Reader`, nie znaczy, że **każdy użytkownik** może widzieć wszystkie dokumenty. Implementujesz filtry bezpieczeństwa / ACL lub odpowiednią funkcję uprawnieniową end-to-end. W SharePoint trzeba rozważyć sposób przeniesienia kontekstu uprawnień oraz freshness.

## APIM, Service Bus i Durable Functions

**API Management** może pośredniczyć w wywołaniach API, realizować rate limits i zasady dostępu. **Service Bus** pomaga z zadaniami asynchronicznymi. **Durable Functions** lub orchestrator workflow zapewnia trwały stan procesów długotrwałych. Żaden z tych komponentów nie musi być obecny w każdym projekcie.

## Enterprise trade-offs

| Decyzja | Pytanie architektoniczne |
|---|---|
| SaaS LLM API vs self-hosted | regulacje, koszt, latencja, region, bezpieczeństwo danych |
| RAG vs fine-tuning | aktualność wiedzy i cytowania vs modyfikacja zachowania |
| Managed Identity vs API keys | rotacja, RBAC, blast radius, zgodność SDK |
| Direct API vs APIM | polityki, obserwowalność, limity i wielu odbiorców |
| Single agent vs graph | przewidywalność, debugging, approvals i koszt |

Źródło: [Azure App Service Python quickstart](https://learn.microsoft.com/en-us/azure/app-service/quickstart-python), [Azure AI Search RAG](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview), [Foundry setup](https://learn.microsoft.com/en-us/azure/ai-foundry/tutorials/quickstart-create-foundry-resources).
