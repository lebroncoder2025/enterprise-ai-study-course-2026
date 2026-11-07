# LLM od środka: słownik, wagi, tokeny i odpowiedź

> **Brakujący klocek:** oprócz wag model korzysta z **tokenizera i słownika tokenów**. Tekst „Warszawa” może być jednym tokenem lub kilkoma, a wagi określają, kiedy należy wygenerować daną sekwencję.

## Co fizycznie pobierasz przez Ollamę?
Silnik wykonujący model, opis architektury, informacje o tokenizerze i pliki **wytrenowanych wag** (często GGUF w lokalnych środowiskach). Wagi to tablice liczb zapisane binarnie. W Pythonie najczęściej spotkasz `.safetensors`, `.pt`/`.pth`; lokalnie również `.gguf`. Nie są to miliardy linijek kodu ani tabela z gotowymi faktami.

## Dokładna droga pytania
1. Użytkownik wpisuje „Jaka jest stolica Polski?”. **Tokenizer** dzieli tekst na tokeny, którym odpowiadają integer ID.
2. **Embedding table** mapuje identyfikatory na wektory liczb. To jedna z wyuczonych macierzy modelu.
3. **Transformer** przetwarza wektory przez wielokrotne operacje attention, projekcje macierzowe i nieliniowości. Wagi tych warstw kodują wyuczone zależności między pojęciami.
4. **Output projection** tworzy listę wyników (*logits*) dla możliwych następnych tokenów.
5. **Softmax** przekształca logity w rozkład prawdopodobieństw; algorytm dekodowania wybiera kolejny token.
6. Tokenizer dekoduje ID na tekst. Proces powtarza się token po tokenie.

## Dlaczego „Warszawa” nie jest pojedynczą wagą?
W modelu nie istnieje zazwyczaj rekord `Polska = Warszawa`. Informacje i wzorce są **rozproszone w wielu parametrach**. Żaden pojedynczy parametr nie oznacza „Warszawa”. **Słownik mówi, jakie fragmenty tekstu można wyemitować**, a **wytrenowane wagi — w jakich kontekstach** warto je wyemitować. Model może w ten sposób odtwarzać znane fakty bez internetu, ale może też się mylić.

## Trzy różne znaczenia „embedding”
**Token embedding** jest wewnętrzną reprezentacją tokenów modelu. **Sentence/document embedding** pochodzi z modelu embeddingowego do semantycznego wyszukiwania. **Vector index** przechowuje wektory dokumentów i umożliwia retrieval. Zbieżna nazwa nie oznacza, że to zawsze ta sama macierz, ten sam model lub te same wymiary.

## Co zmienia thinking, a co fine-tuning?
Większy budżet rozumowania może oznaczać więcej tokenów pośrednich lub dodatkowe kroki inferencji, ale **nie musi aktualizować wag**. Fine-tuning uruchamia osobny proces treningowy zmieniający parametry. RAG dołącza dokumenty do kontekstu i nie zmienia wag.

**Związek z enterprise environment:** umiej opowiedzieć ten przepływ bez stwierdzenia, że Azure AI Search „przechowuje wiedzę całego modelu”.
