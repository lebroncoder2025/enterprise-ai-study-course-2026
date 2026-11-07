# Case study na rozmowę z liderem: pytania i architektura

> **Cel:** pokaż, że potrafisz uzasadnić architekturę, wskazać warstwy ryzyka i zaproponować konkretny test. Nie chodzi o udawanie, że wdrożyłeś rozwiązanie, którego nie realizowałeś.

## Problem edukacyjny
Firma chce asystenta do zadawania pytań o zatwierdzone procedury, z opcjonalnym przygotowaniem szkicu zgłoszenia. Dokumenty znajdują się w uprawnionych źródłach. Błędna informacja może wprowadzić użytkownika w błąd. Działanie `create_ticket` ma efekt uboczny.

## Architektura — od kliknięcia do wyniku
1. **SSO i authorization:** Entra ID uwierzytelnia użytkownika; backend weryfikuje jego dostęp do operacji i dokumentów.
2. **UI i API:** Azure App Service hostuje web UI/backend, odpowiedzialny za walidację, rate limiting i integrację.
3. **Retrieval:** Azure AI Search zwraca tylko uprawnione, aktualne fragmenty, z metadanymi źródła.
4. **LLM:** otrzymuje instrukcję, pytanie i kontekst; generuje odpowiedź z cytatami, a nie podejmuje nieodwracalnej decyzji.
5. **Tooling:** jeśli trzeba utworzyć szkic, model może zaproponować narzędzie, ale runtime waliduje argumenty i wymaga approval przed zapisem.
6. **Evals:** golden set z typowymi pytaniami, nieobecnymi źródłami, atakami i różnymi poziomami dostępu.
7. **MLOps/LLMOps:** tracing, koszty, latency, wersjonowanie promptu/indeksu, canary i rollback.

## Pięć pytań, które może zadać lider
**1. Dlaczego nie fine-tuning?** Procedury są aktualizowane; potrzebujemy źródeł i cytowalności. RAG jest naturalnym pierwszym kandydatem.

**2. Dlaczego nie autonomiczny agent?** Wyszukiwanie i odpowiedź mogą być prostą ścieżką. Autonomia ma sens tylko dla zadań o zmiennym planie i pod kontrolą narzędzi.

**3. Co monitorujesz?** Retrieval quality, faithfulness, refusal, p95 latency, cost per successful task, tool failures, unauthorized access attempts.

**4. Jak wdrażasz zmianę promptu?** Wersja → golden set → error analysis → test uprawnień → canary → monitoring → rollback przy spadku jakości.

**5. Jak zapewnisz GxP?** Najpierw ustal przeznaczenie i ryzyko. Następnie dobierz wymagania, kontrolę zmian, dowody testowe i nadzór odpowiedni do zakresu regulowanego; nie twierdź, że każdy chatbot jest automatycznie systemem GxP.

## Odpowiedź po angielsku — wytłumacz trade-off
> “I would start with a simple, access-controlled retrieval architecture and define an evaluation baseline. I would add agentic tool use only where multi-step actions provide measurable value, and I would enforce authorization, approvals and audit trails outside the LLM.”

**Ćwiczenie:** narysuj pięć prostokątów — UI, backend, search, model, monitoring — a obok umieść Entra ID i system zewnętrzny. Opisz, co się dzieje, gdy Search zwraca pusty wynik, a co, gdy agent prosi o zapis.
