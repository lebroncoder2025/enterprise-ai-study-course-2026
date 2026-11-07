# Statystyka i metryki ML: precision, recall, F1, MAE

> **Accuracy nie zawsze jest dobrą metryką.** Gdy 99% zdarzeń jest normalnych, model mówiący zawsze „normalne” ma 99% accuracy i nie wykrywa żadnego incydentu.

## Confusion matrix
Dla klasy „wymaga pilnej weryfikacji”: **TP** — wykryto rzeczywiście pilne; **FP** — fałszywy alarm; **FN** — przeoczono pilne; **TN** — prawidłowo oceniono niepilne.

**Precision = TP/(TP+FP)** — spośród alarmów ile było trafnych? **Recall = TP/(TP+FN)** — jaką część prawdziwych zdarzeń wykryto? **F1** to średnia harmoniczna precision i recall. Jeśli pominięcie incydentu jest kosztowne, recall może być szczególnie ważny, ale wzrost recall bywa okupiony większą liczbą FP. **PR-AUC** bywa użyteczna przy rzadkiej klasie dodatniej.

## Regresja
**MAE** — średnia bezwzględna różnica między predykcją i prawdą. **RMSE** — pierwiastek średniej kwadratów błędów; mocniej karze duże odchylenia. Wybór zależy od kosztu dużych pomyłek. **R²** opisuje część zmienności wyjaśnianej przez model w określonym kontekście, ale nie stanowi uniwersalnej gwarancji jakości.

## Walidacja statystyczna
**Baseline:** prosta metoda odniesienia (np. zawsze przewiduj medianę). **Hold-out test:** dane odseparowane od procesu dostrajania. **Cross-validation:** ocena na kolejnych podziałach; w prognozowaniu czasowym unikaj przypadkowego mieszania przyszłości i przeszłości. **Confidence interval:** przedział niepewności estymowanej metryki przy określonych założeniach. **Calibration:** gdy model mówi 80%, czy podobne przypadki rzeczywiście zdarzają się około 80% czasu?

## Porównywanie modeli
Porównuj **na tym samym zestawie**, z tymi samymi zasadami liczenia, a nie na dwóch przypadkowych próbkach. Patrz na wyniki według podgrup, drift, koszty i opóźnienia. Nie optymalizuj tylko jednego KPI.

**Związek z enterprise environment:** „solid core in statistics, model evaluation” oraz „statistically evaluate outputs for safety, reliability, consistency”. To fundament także dla agentów.
