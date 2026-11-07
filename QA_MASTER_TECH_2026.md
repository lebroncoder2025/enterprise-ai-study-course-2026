# Kontrola jakości — Enterprise AI Master TECH (2026-11-06)

## Zakończone testy

- Nowy moduł przetestowany na silniku Chromium po inline złożeniu CSS/JS (środowisko testowe blokuje adresy `localhost` i `file://`, dlatego test lokalnej nawigacji przeprowadzono na równoważnym dokumencie inline).
- **29** rozdziałów w module narzędzi / fine-tuningu / Agentic / MLOps; numeracja kafelków i bocznego menu **01–29**.
- **11** laboratoriów w module: 3 zachowane + 8 dodanych łącznie; sprawdzono obliczenia gradientu, parametrów LoRA, 4-bit memory, tracer agenta, confusion matrix i release gate.
- **76** pytań z wyborem odpowiedzi i wyjaśnieniami.
- Podstawowy kurs: 8 kafelków w ścieżce priorytetowej wyświetla teraz 01–08; skrypt uruchamia się bez błędów JS.
- Widok 390 px: brak poziomego overflow w rozdziale Azure Enterprise.
- 6 skryptów Pythona (licząc 4 podstawowe + 2 architektury): uruchomiono lokalnie z poprawnymi wynikami; LoRA mini przykład: MSE z 0.046 do blisko 0.
- Zestaw plików `index.html`, `START_TUTAJ.html` i `narzedzia/index.html`: brak brakujących lokalnych plików JS/CSS/MP4.
- 7 schematów SVG ładuje się w samodzielnym kursie dzięki data URI; rozdziały Foundry, Azure i fine-tuning zachowują czytelność i kolorystykę.

## Czego nie potwierdzam

- Nie mam dostępu do zalogowanego tenanta Microsoft, więc **nie testowałem prawdziwego deploymentu Foundry**, Copilot Studio ani App Service.
- W testowej przeglądarce zewnętrzne strony i lokalny serwer są blokowane, więc **nie potwierdzam działania każdego osadzonego wideo YouTube ani każdego zewnętrznego screenshotu**. Są oryginalne adresy źródłowe, alternatywna domena w odtwarzaczu i bezpośrednie linki.
- Każda funkcja Azure wymaga sprawdzenia statusu GA/Preview, zgodności regionu, modelu, API, rodzaju usługi i polityk tenant.
- Laboratoria są symulacjami edukacyjnymi, a nie integracjami produkcyjnymi. Testowane obliczenia matematyczne są rzeczywiste na uproszczonych danych.
- To kurs techniczny, nie formalna dokumentacja enterprise environment i nie zastępuje procedur GxP.


## Konsolidacja — 2026-11-07

- Portal startowy prowadzi do kursu głównego, 29-rozdziałowego toolkit, sprintu, wersji jednoplikowej i galerii makiet.
- Dodano 17 edukacyjnych makiet offline oraz 17 widoków PNG; autentyczne zrzuty producentów w kursie technicznym nadal pochodzą ze wskazanych źródeł online.
- Zaawansowany odtwarzacz używa lokalnej polskiej animacji tam, gdzie jest dostępna; oryginalny materiał wydawcy pozostaje opcjonalny.
- Testy konsolidacji dopisuje się po ich wykonaniu; ten wpis nie deklaruje jeszcze wyniku QA.
