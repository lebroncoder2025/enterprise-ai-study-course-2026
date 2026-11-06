# 02 · Microsoft Copilot Studio — od pustego projektu do działającego agenta

> **Cel laboratorium:** stworzyć agenta „Quality Knowledge Assistant”, który odpowiada na pytania z *zatwierdzonych* dokumentów, przyznaje się do braku danych i może wystawić zgłoszenie **dopiero po zatwierdzeniu przez człowieka**. Przykład jest szkoleniowy, nie jest procedurą pharmaceutical organization ani pharmaceutical company.

## Najpierw wybierz odpowiedni typ rozwiązania

W aktualnej platformie Microsoft opisuje różne **harnesses**. Dla schematycznego asystenta pracowniczego z Topics i Agent Flows dokumentacja nadal pokazuje **standard harness**. Nowsze środowisko **GitHub Copilot harness** prezentuje m.in. Build, Preview, Evaluate, Monitor oraz Tools, Knowledge, Skills i Memory. Kolejność ekranów i możliwości zależy od typu agenta, uprawnień i funkcji wdrażanych etapami. **Nie zakładaj, że instrukcja z jednego harnessu pasuje do drugiego.**

## 16 kroków — praktyczna ścieżka w standard harness

1. **Wejdź na** [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com). Zaloguj się kontem służbowym/organizacyjnym, jeżeli masz odpowiednie uprawnienia i licencję.
2. **Wybierz środowisko Power Platform** (environment). Rozdziel Dev / Test / Prod. Nie buduj produkcyjnego agenta w przypadkowym środowisku osobistym.
3. **Utwórz agenta:** na stronie głównej wpisz opis, np. *„Asystent pomagający znajdować zatwierdzone procedury i zgłaszać pytania do właściciela procesu”*, albo wybierz Create blank agent. Wybór harnessu i nazwy przycisków może zależeć od UI.
4. **Ustaw język główny i nazwę**. Zadbaj o jednoznaczny opis przeznaczenia. Niektórych parametrów, np. języka głównego, nie zmienia się swobodnie po utworzeniu.
5. **W Overview → Instructions** wpisz stałe zasady działania. To jest kluczowe miejsce dla tego, o co pytałeś: trwałego „dodatku do każdego pytania”. Treść reguł widać dalej w gotowym szablonie.
6. **Dodaj Knowledge**: Overview/Knowledge → Add knowledge. Wybierz źródło, np. SharePoint, pliki, witrynę lub Azure AI Search, jeżeli jest dostępne i dozwolone w organizacji.
7. **Opisz źródło wiedzy**, np. „Wyłącznie aktualnie zatwierdzone instrukcje QMS”. Dobre nazwy i opisy pomagają orkiestratorowi wybierać właściwe źródła.
8. **Sprawdź uprawnienia źródła**. Dostępność dokumentu dla indeksu i dostępność dla pytającego to dwa różne problemy. Przetestuj konto z ograniczonym dostępem.
9. **Ustal sposób orkiestracji**: Topics (bardziej kontrolowana ścieżka) albo generative orchestration (model wybiera wiedzę/narzędzia w ramach reguł). Można łączyć kontrolowane kroki z generacją w wybranych węzłach.
10. **Zbuduj Topic** „Zgłoszenie pytania o procedurę”. Dodaj trigger / opis celu, pytanie o identyfikator procedury, warunek walidacyjny, wywołanie narzędzia oraz komunikat końcowy.
11. **Dodaj narzędzie**: np. Agent Flow / Power Automate, konektor, REST API albo MCP (zależnie od harnessu, licencji i konfiguracji). Agent nie może wywołać funkcji, której nie udostępnisz.
12. **Do działania zmieniającego stan dodaj Approval**. Przykład: przygotuj szkic wpisu w systemie, pokaż użytkownikowi dane i uzyskaj jego potwierdzenie przed zapisem. Sam prompt „zawsze proś o zgodę” NIE zastępuje rzeczywistej kontroli API.
13. **Zdefiniuj fallback / abstention**. Jeżeli brak zatwierdzonego źródła: „Nie znalazłem wiarygodnej podstawy. Skontaktuj się z właścicielem procesu.” Nie zgaduj numerów SOP.
14. **Test w Preview / Test your agent**: min. 10 zwykłych pytań, 5 pytań podchwytliwych, 5 prób wyjścia poza zakres, 3 konta o różnych uprawnieniach. Zapisz wyniki, nie tylko demo.
15. **Publish** publikuje aktualną konfigurację. Następnie w **Channels** dodaj odpowiedni kanał: Teams, Microsoft 365 Copilot, witryna testowa lub produkcyjna — w zależności od harnessu i polityk. **Publikacja i dodanie do kanału to osobne czynności**.
16. **Udostępnij w pilotowej grupie**, zweryfikuj logowanie, licencje, odpowiedzi i uprawnienia. Dopiero potem szersze wdrożenie. Monitoruj rozmowy, błędy, koszty i odchylenia.

