# Wyniki kontroli rozszerzenia GenAI/Prompt Engineering

Data: 2026-11-07.

## Zachowanie wcześniejszego kursu
- Podstawę zbudowano przez **rozpakowanie ostatniego pełnego ZIP**, a nie przez tworzenie osobnej małej paczki.
- Zachowano wcześniejsze materiały: moduły 01–29, polskie filmy MP4, screeny, diagramy, repozytoria z przykładami, skrypty Python, materiały PDF, pliki startowe.
- Poprawiono jedynie te pliki, które musiały obsłużyć dodatkowe treści: nawigacja, pytania, statystyki i pliki startowe; dołożono rozdziały 30–48, trzy nowe laboratoria i 5 schematów.

## Kontrole automatyczne
- Parser HTML: 48 unikatowych widoków lekcji i 48 kafelków w kolejności 01–48.
- JavaScript: `node --check` istniejących i nowych skryptów bez błędów.
- Chromium (renderowanie wewnętrznego samowystarczalnego HTML): wszystkie nowe trasy 30–48 otwierają się, brak wyjątków JS, 132 pytania w quizie.
- Słownik: 156 haseł, filtr wyszukiwania „QLoRA” daje właściwe wyniki.
- Laboratorium L: zmiana pól promptu aktualizuje heurystyczny wynik kompletności.
- Laboratorium M: temperatura wpływa na wynik prawdziwych obliczeń softmax, trzy prawdopodobieństwa sumują się do około 100%.
- Laboratorium N: wybór zadania aktualizuje propozycję baseline, metryki i ryzyko.
- Sprawdzian: pytanie 77 ma poprawne wyjaśnienie i zapis odpowiedzi; poprawne opcje w nowych pytaniach rozłożone równomiernie (18/19/19).
- Urządzenie 390 px: lekcja prompt engineering i słownik bez poziomego przepełnienia.
- ZIP: test CRC przechodzi, pliki tworzą kompletne archiwum.

## Czego nie testowano w pełni
- Odtwarzanie cudzych wideo YouTube i zewnętrznych screenów na każdym koncie, w każdym kraju i w każdej przeglądarce. Linki do źródeł i plan awaryjny pozostały w dotychczasowej paczce.
- Realne połączenia z Microsoft Foundry, Copilot Studio, Azure, OpenAI, Anthropic lub systemami firmowymi. Wszystkie nowe symulacje są lokalne i szkoleniowe.
- Produkcyjna walidacja GxP — lekcje opisują tylko koncepty i przykładowe mechanizmy.
