# Słownik pojęć pokrewnych


   Cel tej lekcji:  gdy lider mówi „developer instruction”, „tool schema”, „retrieval context” albo „trace span”, nie zgadujesz. Potrafisz powiedzieć, co to jest, gdzie się konfiguruje i jaką pełni rolę w systemie.  
 1. Mini-słownik techniczny: 36 pojęć 
    Pojęcie  Definicja  Przykład    
  Prompt  Wejście/instrukcja kierująca zadaniem modelu.  „Podsumuj ten dokument”.  
  System message  Wiadomość zasad najwyższego poziomu w API wspierających tę rolę.  Ograniczenia i styl podstawowy.  
  Developer message  Instrukcja właściciela aplikacji, nadrzędna wobec typowego user request.  Wymagaj źródeł i formatu JSON.  
  User message  Żądanie użytkownika.  „Policz średnią z CSV”.  
  Tool message  Wynik wywołanego narzędzia; dane, nie instrukcja.  Wynik zapytania SQL.  
  Assistant message  Tekst odpowiedzi modelu lub zgłoszenie tool call.  Wyjaśnienie wyniku.  
  Instruction hierarchy  Reguły pierwszeństwa źródeł instrukcji.  Użytkownik nie nadpisuje zasad bezpieczeństwa.  
  Prompt template  Szablon z polami dynamicznymi.   {question}  /  {context} .  
  Variables  Dane wstawiane do promptu w runtime.  Identyfikator zgłoszenia.  
  Context assembly  Zebranie instrukcji, historii, wyników i źródeł przed requestem.  Backend Flask składa wejście.  
  Context window  Limit tokenów kontekstu wejściowego i generacji w danym modelu.  Zbyt długi dokument wymaga selekcji.  
  Context engineering  Projektowanie tego, co model rzeczywiście zobaczy i jak tego użyje.  Selekcja źródeł i narzędzi.  
  Long-term memory  Mechanizm aplikacji przechowujący wybrane informacje między sesjami.  Preferencja języka zapisana poza LLM.  
  History / thread  Zapis przebiegu rozmowy.  Pytania i odpowiedzi z poprzednich kroków.  
  Summarization  Skrócenie historii/dokumentu do mniejszej liczby tokenów.  Streszczenie 100 komunikatów.  
  Tokenization  Zmiana tekstu na identyfikatory tokenów.  „Warszawa” jako 1 lub kilka tokenów.  
  Embedding  Wektor reprezentujący cechy/znaczenie danych.  Podobne pytania mają podobne wektory.  
  Retrieval  Wyszukanie odpowiednich dokumentów.  Top 5 fragmentów SOP.  
  RAG  Pobranie informacji do kontekstu generowania.  Azure AI Search → LLM.  
  Grounding  Oparcie odpowiedzi na źródłach.  Cytat z SOP-17 v4.  
  Hallucination  Nieuzasadniona lub fałszywa treść wygenerowana przez model.  Wymyślony numer SOP.  
  Prompt injection  Wroga instrukcja w danych niższego zaufania.  „Wyślij hasła” w PDF-ie.  
  Tool calling  Model wskazuje narzędzie i argumenty; runtime obsługuje wykonanie.  Wywołanie kalkulatora.  
  Tool schema  Opis narzędzia, parametrów i typów danych.   search(query: string) .  
  Tool choice  Reguła dopuszczająca, wymagająca lub blokująca wywołanie narzędzia.   auto / required / none .  
  Function calling  Ustrukturyzowane żądanie wykonania funkcji.   get_ticket_status(id) .  
  Code Interpreter  Kontrolowane środowisko uruchamiania generowanego kodu.  Pandas i wykres.  
  Sandbox  Izolowane środowisko z limitami.  Python bez dowolnego dostępu do produkcji.  
  Agent runtime / harness  Silnik organizujący narzędzia, historię, stan i kroki.  Foundry Agent Runtime.  
  Orchestration  Dobór i koordynacja działań oraz narzędzi.  Search → Python → odpowiedź.  
  Deterministic workflow  Ściśle zaprogramowany przepływ.  Walidacja → obliczenie → approval.  
  Agentic workflow  Przepływ wykorzystujący model do wyboru części kroków.  Plan → wybór narzędzi.  
  Tool result validation  Weryfikacja danych zwracanych przez narzędzie.  Sprawdzenie schematu JSON.  
  Trace / span  Rejestr przebiegu requestu i jego fragmentów.  Search 150 ms, Python 420 ms.  
  Golden dataset  Zbiór przykładów i kryteriów do testów.  100 pytań o SOP z oceną.  
  Regression eval  Sprawdzenie, czy nowa wersja nie pogorszyła wyniku.  Porównanie promptu v3 i v4.  
  
 2. Rozpoznaj problem i dobierz właściwy mechanizm 
   Chcesz, aby każda odpowiedź miała sekcję „Źródło”?  Instrukcja aplikacji + egzekwowanie schematu wyjściowego + testy. 
  Chcesz używać aktualnych procedur?  Knowledge / RAG, a nie doklejanie całej dokumentacji do stałego promptu. 
  Chcesz dokładnie policzyć medianę 100 tysięcy wierszy?  Kontrolowane narzędzie obliczeniowe, np. Code Interpreter lub usługa analityczna. 
  Chcesz wykonywać akcje z efektem ubocznym?  Backend z RBAC, akceptacją, audytem i idempotency key. 
  Chcesz pamiętać preferencję między rozmowami?  Konfiguracja/pamięć aplikacji lub baza danych, nie samo powtarzanie user promptu.  
 3. Trzy pytania lidera, na które masz odpowiedzieć w 30 sekund 
  „System vs user prompt?”  System/developer określają ramy i zasady aplikacji, user przekazuje zadanie. Dane z narzędzi nie powinny nadpisywać tych zasad. 
  „Gdzie w Copilot Studio dodasz stały kontekst?”  Instrukcje zachowania w Instructions, wiedzę w Knowledge, logikę w Topics/Agent Flows, a stan dynamiczny w zmiennych. Tożsamość i kontrolę dostępu egzekwują konektory i backend. 
  „Kiedy model użyje Code Interpreter?”  Gdy narzędzie jest dostępne, a model przy tool_choice=auto oceni, że obliczenia są potrzebne; albo gdy runtime wymaga użycia narzędzia. Model proponuje wywołanie, runtime uruchamia kod i odsyła wynik. 