### Gdzie potem publikujesz?

| Kanał | Kiedy pasuje | Czego pilnować |
|---|---|---|
| **Microsoft Teams** | Asystent pracowniczy w pracy codziennej | Uprawnienia użytkowników, zasady Teams admin, instalacja, udostępnienie |
| **Microsoft 365 Copilot** | Agent dostępny z doświadczenia Microsoft 365 | Konfiguracja kanału, zgodność licencji, admin approval i konto pracownika |
| **Demo website** | Testy i pokaz dla stakeholderów | **Nie traktuj jako serwisu produkcyjnego**; w wybranych konfiguracjach uwierzytelnianie jest ograniczeniem |
| **Live website / custom app** | Chat na firmowym portalu | Autoryzacja, secure tokens dla Web Chat/Direct Line, rate limiting i monitoring |
| **SharePoint** | Asystent związany z firmową witryną i jej zasobami | Sprawdź obsługę kanału i zasady dostępu w konkretnej konfiguracji |

### Mapa ekranów (rzeczywiste obrazy z Microsoft Learn; wczytywane z internetu)

<figure class="official-shot"><img loading="lazy" src="https://learn.microsoft.com/en-us/microsoft-copilot-studio/media/fundamentals-get-started/home-page-describe-your-agent.png" alt="Oficjalny screenshot Microsoft: ekran opisu tworzonego agenta"/><figcaption>Microsoft Learn: pole, w którym opisujesz nowego agenta. <a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started" target="_blank" rel="noopener noreferrer">Strona źródłowa ↗</a></figcaption></figure>

<figure class="official-shot"><img loading="lazy" src="https://learn.microsoft.com/en-us/microsoft-copilot-studio/media/knowledge/knowledge-add-existing-copilot-dialog.png" alt="Oficjalny screenshot Microsoft: wybór źródeł wiedzy SharePoint, Azure AI Search, Dataverse"/><figcaption>Microsoft Learn: Add knowledge. Zwróć uwagę na SharePoint, Azure AI Search i Dataverse. <a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-existing-copilot" target="_blank" rel="noopener noreferrer">Strona źródłowa ↗</a></figcaption></figure>

<figure class="official-shot"><img loading="lazy" src="https://learn.microsoft.com/en-us/microsoft-copilot-studio/media/publication-add-bot-to-msft-teams/publish-teams-enable.png" alt="Oficjalny screenshot Microsoft: publikowanie agenta do Teams i Microsoft 365 Copilot"/><figcaption>Microsoft Learn: konfiguracja kanału Teams / Microsoft 365 Copilot. <a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams" target="_blank" rel="noopener noreferrer">Strona źródłowa ↗</a></figcaption></figure>

<figure class="official-shot"><img loading="lazy" src="https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/media/classic-vs-new/new-experience-build-page.png" alt="Oficjalny Microsoft Learn: GitHub Copilot harness Build, Instructions, model, tools, knowledge, memory"/><figcaption>Microsoft Learn: nowe Build w GitHub Copilot harness — zwróć uwagę, że to inny ekran niż standardowy Topics. <a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview" target="_blank" rel="noopener noreferrer">Źródło ↗</a></figcaption></figure>

## Trzy najczęstsze błędy

**Błąd 1:** „Dodałem PDF, więc agent wie, co ma robić”. Nie — PDF jest **Knowledge**, nie polityką działania. Zachowanie trzeba ustalić w Instructions / Topics i kontrolach systemu.

**Błąd 2:** „Opublikowałem, więc wszyscy w firmie mają dostęp”. Nie — kanał, sharing, uprawnienia, licencje i zasady administratora są osobne.

**Błąd 3:** „Agent podejmie decyzję o zmianie GxP, skoro podałem mu procedurę”. Nie — decyzje o istotnych skutkach powinny mieć odpowiednie role, kontrolę dostępu i formalne zatwierdzanie.

**Oficjalne instrukcje:** [Create an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-first-bot), [Agent knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-existing-copilot), [Teams i M365](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams), [Website](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-connect-bot-to-web-channels).
