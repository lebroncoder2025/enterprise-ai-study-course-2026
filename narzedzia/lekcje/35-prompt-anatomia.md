# Prompt Engineering od zera — anatomia dobrej instrukcji

> **Definicja:** prompt engineering to projektowanie instrukcji i przykładów tak, aby model wykonywał zadanie możliwie dobrze i powtarzalnie. Context engineering obejmuje też wybór i dostarczenie informacji, stanu i narzędzi do całej interakcji.

## Pięć części solidnego promptu
1. **Cel:** „Stwórz streszczenie zgłoszenia jakościowego”. Określ, dla kogo i po co.
2. **Dane wejściowe:** „Użyj wyłącznie poniższego opisu i zatwierdzonego SOP”. Nie twierdź, że model ma dostęp do danych, których nie dostarczono.
3. **Reguły:** „Nie wymyślaj numerów procedur. Gdy brak podstawy, powiedz, czego nie wiesz”.
4. **Format:** „Zwróć JSON: status, risks[], sources[]”. Jeśli API wspiera strukturalny format, waliduj go po stronie aplikacji.
5. **Kryterium jakości:** „Każde twierdzenie o obowiązku musi zawierać cytat z dokumentu”. To materiał do późniejszej ewaluacji.

## Słaby prompt i lepsza wersja
**Słaby:** „Przeanalizuj te dokumenty i zrób coś sensownego”. Nie wiadomo, jaki wynik jest poprawny.

**Lepszy:** „Jesteś asystentem do wstępnego porządkowania *przykładowych* zgłoszeń jakościowych. Na podstawie dostarczonych, oznaczonych źródeł utwórz maksymalnie 5 punktów: problem, przyczyna deklarowana, brakujące dane, proponowane pytania i źródła. Nie wydawaj decyzji GxP. Jeśli źródło nie potwierdza twierdzenia, oznacz `do weryfikacji`. Odpowiedz po polsku”.

## Role wiadomości mają znaczenie
**System/developer** zawierają reguły środowiska lub aplikacji (zależnie od API). **User** przekazuje zadanie. **Tool result** przynosi dane. **Assistant** to odpowiedź lub wywołanie narzędzia. Samo nazwanie tekstu „SYSTEM” wewnątrz dokumentu PDF nie podnosi jego uprawnień.

## Prompt ≠ bezpieczny backend
Instrukcja „nie ujawniaj danych wrażliwych” pomaga, ale potrzebujesz też autoryzacji, filtrów źródeł, walidacji API i kontroli logów. Formalna zgodność z GxP wymaga oceny przeznaczenia i ryzyka, a nie tylko dobrego promptu.

**Ćwiczenie:** dodaj do promptu cel, format i dwie zasady odmowy. Następnie zapytaj, co będzie mierzone przez test regresyjny.
