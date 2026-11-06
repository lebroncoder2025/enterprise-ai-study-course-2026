# QA i ograniczenia — 6.11.2026

**Sprawdzone automatycznie:**
- 12 lekcji i 36 pytań quizowych: wszystkie strony otwierają się bez błędu JavaScript.
- 12 krótkich filmów MP4: każdy plik odczytuje `ffprobe`, czas ok. **48 sekund**.
- Egzamin: 12 pytań; progres quizów i notatki przechodzą między ekranami.
- Przeglądarka testowa: Chrome/Chromium, układy **1365×900** oraz **390×844**;
  brak poziomego rozsuwania dla wszystkich 12 lekcji.
- Szybki przebieg: quiz, zapis notatki, ukończenie lekcji, wczytanie iframe,
  egzamin, linki do podrozdziałów.
- Zapis postępów wykorzystuje wyłącznie localStorage przeglądarki.

**Czego nie da się obiecać:**
- W laboratorium starej wersji występują uproszczenia matematyczne; nie jest to GPT ani usługa Azure działająca lokalnie.
- Nie można zagwarantować odtwarzania wszystkich filmów YouTube w każdej przeglądarce. Dostępne są linki bezpośrednie.
- Część polskich linków prowadzi do dłuższego filmu, ale z ustawionym krótkim fragmentem. Faktyczne zakończenie odtwarzania zależy od YouTube.
- Autorskie animacje MP4 mają polskie napisy, **nie mają nagranego ludzkiego lektora**. Synteza głosu z przeglądarki jest opcjonalna i zależy od systemu.
- Teksty i filmiki mają charakter edukacyjny. Praktyki farmaceutyczne w pracy trzeba sprawdzać wobec aktualnych wymagań, zatwierdzonych SOP i kompetentnego QA.
