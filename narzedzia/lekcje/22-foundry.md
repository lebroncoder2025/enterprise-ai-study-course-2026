# Microsoft Foundry — portal, modele, agenci i tracing


> **W jednym zdaniu:** Azure Portal służy do zarządzania zasobami Azure, a **Microsoft Foundry** udostępnia środowisko do pracy z modelami, agentami, ewaluacją i operacjami AI. To powiązane, ale odrębne powierzchnie.

## Foundry krok po kroku (obecny interfejs może się zmieniać)

1. Otwórz `https://ai.azure.com` i wybierz **New Foundry** jeśli jest dostępne w Twojej organizacji.
2. Utwórz **project** w wybranej subskrypcji, resource group i regionie. Kontroluj RBAC i koszty już na tym etapie.
3. **Discover → Models**: sprawdź model, region, dostępny typ deploymentu, limit tokenów i wsparcie tools. Nazwa rodziny nie gwarantuje możliwości Code Interpreter.
4. **Deploy**: zapisz deployment name i endpoint, który backend wywoła przez API.
5. **Build → Agents**: skonfiguruj model, instrukcje, dostarczaną wiedzę i narzędzia. Agent korzysta z modelu; nie jest nowym modelem wytrenowanym od zera.
6. Dla Code Interpreter sprawdź zgodność modelu i API, dodaj narzędzie **jawnie do konfiguracji agenta lub żądania**, nie do całego Foundry globalnie.
7. **Test**: przygotuj przykłady poprawne i negatywne; nie zamieniaj demonstracji w dowód jakości.
8. **Operate / Traces / Evaluations**: przeglądaj requesty, wywołania tools, koszty, opóźnienia i ślady błędów. W razie potrzeby skonfiguruj Application Insights.

## W jakim miejscu wykonywany jest Python z Code Interpreter?

W narzędziu dostarczanym przez zgodne API lub środowisko agenta, w izolowanym runtime, **nie automatycznie na Twoim Azure App Service**. Jeżeli napiszesz własne wykonanie Python na App Service, to już odrębna architektura z osobnym sandboxem i politykami bezpieczeństwa.

## Screenshoty i weryfikacja

Poniżej dołączyłem odnośniki do prawdziwych ekranów Microsoftu. Jeżeli obraz jest zablokowany offline, użyj lokalnej **mapy ekranów** obok. Opisy i kolejność kliknięć są ważniejsze niż dokładny wygląd UI, który Microsoft regularnie aktualizuje.

Źródła: [Foundry project quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/tutorials/quickstart-create-foundry-resources), [Foundry agent workflow](https://microsoftlearning.github.io/mslearn-ai-agents/Instructions/Exercises/06-build-workflow-ms-foundry.html), [Foundry tracing](https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept).
