# Embeddingi, podobieństwo i wektory — na liczbach

> **Klucz:** embedding to wektor liczb reprezentujący pewne cechy lub znaczenie. Wyszukiwanie wektorowe porównuje *wektory dokumentów*, a nie czyta plików z wagami LLM-a.

## Od tekstu do liczb
Model embeddingowy otrzymuje zdanie i zwraca wektor, np. `[0.12, -0.35, 0.88, ...]`. Dla przykładu te wektory mają trzy wymiary; w praktyce mogą mieć ich setki albo tysiące. Liczby nie są współrzędnymi geograficznymi. Ich geometria pozwala porównywać podobieństwo semantyczne.

## Cosine similarity krok po kroku
Załóżmy **A = [1,0]** i **B = [0.8,0.6]**. Iloczyn skalarny to `1*0.8 + 0*0.6 = 0.8`. Długość obu wektorów wynosi 1, więc cosine similarity wynosi `0.8`. Dla **C = [0,1]** podobieństwo do A wynosi `0`. Im większy cosinus (dla wektorów znormalizowanych), tym bardziej zbliżone są kierunki. To demonstracja matematyki, nie realne embeddingi słów.

## Retrieval — co robi Azure AI Search?
Dokumenty są dzielone na fragmenty; odpowiednie pola i embeddingi są indeksowane. Pytanie użytkownika jest przekształcane w wektor **przez zgodny model embeddingowy**, a usługa wyszukuje zbliżone fragmenty. **BM25** opiera się na dopasowaniu słów. **Hybrid Search** łączy klasyczne i wektorowe wyniki; **reranking** poprawia ich kolejność. **Metadata filters** ograniczają zakres np. do języka, statusu zatwierdzenia czy uprawnień.

## Trzy pułapki w produkcji
1. **Zły chunking:** treść o wyjątkach zostaje odcięta od wymagania; odpowiedź będzie niepełna.
2. **Brak ACL:** wyszukiwarka zwraca świetny fragment, ale użytkownik nie ma do niego prawa. Uprawnienia trzeba wymusić w retrieval/back-endzie, nie jedynie w promptcie.
3. **Embedding mismatch:** indeks i pytanie zostały przygotowane niekompatybilnymi modelami, wymiarami lub preprocessingiem.

**Związek z enterprise environment:** ogłoszenie wymaga „real depth on vector embeddings, search theory, and vector database selection and architecture”. Umiej wyjaśnić **jakość wyszukania osobno od jakości generowania**.
