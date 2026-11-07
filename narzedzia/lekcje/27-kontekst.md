# Warstwy kontekstu


   Najkrócej:  stała instrukcja mówi agentowi  jak ma pracować . Wiedza zewnętrzna dostarcza  o czym ma odpowiedzieć . Kontekst bieżącego zapytania to  to, co model dostał właśnie teraz .  
 1. Sześć warstw kontekstu 
 
    Warstwa  Co przechowuje  Kiedy trafia do modelu    
   Stałe instrukcje   Rola, język, zachowanie, zasady wyboru narzędzi.  Zwykle przygotowane przez runtime dla kolejnych wywołań, zależnie od platformy.  
   Wiadomość użytkownika   Bieżący cel, pytanie, załączniki.  Przy danym żądaniu.  
   Historia rozmowy   Poprzednie wiadomości i podjęte działania.  O ile runtime je dołącza; długą historię może streszczać lub przycinać.  
   Retrieved context / RAG   Fragmenty dokumentów znalezionych w SharePoint/Search.  Po wyszukiwaniu, zwykle tylko te pasujące do konkretnego pytania.  
   Tool result   Wynik obliczeń Pythona, API, SQL, przepływu.  Po wykonaniu narzędzia, jeśli proces jest kontynuowany przez LLM.  
   Stan aplikacji   ID użytkownika, role, wybrany projekt, język, prawa dostępu.  Nie musi być wysyłany do modelu; często najlepiej egzekwować go tylko w kodzie.  
  
 2. Gdzie kliknąć lub zapisać kontekst? 
    Środowisko  Stałe instrukcje  Wiedza i kontekst    
   Copilot Studio   Agent  Instructions  w edytorze (miejsce zależy od harnessu: Overview lub Build).  Knowledge: SharePoint, strony i źródła; Topics/zmienne; wyniki Tools lub Agent Flows.  
   Microsoft Foundry Agent Service   Instructions w definicji agenta; opcjonalnie dodatkowa konfiguracja w request/runtime.  Files, File Search, połączone narzędzia/Toolbox, wejście użytkownika i wyniki tools.  
   Własny Flask + API LLM   Backend tworzy wiadomości system/developer tam, gdzie API je wspiera.  Backend pobiera dokumenty z Azure AI Search i podaje je do żądania.  
   ChatGPT   Wspierane instrukcje użytkownika/projektu/GPT lub konfiguracja narzędzia.  Bieżący chat, załączone pliki, kontekst projektu i użyte narzędzia — zgodnie z ustawieniami.  
   Claude.ai / Claude Code   Instrukcje projektowe w Claude.ai;  CLAUDE.md  i reguły w Claude Code.  Pliki projektu, historia, podłączone narzędzia i wyniki.  
   Codex / GitHub Copilot    AGENTS.md ,  .github/copilot-instructions.md  w ich obsługiwanych zakresach.  Repozytorium, otwarte pliki, terminal, narzędzia, wybrany kontekst IDE.  
  
 3. Przykład w Azure — kiedy co się dzieje 
 
 Użytkownik loguje się przez  Entra ID . Backend poznaje tożsamość i role. 
 Przychodzi wiadomość: „Pokaż najnowszy SOP dla walidacji”. 
 Flask sprawdza prawa dostępu do dokumentów, następnie odpytuje  Azure AI Search  z właściwymi filtrami. 
 Search zwraca np. SOP-17 v4, str. 3–5. Backend wycina odpowiedni zakres i buduje kontekst. 
 Do LLM trafiają: reguły aplikacji, pytanie, fragmenty SOP oraz ewentualnie część historii. 
 LLM generuje odpowiedź; backend może sprawdzić cytaty i poprawność formatu. Tracing zapisuje identyfikator wersji promptu, latency i koszt. 
 
  Nie dzieje się:  automatyczna aktualizacja wag modelu po odczytaniu SOP. To  inference z dodatkowym kontekstem , nie fine-tuning. 
 4. Co znaczy, że instrukcja jest „na stałe”? 
 Najczęściej oznacza to, że zapisałeś ją w konfiguracji agenta lub aplikacji, a  harness dołącza ją logicznie do nowych interakcji . Nie oznacza to, że pojedynczy LLM przechowuje niezmiennie cały tekst pomiędzy niezależnymi zapytaniami; zarządza tym system wywołujący model. 
 Podobnie  memory  jest zwykle mechanizmem produktu lub bazy danych, która może przechowywać wybrane informacje między sesjami. Nie jest automatycznym treningiem wag.  Context window  to limit wejścia i wyjścia obsługiwanego w danej interakcji modelu. 
 5. Context engineering, prompt caching, truncation 
   Context engineering  — dobieranie właściwych informacji, narzędzi, formatów i historii do konkretnego zadania; szersze niż pisanie promptu. 
  Prompt caching  — technika ograniczająca ponowne liczenie części wspólnego promptu; zmniejsza koszt/latencję tam, gdzie usługa ją wspiera. Nie zmienia wag. 
  Truncation  — ucięcie części danych, gdy całość nie mieści się w kontekście. Może zgubić krytyczny dokument lub ograniczenie. 
  Conversation summary  — streszczenie historii, żeby zachować istotne informacje, ale skrócić wejście. Streszczenie może utracić szczegóły. 
  Context poisoning  — dostarczenie modelowi mylących lub złośliwych danych, np. podmiana źródła.  
 6. Scenariusz „stały kontekst” dla Copilot Studio 
  Instructions : „Zawsze odpowiadaj po polsku. Cytuj tytuł i wersję dokumentu. Nigdy sam nie zatwierdzaj zmian”.  Knowledge : SharePoint z zatwierdzonymi procedurami.  Tool : pobranie statusu zmiany z systemu jakościowego.  Topic : wymusza podanie numeru zgłoszenia.  Realne prawo dostępu : konfiguracja konektora, Entra/RBAC/ACL i walidacja narzędzia — nie sam prompt. 
  Źródła:   Microsoft — Instructions ;  Microsoft — Generative orchestration ;  Azure AI Search — RAG . 
