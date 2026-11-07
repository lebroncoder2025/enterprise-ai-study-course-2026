# Gradient descent i backpropagation bez tajemnic


> **W jednym zdaniu:** Trening gradientowy nie zmienia kodu źródłowego. Aktualizuje liczby w tensorach parametrów, aby zmniejszać funkcję błędu.

## Przelicz ręcznie jeden krok

Załóżmy **mini-model**: `ŷ = w*x`, przyjmujemy `x=2`, prawdziwa odpowiedź `y=6`, a waga początkowa `w=1`.

1. Model liczy `ŷ = 1 × 2 = 2`.
2. **Loss**: `L = (ŷ − y)² = (2−6)² = 16`.
3. Pochodna po wadze (reguła łańcuchowa): `dL/dw = 2*(w*x−y)*x = 2*(2−6)*2 = −16`.
4. Dla learning rate `η = 0.1`: `w_new = w − η * gradient = 1 − 0.1*(−16) = 2.6`.
5. Nowa prognoza: `ŷ=5.2`, nowy loss `0.64`. Zmniejszył się z 16 do 0.64.

To jest **gradient descent**. Gdyby współczynnik uczenia był zbyt duży, model mógłby „przestrzeliwać” minimum i oscylować. Zbyt mały: uczenie trwałoby bardzo długo.

## Backpropagation a optimizer — to nie to samo

- **Forward pass:** podajemy dane i liczymy przewidywanie.
- **Loss function:** oceniamy błąd.
- **Backward / autograd:** liczymy gradienty (`loss.backward()` w PyTorch) przez regułę łańcuchową.
- **Optimizer:** np. SGD lub AdamW, wykonuje `optimizer.step()`, czyli faktycznie aktualizuje parametry.
- **Zero grad:** czyścimy akumulowane gradienty, jeżeli nie planujemy gradient accumulation.

**Batch** to zestaw przykładów w jednym kroku. **Epoch** to przejście przez cały treningowy dataset. **Gradient accumulation** sumuje gradienty z kilku małych batchy, zanim wykona pojedynczą aktualizację — pomaga przy małej pamięci, ale nie usuwa kosztów obliczeń.

## LLM działa tak samo w zasadzie, ale inaczej w skali

Zamiast `w=1` masz miliony lub miliardy parametrów w macierzach transformera. Zamiast prognozować liczbę `6`, model wyznacza rozkład prawdopodobieństwa następnego tokenu. **Cross-entropy loss** karze model za przypisywanie niskiej szansy prawidłowemu tokenowi. Autograd oblicza pochodne dla wszystkich trenowanych parametrów.

## CPU kontra GPU

CPU może wykonać dokładnie te operacje. GPU ma tysiące jednostek wykonujących mnożenia macierzy równolegle, dlatego znacząco przyspiesza duży trening. „Gradientowy” nie oznacza „tylko GPU”.

**Ćwiczenie:** zmień w laboratorium learning rate z `0.1` na `0.6` i zobacz, dlaczego przy tej funkcji trening zaczyna oscylować lub się rozbiegać.

Źródło: [PyTorch Autograd](https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html), [PyTorch Optimization](https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html).
