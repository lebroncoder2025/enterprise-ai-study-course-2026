# Kiedy LLM wywołuje Code Interpreter


   Najważniejsze:  model  może zaproponować  użycie Code Interpreter podczas generowania odpowiedzi.  Nie uruchamia jednak Pythona własnymi wagami.  Kod wykonuje osobny, kontrolowany runtime. Narzędzie musi być dostępne i zgodne z daną usługą.  
 
 1. Kiedy dokładnie zapada decyzja? 
 
  Przed wywołaniem LLM:  backend/agent runtime określa dostępne narzędzia, instrukcje i  tool_choice . Np. Code Interpreter jest dostępny w agencie Foundry i ma opis funkcji. 
  W trakcie generacji przez model:  model analizuje zadanie i opis dostępnych narzędzi. Przy  auto  może zdecydować, że potrzebuje obliczeń. 
  Zamiast końcowej odpowiedzi:  może zwrócić specjalny komunikat narzędziowy (tool call), który zawiera wybór narzędzia i dane potrzebne do jego uruchomienia. 
  Po stronie runtime:  system sprawdza uprawnienia i ograniczenia oraz uruchamia kod w izolowanym środowisku (hostowanym sandboxie albo własnej kontrolowanej usłudze). 
  Wynik wraca do modelu:  stdout, tabele, błędy lub pliki trafiają do kontekstu dalszego kroku. Model może uruchomić kolejne obliczenie albo sformułować odpowiedź. 
 
 Nie jest to drugi proces treningowy.  Wagi LLM pozostają stałe  podczas zwykłej obsługi zapytania. Model otrzymuje nową informację z wykonanego programu. 
 2. Przykład ze zgłoszeniami i CSV 
  USER: „W załączonym CSV policz medianę czasu zamykania zgłoszeń
       i przygotuj wykres słupkowy według działu”.
DEVELOPER: „Do analizy plików tabelarycznych używaj Code Interpreter.
            Nie zmieniaj plików źródłowych. Podaj ograniczenia”.
TOOLS: [code_interpreter]   tool_choice = auto

MODEL: → żądanie użycia code_interpreter
SANDBOX: pandas.read_csv(...) → groupby(...) → median(...) → chart.png
TOOL RESULT: tabela median, ścieżka chart.png, brak błędu
MODEL: „Dział A: 4 dni, dział B: 7 dni. Oto wykres...”  
 W zależności od API model może przekazać  kod do wykonania  lub wywołać abstrakcyjne narzędzie, którego obsługę przejmuje usługa. Nie każdy interfejs pokazuje identyczny JSON wywołania. 
 3. Trzy wartości  tool_choice  
    Tryb  Co oznacza  Przykład    
   auto   Model może zdecydować, czy wywołać jedno z dostępnych narzędzi, czy odpowiedzieć bez niego.  „Policz średnią” — czasem wystarczą własne obliczenia, czasem wybierze Python.  
   required   Wymaga wywołania narzędzia (spośród dozwolonych) w obsługujących to API; nie zawsze konkretnie Code Interpreter.  Backend wymaga użycia narzędzia dla analizy firmowych danych.  
   none   Zakazuje wywołań narzędzi w danym kroku.  Asystent ma tylko wyjaśnić pojęcie, bez uruchamiania kodu.  
  
 Ustawienie  tool_choice  ma sens tylko wtedy, gdy dany provider, model i wybrany endpoint obsługują dany tryb. Przygotowanie narzędzia i reguły są osobnymi kwestiami od jego dostępności. 
 4. Czemu agent czasem nie używa Pythona? 
 Możliwe przyczyny: narzędzia nie dodano do definicji agenta; model nie wspiera tool calling w danej konfiguracji; wybrano  none ; opis narzędzia jest niejasny; użytkownik nie przesłał pliku do odpowiedniej sesji; istnieje polityka blokująca wykonanie; albo model przy  auto  ocenił, że narzędzie nie jest potrzebne. 
 Nie należy obiecywać „zawsze użyje Python” na podstawie samej instrukcji językowej. Jeśli proces produkcyjny  wymaga  policzenia danych, backend może wybrać deterministyczny workflow z twardym wywołaniem usługi analitycznej i kontrolą wyniku. 
 5. Code Interpreter kontra Function Calling i RAG 
    Mechanizm  Czego dostarcza?  Gdzie jest logika?    
   Code Interpreter   Środowisko uruchomienia kodu, pliki, obliczenia, wykresy.  Kod generuje zwykle model; wykonuje sandbox.  
   Function calling   Dostęp do funkcji API o określonym schemacie argumentów.  Funkcję pisze deweloper, wykonuje własny backend lub hosted runtime.  
   RAG / Search   Wyszukane informacje i cytowalne fragmenty.  Indeks i retrieval, potem kontekst dla LLM.  
   Agent Flow   Ustalony ciąg akcji i warunków.  Silnik workflow; LLM może być tylko jednym z kroków.  
  
 6. Bezpieczeństwo i produkcja 
   Sandbox:  ograniczenia dostępu do plików, sieci, czasu, pamięci, zasobów i bibliotek. 
  Data classification:  czy wolno w ogóle przesłać CSV do tej usługi? Lokalizacja/region i retencja danych. 
  Observability:  trace decyzji, wersja promptu/modelu, wywołania narzędzia, błędy, czas działania, liczba tokenów i koszt. 
  Determinism:  dla liczb o znaczeniu regulacyjnym waliduj logikę obliczeń i wyniki, nie tylko wyświetlaj wykres. 
  Approvals:  samo uruchomienie Pythona to nie przyznanie prawa do modyfikowania systemu firmowego.  
 7. Kod demonstracyjny (pseudokonfiguracja, nie gotowy endpoint) 
  agent = {
  "model": "zgodny-model",
  "instructions": "Korzystaj z obliczeń dla danych CSV",
  "tools": ["code_interpreter"],
  "tool_choice": "auto"
}
# To schemat koncepcyjny.
# Prawidłowe nazwy pól i format zależą od konkretnego SDK/API.  
  Źródła:   Microsoft Foundry — Code Interpreter ;  Microsoft — Tool choice i kontrola wywołań ;  Microsoft Agent Framework — Tools overview . 
