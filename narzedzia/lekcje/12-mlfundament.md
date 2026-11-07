# Model ML: od cech do funkcji i predykcji


> **W jednym zdaniu:** Model ML to zapisany wynik uczenia — zestaw parametrów i reguł obliczeń, które zamieniają dane wejściowe na przewidywanie. Nie każda metoda ML używa neuronów.

## Trzy konkretne modele — co znajduje się w pliku?

| Model | Co naprawdę zapisujemy | Co robi na nowych danych | Typowy plik |
|---|---|---|---|
| Regresja liniowa | liczby: współczynniki i wyraz wolny | liczy `y = w1*x1 + w2*x2 + b` | `joblib`, `pickle`, ONNX |
| Drzewo decyzyjne | węzły, progi, kierunki rozgałęzień, wartości liści | wybiera ścieżkę warunków | `joblib`, ONNX |
| Sieć neuronowa | architekturę + macierze liczb | mnoży tensory i stosuje aktywacje | `.pt`, `.safetensors`, `.onnx`, `.gguf` |

**Co znaczy „uczyć model”?** Dla regresji algorytm dopasowuje współczynniki; dla drzewa dobiera podziały; dla sieci aktualizuje wagi. Model jest więc innym typem zapisanego obiektu zależnie od algorytmu. Program Python wykonuje obliczenia, a wartości parametrów są przechowywane osobno.

## Jeden przykład biznesowy, trzy opcje

Chcemy przewidzieć, czy zgłoszenie jakościowe zostanie zamknięte w ciągu 7 dni. Mamy dane z SQL: typ zgłoszenia, priorytet, wiek urządzenia, czas w kolejce. **Target** to `closed_in_7_days` (0/1). Przy danych tabelarycznych sensownym **baseline** jest regresja logistyczna; następnie można porównać Random Forest i boosting (XGBoost/LightGBM). LLM nie jest domyślnym wyborem tylko dlatego, że problem dotyczy dokumentów.

## Cztery różne „zbiory” i jeden krytyczny błąd

1. **Training:** uczymy zależności.
2. **Validation:** wybieramy model i hiperparametry.
3. **Test:** końcowe oszacowanie, którego nie używamy do wyboru wariantu.
4. **Production:** rzeczywiste nowe rekordy; monitorujemy drift.

Jeśli na wejściu pojawia się informacja znana dopiero po zamknięciu zgłoszenia, występuje **data leakage**. Wyniki będą sztucznie dobre. Przy danych czasowych stosujemy często podział chronologiczny, nie losowy.

## Zapamiętaj dla lidera

Nie chodzi o to, który model ma największą nazwę. Najpierw problem, rodzaj danych, wymagania jakościowe i koszt błędu. Dopiero potem dobór algorytmu, baseline, walidacja i wdrożenie.

**Sprawdź:** Czy XGBoost potrzebuje słownika tokenów? Nie. Czy ma zapisany model? Tak: zespoły drzew i ich parametry. Czy LLM jest ML? Tak — duża sieć neuronowa, która została wcześniej wytrenowana.
