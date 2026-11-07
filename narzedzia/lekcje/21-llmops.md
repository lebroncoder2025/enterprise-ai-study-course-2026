# LLMOps: traces, evals, golden set, koszt i jakość


> **W jednym zdaniu:** Aplikacja LLM może działać technicznie bez błędów HTTP, a mimo to udzielać złych odpowiedzi. LLMOps łączy monitoring techniczny, semantyczny i biznesowy.

## Jeden trace od wejścia do wyjścia

`request → auth → retrieval → rerank → prompt assembly → model inference → tool call → validation → response`

Każdy krok jest **spanem**, a pełna historia requestu to **trace**. Zapisujemy metadane: wersja promptu/modelu, liczba tokenów, latency, cost, status toola, rozmiar kontekstu. Treści wrażliwe maskujemy zgodnie z polityką, a nie logujemy bezrefleksyjnie.

## Cztery poziomy ewaluacji

1. **Retrieval:** recall@k, MRR/nDCG, citation coverage.
2. **Generation:** faithfulness/groundedness, answer relevance, hallucination, refusal/abstention.
3. **Agent execution:** correct tool use, parameter validation, task completion, liczba kroków, niebezpieczne działania.
4. **Business:** adoption, satysfakcja, oszczędność czasu udowodniona pomiarem, incident rate.

## Golden dataset i regresja

Tworzysz testy: `id, user_question, expected_behavior, relevant_doc_ids, allowed_tools, prohibited_actions, severity`. Przy każdej zmianie modelu lub promptu odpalasz **ten sam zestaw**. Automatyczny LLM judge może pomagać, ale porównuj go z ocenami ludzi i kalibruj dla domeny.

## SLO dla agenta — przykład ćwiczeniowy

- 99.5% requestów bez awarii technicznej.
- P95 latency pod 5 sekund dla prostych zapytań, osobny limit dla agentów wieloetapowych.
- 0 nieautoryzowanych zapisów do systemów GxP.
- Groundedness powyżej progu ustalonego na własnym zestawie testowym.

To są **przykładowe cele**, a nie standardy enterprise environment. Próg należy wyprowadzać z ryzyka i potrzeb użytkowników.

## Foundry i Azure Monitor

Foundry może pokazywać ślady agenta oraz ewaluacje; zależnie od konfiguracji integruje się z Application Insights i Log Analytics. Włączenie tracingu wymaga kontroli dostępu, retencji danych i kosztów. Dostępność funkcji może zależeć od typu agenta i statusu preview.

Źródła: [Foundry agent tracing](https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept), [Foundry monitoring](https://learn.microsoft.com/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard).
