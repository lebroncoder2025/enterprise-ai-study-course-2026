/* Kuratorowane materiały wideo. Oryginalne utwory pozostają na stronach wydawców; aplikacja używa oficjalnego odtwarzacza. */
window.VIDEO_COURSE={
  "videos": [
    {
      "id": "nn",
      "yt": "aircAruvnKk",
      "title": "But what is a neural network?",
      "channel": "3Blue1Brown",
      "mins": 19,
      "lesson": "ml",
      "start": 160,
      "level": "podstawowy",
      "focus": "Co fizycznie jest obliczane przez neuron? Jak liczby wejściowe wpływają na kolejną warstwę?",
      "watch": "03:35 warstwy i 11:34 wagi — narysuj schemat x → W → wynik.",
      "task": "Zapisz, co zmienia się podczas treningu, a co pozostaje kodem.",
      "quiz": {
        "q": "Co w sieci jest bezpośrednio aktualizowane w typowym treningu gradientowym?",
        "choices": [
          "Tekst Pythona",
          "Wartości parametrów (wagi i biasy)",
          "Zbiór tokenów we wszystkich modelach"
        ],
        "ok": 1,
        "why": "Optymalizator modyfikuje tensory parametrów, a nie linijki źródłowego kodu."
      },
      "lab": "gradient",
      "url": "https://www.youtube.com/watch?v=aircAruvnKk"
    },
    {
      "id": "gd",
      "yt": "IHZwWFHWa-w",
      "title": "Gradient descent, how neural networks learn",
      "channel": "3Blue1Brown",
      "mins": 21,
      "lesson": "ml",
      "start": 400,
      "level": "podstawowy",
      "focus": "Dlaczego funkcja straty maleje, gdy aktualizujemy wagi w przeciwną stronę do gradientu?",
      "watch": "06:55 widok spadku gradientowego; 12:19 podsumowanie.",
      "task": "W laboratorium zmień learning rate i obserwuj, kiedy trening się rozbiega.",
      "quiz": {
        "q": "Jaki jest cel gradient descent?",
        "choices": [
          "Największy możliwy loss",
          "Zmniejszanie loss przez aktualizację parametrów",
          "Zmiana danych testowych"
        ],
        "ok": 1,
        "why": "Krok ma zwykle postać w := w − learning_rate × gradient."
      },
      "lab": "gradient",
      "url": "https://www.youtube.com/watch?v=IHZwWFHWa-w"
    },
    {
      "id": "lin",
      "yt": "7ArmBVF2dCs",
      "title": "Linear Regression, Clearly Explained!!!",
      "channel": "StatQuest",
      "mins": 27,
      "lesson": "ml",
      "start": 35,
      "level": "podstawowy",
      "focus": "Jak model uczy się współczynników i jak interpretować przewidywania liczbowe?",
      "watch": "01:12 dopasowanie prostej; 04:00 R-kwadrat.",
      "task": "Podaj przykładowe 3 cechy do przewidywania czasu obsługi zgłoszenia.",
      "quiz": {
        "q": "Regresja liniowa przewiduje najczęściej:",
        "choices": [
          "Wartość liczbową",
          "Fragment kodu SQL",
          "Kolejny token językowy"
        ],
        "ok": 0,
        "why": "Model liniowy szacuje liczbę z ważonej sumy cech."
      },
      "lab": "gradient",
      "url": "https://www.youtube.com/watch?v=7ArmBVF2dCs"
    },
    {
      "id": "logreg",
      "yt": "yIYKR4sgzI8",
      "title": "StatQuest: Logistic Regression",
      "channel": "StatQuest",
      "mins": 9,
      "lesson": "metrics",
      "start": 185,
      "level": "podstawowy",
      "focus": "Dlaczego regresja logistyczna przewiduje prawdopodobieństwo klasy, a nie liczbę dni?",
      "watch": "03:09 regresja logistyczna; 06:22 zestawienie z liniową.",
      "task": "Wymyśl klasyfikator „przekroczy SLA: tak / nie”.",
      "quiz": {
        "q": "Regresja logistyczna typowo służy do:",
        "choices": [
          "Klasyfikacji",
          "Tylko generowania tekstu",
          "Indeksowania wektorów"
        ],
        "ok": 0,
        "why": "Funkcja logistyczna przekształca wynik liniowy w wartość 0–1."
      },
      "lab": "confusion",
      "url": "https://www.youtube.com/watch?v=yIYKR4sgzI8"
    },
    {
      "id": "tree",
      "yt": "_L39rN6gz7Y",
      "title": "Decision and Classification Trees, Clearly Explained!!!",
      "channel": "StatQuest",
      "mins": 17,
      "lesson": "ml",
      "start": 185,
      "level": "podstawowy",
      "focus": "Jak powstają podziały w drzewie i co jest faktycznie wyuczone?",
      "watch": "03:16 Gini, 09:15 wartości numeryczne, 15:38 overfitting.",
      "task": "Zbuduj ręcznie 2 pytania do klasyfikacji zgłoszeń.",
      "quiz": {
        "q": "Czego uczy się drzewo decyzyjne?",
        "choices": [
          "Kolejności tokenów",
          "Cech i progów kolejnych podziałów",
          "Wyłącznie tensorów attention"
        ],
        "ok": 1,
        "why": "Algorytm wybiera zmienne i progi, które poprawiają jakość podziału."
      },
      "lab": "decision",
      "url": "https://www.youtube.com/watch?v=_L39rN6gz7Y"
    },
    {
      "id": "forest",
      "yt": "J4Wdy0Wc_xQ",
      "title": "Random Forests Part 1 — Building, Using and Evaluating",
      "channel": "StatQuest",
      "mins": 10,
      "lesson": "ml",
      "start": 75,
      "level": "rozszerzenie",
      "focus": "Dlaczego wiele różnych drzew bywa stabilniejszych od pojedynczego drzewa?",
      "watch": "01:17 bootstrapping i 04:40 głosowanie.",
      "task": "Wyjaśnij na głos, co znaczy bagging.",
      "quiz": {
        "q": "Random Forest to:",
        "choices": [
          "Zbiór drzew wytrenowanych na zróżnicowanych próbkach",
          "Jeden wielki transformer",
          "Wyszukiwarka PDF"
        ],
        "ok": 0,
        "why": "Las agreguje przewidywania drzew, ograniczając wariancję."
      },
      "lab": "decision",
      "url": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ"
    },
    {
      "id": "xgb",
      "yt": "OtD8wVaFm6E",
      "title": "XGBoost Part 1: Regression",
      "channel": "StatQuest",
      "mins": 25,
      "lesson": "ml",
      "start": 150,
      "level": "zaawansowany",
      "focus": "Czym boosting różni się od bagging i skąd biorą się kolejne drzewa?",
      "watch": "02:35 punkt początkowy, 13:02 przycinanie, 21:39 predykcja.",
      "task": "Porównaj dwa zastosowania: XGBoost do tabeli i RAG do aktualnej SOP.",
      "quiz": {
        "q": "Boosting zwykle buduje kolejne modele:",
        "choices": [
          "Niezależnie i jednocześnie",
          "Tak, aby poprawiać dotychczasowe błędy",
          "Jako kopie słownika tokenów"
        ],
        "ok": 1,
        "why": "Kolejne etapy poprawiają niedopasowanie poprzednich."
      },
      "lab": "decision",
      "url": "https://www.youtube.com/watch?v=OtD8wVaFm6E"
    },
    {
      "id": "bias",
      "yt": "EuBBz3bI-aA",
      "title": "Bias and Variance — Machine Learning Fundamentals",
      "channel": "StatQuest",
      "mins": 7,
      "lesson": "metrics",
      "start": 95,
      "level": "podstawowy",
      "focus": "Jak rozpoznać overfitting oraz dlaczego wynik na train nie wystarczy?",
      "watch": "01:23 podział danych; 05:10 overfitting.",
      "task": "Podaj przykład leakage w przewidywaniu czasu zamknięcia incydentu.",
      "quiz": {
        "q": "Overfitting oznacza, że model:",
        "choices": [
          "Zwykle dobrze generalizuje",
          "Działa dobrze na treningu, gorzej na nowych przykładach",
          "Nie może być zapisany do pliku"
        ],
        "ok": 1,
        "why": "Model dopasował się zbyt mocno do treningu i słabo generalizuje."
      },
      "lab": "confusion",
      "url": "https://www.youtube.com/watch?v=EuBBz3bI-aA"
    },
    {
      "id": "pca",
      "yt": "FgakZw6K1QQ",
      "title": "PCA, Step-by-Step",
      "channel": "StatQuest",
      "mins": 21,
      "lesson": "metrics",
      "start": 203,
      "level": "rozszerzenie",
      "focus": "Jak zamienić wiele cech na mniejszą liczbę kierunków i co tracimy?",
      "watch": "03:23 motywacja 2D, 13:00 drugi komponent.",
      "task": "Wskaż, czemu PCA nie zastępuje supervised classification.",
      "quiz": {
        "q": "PCA służy głównie do:",
        "choices": [
          "Redukcji wymiarowości",
          "Zapisu promptów",
          "Autoryzacji Entra ID"
        ],
        "ok": 0,
        "why": "PCA szuka kierunków największej wariancji bez etykiet klas."
      },
      "lab": "confusion",
      "url": "https://www.youtube.com/watch?v=FgakZw6K1QQ"
    },
    {
      "id": "transformer",
      "yt": "wjZofJX0v4M",
      "title": "Transformers, the tech behind LLMs",
      "channel": "3Blue1Brown",
      "mins": 27,
      "lesson": "llm",
      "start": 0,
      "level": "podstawowy",
      "focus": "Cała droga: tokenizer → embeddings → warstwy → logits → softmax → następny token.",
      "watch": "12:27 embeddings; 20:22 unembedding; 22:22 softmax i temperatura.",
      "task": "Po obejrzeniu wytłumacz: skąd pojawia się sam TEKST „Warszawa” i skąd wiedza, by go wybrać.",
      "quiz": {
        "q": "Co mapuje ID wybranego tokenu z powrotem na tekst?",
        "choices": [
          "Tokenizer / dekoder",
          "Azure AI Search",
          "Jedna waga przypisana do Polski"
        ],
        "ok": 0,
        "why": "Słownik tokenów i dekodowanie nadają formę tekstową; wagi określają preferencję wyboru."
      },
      "lab": "tokens",
      "url": "https://www.youtube.com/watch?v=wjZofJX0v4M"
    },
    {
      "id": "attention",
      "yt": "eMlx5fFNoYc",
      "title": "Attention in transformers, step-by-step",
      "channel": "3Blue1Brown",
      "mins": 26,
      "lesson": "llm",
      "start": 89,
      "level": "rozszerzenie",
      "focus": "Jak Q, K, V oraz softmax pozwalają uwzględnić relacje między tokenami?",
      "watch": "04:29 attention pattern; 11:08 maskowanie; 19:19 wiele głów.",
      "task": "Odpowiedz: dlaczego attention NIE jest tym samym co cosine search dokumentów?",
      "quiz": {
        "q": "Self-attention działa przede wszystkim:",
        "choices": [
          "Między reprezentacjami tokenów w modelu",
          "Jako SQL query",
          "Tylko przy dostępie do internetu"
        ],
        "ok": 0,
        "why": "Attention przekształca reprezentacje na podstawie innych tokenów; retrieval wyszukuje dokumenty."
      },
      "lab": "tokens",
      "url": "https://www.youtube.com/watch?v=eMlx5fFNoYc"
    },
    {
      "id": "facts",
      "yt": "9-Jl0dxWQs8",
      "title": "How might LLMs store facts?",
      "channel": "3Blue1Brown",
      "mins": 23,
      "lesson": "llm",
      "start": 0,
      "level": "rozszerzenie",
      "focus": "Gdzie wiedza może być zakodowana w parametrach i dlaczego nie ma jednego the learnerordu „Warszawa”?",
      "watch": "06:07 MLP; 17:04 superposition; pamiętaj, że ilustracja jest modelem uproszczonym.",
      "task": "Wyjaśnij zdanie „wiedza jest rozproszona w wagach”.",
      "quiz": {
        "q": "Gdzie znajduje się wiedza o stolicy w modelu offline?",
        "choices": [
          "W jednym wpisie SQL",
          "W wyuczonych strukturach parametrów i ich współdziałaniu",
          "Tylko w internecie"
        ],
        "ok": 1,
        "why": "Rozproszone reprezentacje mogą kodować skojarzenia; nie muszą istnieć the learnerordy faktów."
      },
      "lab": "tokens",
      "url": "https://www.youtube.com/watch?v=9-Jl0dxWQs8"
    },
    {
      "id": "deep",
      "yt": "7xTGNNLPyMI",
      "title": "Deep Dive into LLMs like ChatGPT",
      "channel": "Andrej Karpathy",
      "mins": 211,
      "lesson": "llm",
      "start": 467,
      "level": "zaawansowany",
      "focus": "Z czego biorą się zbiory treningowe, co to tokenizacja, pretraining i inference?",
      "watch": "07:47 tokenizer; 20:11 wnętrze sieci; 26:01 inference; 1:20:32 halucynacje.",
      "task": "Stwórz własny schemat: pliki modelu, architektura, tokenizer, weights, źródło RAG.",
      "quiz": {
        "q": "Czy uruchomienie lokalnej Llamy przez Ollama ponownie trenuje wszystkie wagi?",
        "choices": [
          "Tak, przy każdym uruchomieniu",
          "Nie, wykorzystuje zapisane parametry",
          "Tylko gdy używamy Azure"
        ],
        "ok": 1,
        "why": "Ollama służy głównie do inferencji na gotowych wagach, nie do każdorazowego trenowania."
      },
      "lab": "tokens",
      "url": "https://www.youtube.com/watch?v=7xTGNNLPyMI"
    },
    {
      "id": "tokenizer",
      "yt": "zduSFxRajkE",
      "title": "Let’s build the GPT Tokenizer",
      "channel": "Andrej Karpathy",
      "mins": 134,
      "lesson": "llm",
      "start": 1430,
      "level": "zaawansowany",
      "focus": "Co znaczy słownik tokenów i jak encoder/decoder działa naprawdę?",
      "watch": "23:50 Byte Pair Encoding; 39:20 tokenizer jako osobny etap; 42:47 dekodowanie.",
      "task": "Wyjaśnij, dlaczego jedno słowo może mieć kilka tokenów i czemu ID nie jest wektorem semantycznym.",
      "quiz": {
        "q": "Token ID to:",
        "choices": [
          "Indeks jednostki w słowniku tokenizera",
          "Odpowiedź po softmax",
          "Cosine similarity"
        ],
        "ok": 0,
        "why": "ID jest symbolem indeksującym reprezentację; samo ID nie niesie znaczenia geometrycznego."
      },
      "lab": "tokens",
      "url": "https://www.youtube.com/watch?v=zduSFxRajkE"
    },
    {
      "id": "buildgpt",
      "yt": "kCc8FmEb1nY",
      "title": "Let’s build GPT: from scratch",
      "channel": "Andrej Karpathy",
      "mins": 116,
      "lesson": "llm",
      "start": 568,
      "level": "zaawansowany",
      "focus": "Jak naprawdę pisze się mini-transformer w PyTorch — nie tylko definicje.",
      "watch": "09:28 tokenizacja; 22:11 bigram baseline; 47:11 mnożenie macierzy; 1:02:00 attention.",
      "task": "Porównaj, co się dzieje w skrypcie train.py, a co w inference.py.",
      "quiz": {
        "q": "Które elementy modelu zmienia trening przez optimizer.step()?",
        "choices": [
          "Tensorowe parametry",
          "Kod źródłowy warstw",
          "Historia YouTube"
        ],
        "ok": 0,
        "why": "Optymalizator modyfikuje parametry wytrenowanej sieci."
      },
      "lab": "gradient",
      "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY"
    },
    {
      "id": "ragbasic",
      "yt": "T-D1OfcDW1M",
      "title": "What is Retrieval-Augmented Generation (RAG)?",
      "channel": "IBM Technology",
      "mins": 9,
      "lesson": "rag",
      "start": 0,
      "level": "podstawowy",
      "focus": "Kiedy wiedza jest w wagach, a kiedy pochodzi z bieżących zewnętrznych źródeł?",
      "watch": "Obejrzyj całość i znajdź retrieval oraz generation.",
      "task": "Podaj trzy powody, dla których RAG może nie znaleźć odpowiedniej SOP.",
      "quiz": {
        "q": "RAG zwykle:",
        "choices": [
          "Zmienia wagi LLM po każdym pytaniu",
          "Dostarcza pobrany kontekst przed generacją",
          "Wymaga obowiązkowo Fine-tuningu"
        ],
        "ok": 1,
        "why": "Źródła dostarczane są do promptu, bez zmiany wag modelu."
      },
      "lab": "retrieval",
      "url": "https://www.youtube.com/watch?v=T-D1OfcDW1M"
    },
    {
      "id": "ragdetail",
      "yt": "qppV3n3YlF8",
      "title": "RAG Explained",
      "channel": "IBM Technology",
      "mins": 10,
      "lesson": "search",
      "start": 0,
      "level": "rozszerzenie",
      "focus": "Jak współpracują dokumenty, indeks, embedding model, wyszukiwarka i LLM?",
      "watch": "Zwróć uwagę, że wektorowa baza jest opcją, nie definicją RAG.",
      "task": "Narysuj osobno indeksowanie dokumentów i obsługę pojedynczego pytania.",
      "quiz": {
        "q": "RAG wymaga bez wyjątku:",
        "choices": [
          "Bazy wektorowej",
          "Zewnętrznego źródła informacji dostępnego podczas generowania",
          "Trenowania GPT od zera"
        ],
        "ok": 1,
        "why": "Retrieval może działać przez BM25, wektory, SQL lub API, niekoniecznie bazę wektorową."
      },
      "lab": "retrieval",
      "url": "https://www.youtube.com/watch?v=qppV3n3YlF8"
    },
    {
      "id": "hybrid",
      "yt": "Xwx1DJ0OqCk",
      "title": "Hybrid retrieval for high-quality generative search",
      "channel": "Microsoft / Azure AI Search",
      "mins": 12,
      "lesson": "search",
      "start": 0,
      "level": "podstawowy",
      "focus": "Jak wyszukiwanie słów i wektorów łączy RRF?",
      "watch": "Szukaj momentu porównania vector similarity z BM25 i złączenia rankingów.",
      "task": "W laboratorium wpisz SOP-101, potem zapytanie semantyczne i porównaj listy.",
      "quiz": {
        "q": "Co robi Azure AI Search w typowym RAG?",
        "choices": [
          "Generuje tekst za LLM",
          "Indeksuje i wyszukuje odpowiednie fragmenty",
          "Trenuje wszystkie wagi GPT"
        ],
        "ok": 1,
        "why": "Azure AI Search jest komponentem retrieval, nie modelem generującym."
      },
      "lab": "retrieval",
      "url": "https://learn.microsoft.com/pl-pl/azure/search/hybrid-search-overview"
    },
    {
      "id": "azuredemo",
      "yt": "iS36n9rO6OQ",
      "title": "Demo — Azure Cognitive Search + Azure OpenAI",
      "channel": "Microsoft Azure",
      "mins": 7,
      "lesson": "azure",
      "start": 0,
      "level": "podstawowy",
      "focus": "Zobacz kompletny przepływ backend + wyszukiwanie + model. Film używa dawnej nazwy Azure Cognitive Search.",
      "watch": "Zapisz, które dwa endpointy API obsługuje Twój backend.",
      "task": "Narysuj: przeglądarka → SSO → App Service backend → Search + model.",
      "quiz": {
        "q": "Który komponent hostuje Twój backend Flask?",
        "choices": [
          "Azure AI Search",
          "Azure App Service",
          "Model embeddingowy"
        ],
        "ok": 1,
        "why": "App Service hostuje aplikację. Search to retrieval, model to generacja."
      },
      "lab": "architecture",
      "url": "https://www.youtube.com/watch?v=iS36n9rO6OQ"
    },
    {
      "id": "agents",
      "yt": "F8NKVhkZZWI",
      "title": "What are AI Agents?",
      "channel": "IBM Technology",
      "mins": 11,
      "lesson": "agents",
      "start": 0,
      "level": "podstawowy",
      "focus": "Czym różni się pojedyncze wywołanie LLM od agenta podejmującego akcje?",
      "watch": "Zwróć uwagę na rolę API i tools w systemie złożonym.",
      "task": "Podaj jeden przypadek, w którym workflow z ustalonymi krokami jest bezpieczniejszy niż autonomia.",
      "quiz": {
        "q": "Code Interpreter to:",
        "choices": [
          "Model językowy od zera",
          "Narzędzie uruchamiające kod, jeśli jest dostępne w konfiguracji",
          "Obowiązkowa część każdego LLM"
        ],
        "ok": 1,
        "why": "Code Interpreter jest narzędziem, a nie podstawową częścią wag modelu."
      },
      "lab": "architecture",
      "url": "https://www.youtube.com/watch?v=F8NKVhkZZWI"
    },
    {
      "id": "observability",
      "yt": "JsCCrBF7F1g",
      "title": "LLM Observability, Evaluation, Experimentation Platform",
      "channel": "AI Engineer / Arize",
      "mins": 35,
      "lesson": "ops",
      "start": 0,
      "level": "zaawansowany",
      "focus": "Jak czytać trace, gdzie lokować evale i jak łączyć testy automatyczne z ludzką oceną?",
      "watch": "Rozróżnij span, trajectory, golden dataset, human review i business metrics.",
      "task": "Wymyśl trzy alarmy produkcyjne: latency, błędne źródła i koszt.",
      "quiz": {
        "q": "Do czego służy tracing?",
        "choices": [
          "Do zmiany słownika tokenów",
          "Do prześledzenia wykonanych kroków i opóźnień",
          "Wyłącznie do treningu sieci"
        ],
        "ok": 1,
        "why": "Trace pokazuje interakcje z narzędziami i modele, błędy i koszty."
      },
      "lab": "cost",
      "url": "https://www.youtube.com/watch?v=JsCCrBF7F1g"
    }
  ],
  "resources": [
    {
      "id": "ms-hybrid",
      "lesson": "search",
      "title": "Microsoft Learn — Hybrid Search w Azure AI Search",
      "author": "Microsoft Learn",
      "url": "https://learn.microsoft.com/pl-pl/azure/search/hybrid-search-overview",
      "task": "Po lekturze wskaż BM25, vectorQueries, RRF i semantic ranker."
    },
    {
      "id": "ms-code",
      "lesson": "agents",
      "title": "Microsoft Learn — Code Interpreter dla agentów Foundry",
      "author": "Microsoft Learn",
      "url": "https://learn.microsoft.com/pl-pl/azure/foundry/agents/how-to/tools/code-interpreter",
      "task": "Znajdź przykład użycia CodeInterpreterTool i warunki model/region."
    },
    {
      "id": "ms-eval",
      "lesson": "eval",
      "title": "Microsoft Learn — Ewaluatory RAG",
      "author": "Microsoft Learn",
      "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators?view=foundry",
      "task": "Oddziel retrieval, groundedness i relevance."
    },
    {
      "id": "ms-agent",
      "lesson": "azure",
      "title": "Microsoft Learn — Build Smarter Agents with Azure AI Search",
      "author": "Microsoft Learn · odcinek wideo",
      "url": "https://learn.microsoft.com/en-us/shows/azure-essentials-show/build-smarter-agents-with-azure-ai-search",
      "task": "Wypisz warstwy retrieval, permissions i backend."
    },
    {
      "id": "3bb-facts",
      "lesson": "llm",
      "title": "3Blue1Brown — rozszerzony artykuł o faktach i wagach",
      "author": "3Blue1Brown",
      "url": "https://www.3blue1brown.com/lessons/mlp/",
      "task": "Odróżnij rzeczywiste ustalenia badań od uproszczonej ilustracji MLP."
    },
    {
      "id": "karpathy-code",
      "lesson": "llm",
      "title": "Karpathy — kod do budowania GPT",
      "author": "Andrej Karpathy",
      "url": "https://github.com/karpathy/ng-video-lecture",
      "task": "Odnajdź model.encode/decode, logits oraz loss."
    },
    {
      "id": "arize-eval",
      "lesson": "eval",
      "title": "Arize — ocena retrieval i generation osobno",
      "author": "Arize Phoenix",
      "url": "https://github.com/Arize-ai/phoenix/blob/main/.agents/skills/phoenix-evals/references/evaluators-rag.md",
      "task": "Wyjaśnij retrieval recall@k i groundedness na tym samym przykładzie."
    },
    {
      "id": "dlai-rag",
      "lesson": "rag",
      "title": "DeepLearning.AI — Building and Evaluating Advanced RAG",
      "author": "DeepLearning.AI",
      "url": "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/",
      "task": "Poznaj context relevance, groundedness i answer relevance."
    },
    {
      "id": "statquest-index",
      "lesson": "metrics",
      "title": "StatQuest — spis lekcji ML i statystyki",
      "author": "StatQuest",
      "url": "https://statquest.org/video_index",
      "task": "Wybierz jedną niejasną metrykę i obejrzyj dodatkowe wyjaśnienie."
    },
    {
      "id": "foundry-samples",
      "lesson": "azure",
      "title": "Microsoft — demonstracje Foundry Agents z kodem Python",
      "author": "Microsoft Foundry",
      "url": "https://github.com/microsoft-foundry/build-2026-demos/blob/main/building-agents-with-foundry-agent-service/code/README.md",
      "task": "Sprawdź przykład 04 CodeInterpreterTool oraz 05 FileSearchTool."
    }
  ],
  "paths": [
    {
      "id": "essentials",
      "title": "Najpierw zrozum — fundamenty",
      "why": "Sekwencja dla kogoś, kto chce naprawdę zrozumieć, skąd model bierze słowa i wiedzę.",
      "items": [
        "nn",
        "gd",
        "transformer",
        "facts",
        "ragbasic",
        "hybrid",
        "azuredemo",
        "agents"
      ]
    },
    {
      "id": "deep",
      "title": "Technicznie od środka",
      "why": "Głębsze rozumienie implementacji: tokenizery, transformery, ML, trening i ewaluacja.",
      "items": [
        "lin",
        "logreg",
        "tree",
        "forest",
        "bias",
        "tokenizer",
        "attention",
        "buildgpt",
        "observability"
      ]
    },
    {
      "id": "interview",
      "title": "Architektura AI w pharmaceutical organization",
      "why": "Skupia się na RAG, Azure Search, agentach, jakości i wyborze technologii.",
      "items": [
        "transformer",
        "ragbasic",
        "ragdetail",
        "hybrid",
        "azuredemo",
        "agents",
        "observability"
      ]
    }
  ]
};
