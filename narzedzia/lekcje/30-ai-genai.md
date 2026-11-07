# AI, ML, Deep Learning i GenAI — pełna mapa

> **Jedno zdanie:** AI to szeroki cel tworzenia systemów wykonujących zadania wymagające inteligentnego przetwarzania; ML uczy się wzorców z danych; Deep Learning używa wielowarstwowych sieci neuronowych; GenAI generuje nową treść. Te zbiory nie są identyczne, ale się przecinają.

## Najpierw intuicja: cztery poziomy
**Artificial Intelligence (AI)** to pojęcie najszersze. System oparty na regułach „jeżeli X, zrób Y” też może być przykładem AI. **Machine Learning (ML)** jest szczególnym podejściem: algorytm dobiera parametry lub strukturę na podstawie danych zamiast dostawać wszystkie reguły ręcznie. **Deep Learning (DL)** jest podzbiorem ML opartym na wielowarstwowych sieciach neuronowych. **Generative AI (GenAI)** oznacza rodzinę zastosowań i modeli generujących treści: tekst, kod, obrazy, dźwięk czy struktury. Duże modele generatywne to zwykle DL, ale „generatywne” opisuje *co robią*, a „deep learning” — *jakiego typu model wykorzystują*.

| Pojęcie | Co dostaje? | Co oddaje? | Przykład w firmie |
|---|---|---|---|
| Klasyczny system reguł | Ustalone warunki | Akcja według `if/else` | Alarm przekroczonego limitu |
| ML — klasyfikacja | Dane historyczne z etykietami | Kategoria lub prawdopodobieństwo | Ocena ryzyka opóźnienia zgłoszenia |
| ML — regresja | Dane historyczne z wynikiem liczbowym | Liczba | Prognoza czasu obsługi |
| Deep Learning | Wektory/obrazy/tekst | Predykcja lub reprezentacja | Model rozpoznawania obrazów |
| GenAI / LLM | Instrukcja + kontekst | Sekwencja tokenów | Odpowiedź na pytanie o dokument |

## Konkretny przykład wyboru
Pytanie brzmi: „Ile zgłoszeń jakościowych będzie w następnym kwartale?”. To przede wszystkim **prognozowanie**: zacznij od analizy szeregu czasowego i prostego baseline, nie od agenta. „Które zgłoszenia są podobne?” to **wyszukiwanie/klasteryzacja/embeddings**. „Stwórz podsumowanie dziesięciu zgłoszeń” to **GenAI**. „Odszukaj procedurę, zweryfikuj status w API i przygotuj szkic zgłoszenia do akceptacji” może uzasadniać **workflow z narzędziami**.

## Co jest modelem, a co aplikacją?
**Model** to funkcja matematyczna z wytrenowanymi parametrami, np. sieć neuronowa albo drzewo decyzyjne. **Aplikacja AI** to model *plus* API, UI, uprawnienia, dane, reguły biznesowe, testy i monitoring. **Agent** to możliwa architektura aplikacji, w której model może dobierać następne działania. ChatGPT to produkt, GPT to rodzina modeli, Azure AI Search to wyszukiwarka — to nie są synonimy.

## Pułapki
- „Każdy ML to LLM” — nie. XGBoost i regresja logistyczna są ML, ale nie LLM.
- „GenAI zawsze musi mieć internet” — nie. Model lokalny korzysta z wytrenowanych wag.
- „Agent automatycznie ma dostęp do naszych systemów” — nie; uprawnienia zapewnia infrastruktura.

**Związek z ofertą enterprise environment:** ogłoszenie wymaga świadomego wyboru pomiędzy *classical model, fine-tuned model, retrieval over a foundation model i agentic workflow*. Umiej wyjaśnić, kiedy najprostsza metoda jest najlepsza.

**Powiedz na głos:** „Najpierw definiuję zadanie, dostępne dane i ryzyko. Dopiero później dobieram ML, RAG, GenAI lub workflow”.

## Uzupełnienie: multimodalne GenAI — tekst, obraz i audio

**Model multimodalny** przyjmuje lub wytwarza więcej niż jeden rodzaj danych. Interfejs może przyjmować tekst i obraz, a model zwracać tekst; inne konfiguracje obsługują wejście audio lub generowanie audio. Sama obecność przycisku „dodaj plik” nie gwarantuje, że model rozumie każdy format. Sprawdź możliwości konkretnego modelu, rozmiary i typy plików oraz sposób przetwarzania obrazu/audio.

| Zadanie | Typowy przepływ | Co walidować |
|---|---|---|
| Odczyt formularza lub tabeli ze skanu | obraz → OCR/vision → pola JSON → reguły walidacji | pola, jednostki, numer strony, pola niepewne, zgodność ze schematem |
| Opis zdjęcia/wykresu | obraz → model vision → opis lub odpowiedź | czy odpowiedź wynika z obrazu; nie zakładaj, że model poprawnie odczytał mały tekst |
| Transkrypcja spotkania | audio → ASR/transkrypcja → korekta/segmentacja → podsumowanie | nazwy, liczby, speaker diarization, znaczniki czasu i słowa negacji |
| Wyszukiwanie w nagraniu/wideo | audio + wybrane klatki → ekstrakcja → indeks lub synteza | kolejność w czasie, pominięte fragmenty, synchronizacja audio/obrazu |

**Praktyczny wybór.** Jeśli potrzebujesz dokładnych, powtarzalnych pól z faktury lub dokumentu, porównaj dedykowany OCR/document intelligence z modelem vision. Gdy układ jest nieregularny albo potrzebujesz interpretacji wykresu, vision-language model może być przydatny, ale nadal waliduj pola i niepewność. Jeśli zadanie polega wyłącznie na transkrypcji, użyj modelu ASR i mierz word error rate; nie wprowadzaj LLM do procesu bez potrzeby. W dłuższym wideo rozważ transkrypcję i selekcję klatek, zamiast wysyłać każdą klatkę do modelu.

**Ryzyka i testy.** Plik może zawierać prompt injection w obrazie, ukryty tekst, dane wrażliwe lub błędny format. Zastosuj walidację typu i rozmiaru, skanowanie, kontrolę dostępu oraz minimalizację przechowywania. Testuj na reprezentatywnych, zanonimizowanych przykładach: różne rozdzielczości, obrót, niski kontrast, tabele, pismo odręczne i brakujące pola. Oddzielnie raportuj: OCR/ekstrakcję, trafność odpowiedzi, kompletność, abstention oraz koszt i opóźnienie. Wynik modelu nie jest dowodem prawdziwości.

**Ćwiczenie.** Zeskanowany certyfikat zawiera numer partii i datę, ale model zwraca tylko numer. Nie dopisuj daty z domysłu: odpowiedź powinna wskazać brak pola albo niską pewność, zwrócić lokalizację strony/fragmentu, a aplikacja ma walidować format i skierować niepewne przypadki do człowieka.

**Źródła producenta:** <a href="https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/gpt-with-vision" target="_blank" rel="noopener">Microsoft Foundry: vision-enabled chat models</a>; <a href="https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluate-generative-ai-app" target="_blank" rel="noopener">Microsoft Foundry: evaluation datasets including multimodal examples</a>. Features and preview limits depend on the model, API version and region.

