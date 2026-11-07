# Rodzaje Machine Learning: od tabeli do modelu

> **Ważne:** „Uczenie nadzorowane” nie jest nazwą modelu. To **sposób organizacji treningu**. W ramach niego możesz użyć regresji logistycznej, lasu losowego, XGBoost lub sieci neuronowej.

## Uczenie nadzorowane: znamy wynik
Zbiór danych ma postać `X` (cechy) i `y` (prawidłowa etykieta lub wartość). Model uczy się funkcji `f(X) ≈ y`. W **klasyfikacji** przewidujesz klasę (np. terminowo/nieterminowo); w **regresji** liczbę (np. czas obsługi). Modele: **logistic regression**, **linear regression**, **decision tree**, **random forest**, **gradient boosting/XGBoost**, **SVM**, sieci neuronowe. Nazwa regresja logistyczna jest myląca: zwykle służy do klasyfikacji.

## Uczenie nienadzorowane: nie znamy etykiety
Dajesz modelowi cechy, ale nie gotowe prawidłowe kategorie. **K-means** grupuje podobne rekordy; **DBSCAN** wykrywa gęste skupiska i odstające punkty; **PCA** zmniejsza liczbę wymiarów. **Anomaly detection** szuka nietypowych przypadków (metoda może być nadzorowana lub nienadzorowana). Nie myl „grupy A z K-means” z rzeczywistą kategorią biznesową: grupa wymaga interpretacji.

## Self-supervised learning — skąd uczy się LLM?
W treningu samonadzorowanym sygnał uczący tworzymy z danych samych w sobie. Dla autoregresyjnego LLM wejściem jest fragment tekstu, a zadaniem przewidzenie następnego tokenu. „Stolicą Polski jest” → w tekście źródłowym następny fragment odpowiada „Warszawa”. System liczy stratę i aktualizuje wagi. **Nie potrzebujemy człowieka, który ręcznie etykietuje każde zdanie.** Po pretrainigu często następują instruction tuning i trening preferencji.

## Reinforcement learning — uczenie przez nagrodę
Agent podejmuje działania w środowisku i otrzymuje sygnał nagrody. Uczy się polityki (policy), która ma maksymalizować oczekiwaną nagrodę. Rozróżnij to od **agentic workflow**: agent wywołujący API *nie musi sam przechodzić procesu RL*. Nazwa „agent” w produkcie biznesowym nie gwarantuje uczenia ze wzmocnieniem.

## Jak wygląda plik treningowy i wynik?
Przykładowa tabela: `wiek_urzadzenia, liczba_awarii, typ_urzadzenia, opoznione` z 10 tys. wierszy. Dzielisz je na **train/validation/test**, przygotowujesz cechy, wybierasz model i uruchamiasz `fit()`. Powstają wyuczone współczynniki (regresja), progi podziałów (drzewo) lub wagi macierzy (sieć). **Model zawsze ma reprezentację do zapisania**, ale nie musi nią być duża sieć neuronowa.

## Typowe ryzyka
Przeciek danych (*data leakage*) — np. cecha „data zamknięcia” w zadaniu przewidywania czasu zamknięcia. Overfitting — model pamięta train i słabo generalizuje. Bias — błędy różnią się między grupami. Unikaj trenowania na rekordach, których przyszły wynik w momencie predykcji nie byłby znany.

**Związek z enterprise environment:** solidny baseline, held-out testing, error analysis i standard algorithms są wprost wymienione w ofercie.
