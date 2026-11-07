# MLOps od zera do produkcji: pipeline, registry, deploy


> **W jednym zdaniu:** MLOps to proces, dzięki któremu model można **odtworzyć, przetestować, bezpiecznie wdrożyć, monitorować i wycofać** bez polegania na ręcznych czynnościach jednej osoby.

## Mapa cyklu życia

`Źródła danych → walidacja danych → feature pipeline → trening → tracking eksperymentu → model registry → testy → staging → approval → canary/prod → monitoring → retraining/rollback`

Warto rozdzielić **pipeline treningowy** od **pipeline inferencji**. Trening zwykle jest zadaniem wsadowym, inferencja może działać w czasie rzeczywistym przez API.

## Kluczowe pojęcia

- **Dataset versioning:** identyfikator wersji danych; bez tego nie odtworzysz modelu.
- **Feature store:** współdzielony, kontrolowany system definicji cech; zapobiega rozjazdowi offline/online, ale nie jest wymagany w każdym projekcie.
- **Experiment tracking:** logowanie metryk, hiperparametrów, kodu i artifactów np. MLflow.
- **Model registry:** spis zaakceptowanych wersji modeli z metadanymi i etapem wdrożenia.
- **CI/CD:** testy kodu, pakietu i deploymentu.
- **CT (Continuous Training):** kontrolowane ponowne uczenie gdy dane/dryft lub harmonogram tego wymagają — nie automatyczne wgrywanie nieprzetestowanego modelu.
- **Champion/challenger:** produkcyjny model kontra kandydat oceniany na tych samych danych.
- **Shadow deployment:** nowy model otrzymuje kopię wejść bez wpływania na decyzje użytkownika.
- **Canary:** niewielki procent rzeczywistego ruchu dla nowej wersji, z kryteriami wycofania.

## Trzy typy dryftu

**Data drift:** zmienia się rozkład danych wejściowych. **Concept drift:** zmienia się zależność między X i y. **Label delay:** prawdziwe wyniki pojawiają się z opóźnieniem, co utrudnia ocenę online. Sam spadek PSI nie oznacza jeszcze, że trzeba retrenować.

## Przykład w Azure

Dane z SQL/Blob, przygotowanie w jobie, eksperyment z logowaniem MLflow, zarejestrowany model, pipeline CI/CD, endpoint online albo batch, telemetry Application Insights / Azure Monitor. Dokładne usługi zależą od typu zadania: Azure Machine Learning ma inne powierzchnie niż Foundry dla agentów i LLM.

## Co pokażesz liderowi?

„Before retraining I would first verify data quality, drift metrics, ground-truth delay and business impact; then compare a candidate model against the champion on a frozen test set and only release it with versioning and rollback.”

Źródła: [Azure ML MLOps](https://learn.microsoft.com/en-us/azure/machine-learning/concept-model-management-and-deployment?view=azureml-api-2), [MLflow tracking](https://mlflow.org/docs/latest/ml/tracking/).
