# NLP od podstaw: tokenizacja, NER, sentyment, klasyfikacja

> **Natural Language Processing (NLP)** to dziedzina przetwarzania języka przez komputer. LLM jest jednym z narzędzi NLP, lecz wiele zadań da się wykonać prostszymi i tańszymi metodami.

## Podstawowy pipeline NLP
1. **Ingestion:** źródła tekstu (zgłoszenia, maile, dokumenty) i metadane.
2. **Preprocessing:** normalizacja kodowania, usuwanie niepotrzebnego HTML, oznaczenie języka. Uwaga na usuwanie negacji, liczb, identyfikatorów i znaków w dokumentach regulowanych.
3. **Tokenization:** podział na tokeny. W klasycznym NLP bywa podziałem na wyrazy; tokenizer LLM może używać fragmentów słów.
4. **Representation:** bag-of-words, TF-IDF, embeddingi lub cechy z transformera.
5. **Model/task:** klasyfikacja, NER, ekstrakcja, wykrywanie podobieństwa.
6. **Evaluation:** anotowane przykłady i analiza błędów według kategorii.

## NER i sentyment — konkretnie
**Named Entity Recognition (NER)** wyodrębnia encje, np. organizacje, daty, nazwy produktów, numery procedur. Dla zdania „enterprise environment w Poznaniu wprowadziło zmianę 12 maja” system może zwrócić `ORG=enterprise environment`, `LOC=Poznań`, `DATE=12 maja` — ale nie zawsze ma rację, zwłaszcza przy domenowych skrótach. **Sentiment analysis** przypisuje tekstowi wydźwięk pozytywny/negatywny/neutralny; nie jest tym samym co wykrywanie poważnego incydentu. Negatywny sentyment nie dowodzi ryzyka GxP.

## Kiedy wybrać klasyczny ML, a kiedy LLM?
Jeśli masz 100 tys. krótkich, etykietowanych zgłoszeń z 5 klasami, dobry baseline może stanowić **TF-IDF + logistic regression**. Jest tani i łatwy do ewaluacji. Jeśli trzeba wyodrębniać skomplikowane relacje z długich dokumentów, rozważ transformer/LLM z dobrze zdefiniowaną strukturą wyjścia. LLM nie daje „za darmo” poprawnej klasyfikacji — nadal potrzebujesz danych testowych i mierzenia precision/recall.

## Pułapki
W procesach regulowanych *nazwa encji* nie jest równoważna *autoryzowanemu identyfikatorowi*. „GMP” może być ważnym skrótem, którego agresywny preprocessing nie powinien usunąć. **PII detection** i NER zachodzą na siebie, ale nie są zamienne — informacje wrażliwe mogą wymagać specjalnych reguł i testów.

**Związek z ofertą enterprise environment:** preprocessing, language modelling, sentiment analysis, NER wymieniono wprost. Przećwicz definicje bez podawania fikcyjnych wdrożeń.
