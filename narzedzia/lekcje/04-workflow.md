# 04 · Stały workflow, agent generatywny i agent autonomiczny — trzy różne sposoby pracy

> **Różnica nie polega tylko na tym, czy jest LLM.** Chodzi o to, kto wybiera kolejne kroki, co uruchamia proces i gdzie egzekwowane są warunki bezpieczeństwa.

## Typ A: z góry ustalony workflow (deterministyczny przebieg)

**Przykład:** „Co rano pobierz nowe zgłoszenia → przefiltruj status → przypisz kolejkę → wyślij raport”.

- **Trigger:** harmonogram 8:00.
- **Akcje:** pobierz listę, warunek `status == NEW`, wywołaj API, wyślij wiadomość.
- **Decyzja:** programista z góry ustala dozwolone gałęzie.
- **Zaleta:** audytowalność i przewidywalność kolejności.
- **Ograniczenie:** nowe, nieprzewidziane sytuacje mogą wymagać zmiany flow.

**Uwaga:** nawet w stałym workflow może istnieć krok generatywny (np. streszczenie), którego tekst będzie różny. „Deterministyczny workflow” oznacza przede wszystkim przewidywalne sterowanie krokami, a nie identyczne słowa LLM-a.

## Typ B: conversational Topic — kontrolowana ścieżka dialogu

**Przykład:** użytkownik pyta o zgłoszenie. Agent zadaje pytania o system i numer, waliduje format, a potem wywołuje narzędzie. Kolejność pytań i warunki są ustalone w Topic. To nadal może używać LLM do rozumienia intencji i generowania fragmentu odpowiedzi.

## Typ C: generative orchestration — model planuje w ramach dostępnych narzędzi

**Przykład:** „Znajdź przyczynę opóźnień w zatwierdzaniu dokumentów i przygotuj podsumowanie”. Orkiestrator może wybrać: wyszukaj dokumentację → sprawdź rekordy w SQL → oblicz trendy → zredaguj raport. Kolejność zależy od pytania, wyników i opisów narzędzi. Zbiór dostępnych tooli, scopes oraz polityki pozostają jednak zdefiniowane przez twórcę systemu.

## Typ D: autonomia zdarzeniowa (event-driven agent)

**Przykład:** nadejście zgłoszenia z określoną cechą uruchamia agenta *bez pytania w czacie*. Agent klasyfikuje problem, szuka danych i proponuje następne kroki. Przed każdą zmianą stanu wymagającą zatwierdzenia przechodzi do człowieka. **Autonomia nie oznacza „bez kontroli”**.

### Jedno zadanie, cztery architektury

| Cecha | Flow | Topic | Generative orchestration | Agent zdarzeniowy |
|---|---|---|---|---|
| Kto uruchamia | Zdarzenie / harmonogram | Zwykle użytkownik/intencja | Użytkownik lub wspierany trigger | Zewnętrzne zdarzenie |
| Kto wybiera kroki | Projektant flow | Projektant Topic | Orkiestrator LLM w granicach tooli | Orkiestrator po triggerze |
| Czy jest plan dynamiczny | Nie musi | Zwykle mało | Tak | Tak, jeśli tak zaprojektowano |
| Ryzyko | Błąd logiki/konfiguracji | Niezebrana informacja | Niewłaściwy tool lub plan | Niepożądana akcja bez użytkownika |
| Zalecana kontrola | Walidacja kroków | Warunki i slot filling | Limity, zatwierdzenia, traces | Autoryzacja triggerów, approvals, audyt |

## Jak sprawdzić, czy to naprawdę agent?

**Test:** „Co się stanie, kiedy trafi nietypowe zadanie?”. Jeśli system zawsze uruchamia te same pięć kroków, to przede wszystkim workflow. Jeśli model potrafi dobrać narzędzie i kolejny krok na podstawie celu i wyniku, masz istotny element agentowości. Ale agenta można ograniczyć do bardzo wąskiego zakresu.

## Przykład w Copilot Studio: dwie implementacje tego samego przypadku

**Wariant kontrolowany:** Topic „Wyślij przypomnienie o zatwierdzeniu” → pobierz identyfikator → sprawdź format → sprawdź uprawnienia → Agent Flow wysyłający wiadomość. Bez wyliczania planu przez LLM.

**Wariant agentowy:** użytkownik mówi „Przygotuj ponaglenia dla zaległych dokumentów”. Agent sam wyszukuje dokumenty, dobiera właścicieli i przygotowuje listę. **Jednak wysyłanie wiadomości wymaga zatwierdzenia**. Zmiana kolejności działań nie daje modelowi nowych uprawnień.

## Zasady projektowe w środowisku regulowanym

- Ogranicz uprawnienia (*least privilege*), zamiast liczyć na słowne zakazy.
- Rozdziel narzędzia **read** (wyszukiwanie) od **write** (modyfikacje).
- Każdą akcję wysokiego ryzyka traktuj jako proces z autentykacją, walidacją i aprobatą.
- Rejestruj: kto uruchomił, jakie dane pobrano, które narzędzie wywołano, co model zaproponował i kto zatwierdził.
- Testuj zdarzenia fałszywe, duplikaty, timeout, retry i *idempotency* — ponowienie nie powinno generować podwójnej operacji.

**Wypróbuj symulator „Flow vs agent” w zakładce Laboratoria.** Zmieniając zakres autonomii i dostęp do API, zobaczysz przykładowy ślad wykonania. To ilustracyjny symulator logiki — nie uruchamia prawdziwego modelu.

Źródła: [Copilot Studio Agent Flows](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview), [Generative orchestration](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-orchestration), [Autonomous agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/autonomous-agents), [VS Code harness](https://code.visualstudio.com/docs/agents/concepts/agent-harnesses).
