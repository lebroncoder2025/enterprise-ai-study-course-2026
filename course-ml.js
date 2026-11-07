(function courseML(){
"use strict";
function insert(id,html){
 const el=document.getElementById("lesson-"+id)?.querySelector(".sublesson-body");if(!el)return;
 const point=el.querySelector(".english-vocab,.study-video");if(point)point.insertAdjacentHTML("afterend",html);else el.insertAdjacentHTML("afterbegin",html);
}
insert("30-ai-genai",`
<section class="course-master-dive">
<h2>Od zera: pięć pojęć, których nie należy mieszać</h2>
<p><strong>AI — artificial intelligence (sztuczna inteligencja)</strong> to dziedzina: chcemy, by komputer rozwiązywał zadania wymagające interpretacji informacji. Nie oznacza automatycznie sieci neuronowej. Kalkulator reguł, silnik szachowy, klasyfikator i asystent LLM mogą korzystać z bardzo różnych metod.</p>
<p><strong>ML — machine learning (uczenie maszynowe)</strong> to podzbiór AI: zamiast zapisać wszystkie reguły ręcznie, przekazujemy przykłady i algorytm dobiera parametry. Parametr (parameter) to liczba sterująca modelem, np. waga przypisana liczbie minut oczekiwania. Dane treningowe zawierają obserwacje; trening wyszukuje zależności. <strong>Trenowanie modelu nie jest tym samym co pytanie wytrenowanego modelu.</strong></p>
<p><strong>Deep Learning — uczenie głębokie</strong> używa wielowarstwowych sieci neuronowych. Jest jedną z rodzin ML, a nie synonimem AI. <strong>GenAI — generative AI</strong> oznacza system tworzący nowe treści, np. tekst, obrazy lub dźwięk; może wykorzystać głęboką sieć. <strong>LLM — large language model</strong> to model językowy zwykle trenowany przewidywaniem tokenów; nie jest osobną bazą danych ani wyszukiwarką internetową.</p>
<h3>Przykład: jedna firma, pięć technologii</h3>
<ol class="step-order">
<li><strong>Reguły:</strong> Jeśli faktura ma kwotę powyżej 10 000 zł, przekaż ją do dodatkowej akceptacji. Programista zapisał próg.</li>
<li><strong>ML — classification:</strong> Na podstawie 2000 historycznych spraw oznaczonych jako „opóźniona/terminowa” model estymuje prawdopodobieństwo opóźnienia nowej sprawy. Nie generuje dokumentu.</li>
<li><strong>ML — regression:</strong> Model na podstawie liczby zgłoszeń, obciążenia i typu sprawy przewiduje 43 minuty oczekiwania. Wynik jest liczbą.</li>
<li><strong>Unsupervised ML:</strong> Grupowanie (clustering) znajduje podobne zachowania klientów w zbiorze bez gotowych etykiet grup.</li>
<li><strong>GenAI + RAG:</strong> Aplikacja najpierw pobiera właściwą procedurę z kontrolowanego repozytorium, następnie LLM tworzy odpowiedź i cytuje fragment. Dokumenty w RAG nie zmieniają wag modelu.</li>
</ol>
<p class="course-note">W praktyce najpierw nazwij <strong>problem i oczekiwany wynik</strong>, dopiero potem dobierz model. Jeśli potrzeba tylko progu 10 000 zł, koszt i ryzyko agenta LLM nie mają uzasadnienia.</p>
</section>`);
insert("31-rodzaje-ml",`
<section class="course-master-dive">
<h2>Trzy sposoby uczenia + self-supervised: czym się różnią?</h2>
<p>Podział według <strong>sygnału uczącego (learning signal)</strong> mówi, skąd algorytm dowiaduje się, że zmienia parametry w dobrą stronę. Nie mówi jeszcze, czy zastosujesz drzewo, regresję czy sieć.</p>
<h3>1. Uczenie nadzorowane (supervised learning)</h3>
<p>Mamy pary <code>(X, y)</code>. <strong>X — features (cechy)</strong>, np. liczba spraw w kolejce i priorytet. <strong>y — label/target (etykieta lub wartość docelowa)</strong>, np. rzeczywisty czas obsługi w minutach. Algorytm minimalizuje różnicę pomiędzy przewidywaniem a znanym wynikiem. Wymaga wiarygodnych etykiet.</p>
<div class="learning-table-scroll" role="region" tabindex="0" aria-label="Przykładowe rekordy uczenia nadzorowanego"><table><thead><tr><th scope="col">Liczba zgłoszeń, X</th><th scope="col">Czas obsługi, y (min)</th><th scope="col">Co robi model?</th></tr></thead><tbody>
<tr><td>1</td><td>3</td><td>Trenuje na parze (1, 3)</td></tr><tr><td>2</td><td>5</td><td>Trenuje na parze (2, 5)</td></tr><tr><td>3</td><td>7</td><td>Trenuje na parze (3, 7)</td></tr><tr><td>4</td><td>9</td><td>Trenuje na parze (4, 9)</td></tr></tbody></table></div>
<p>Dwa zadania w tej samej rodzinie: <strong>classification</strong> zwraca etykietę lub prawdopodobieństwo, np. „sprawa opóźniona”; <strong>regression</strong> zwraca liczbę, np. „43 minuty”. Nazwa „regresja logistyczna” jest wyjątkiem językowym: często służy do klasyfikacji.</p>
<h3>2. Uczenie nienadzorowane (unsupervised learning)</h3>
<p>Mamy tylko <code>X</code>, bez poprawnego <code>y</code>. <strong>Clustering</strong>, np. k-means, tworzy grupy obiektów podobnych do siebie. <strong>Dimensionality reduction</strong>, np. PCA, kompresuje informację o wielu cechach do mniejszej liczby wymiarów. <strong>Anomaly detection</strong> poszukuje nietypowych obserwacji (w zależności od metody może być nadzorowana albo nienadzorowana). Nie nazywaj grupy 0 „złym klientem” bez walidacji biznesowej: algorytm znajduje strukturę, nie znaczenie biznesowe.</p>
<h3>3. Uczenie przez wzmacnianie (reinforcement learning, RL)</h3>
<p>Agent działa w <strong>środowisku (environment)</strong>. Obserwuje <strong>stan (state, s)</strong>, wybiera <strong>akcję (action, a)</strong>, a następnie dostaje <strong>nagrodę (reward, r)</strong> i nowy stan <code>s'</code>. Uczy się <strong>polityki (policy, π)</strong>: zasad wyboru działań, które maksymalizują oczekiwaną sumę przyszłych nagród. RL nie polega na zwykłym przyporządkowaniu etykiety do wiersza.</p>
<p><strong>Przykład:</strong> symulator kolejki zadań. Stan = długości kolejek i pilność spraw. Akcja = przydziel zespół do kolejki A albo B. Nagroda = minus czas oczekiwania i minus kara za przekroczone SLA. Trzeba uważać, by agent nie „oszukiwał” źle zaprojektowanej funkcji nagrody.</p>
<h3>4. Samonadzorowane (self-supervised learning) — ważne dla LLM</h3>
<p>Sygnał uczący powstaje <strong>automatycznie z samych danych</strong>. Model językowy widzi fragment tekstu i ma przewidzieć brakujący lub następny token. Prawidłowy token pochodzi z korpusu, a nie od człowieka, który ręcznie oznaczył miliony zdań. To częste podejście w pretrainingu LLM, ale nie jest tożsame z klasycznym RL.</p>
<h3>Jak wybierać metodę?</h3>
<div class="learning-table-scroll" tabindex="0" role="region" aria-label="Wybór trybu uczenia"><table><thead><tr><th>Masz...</th><th>Chcesz...</th><th>Zacznij od...</th><th>Ryzyko</th></tr></thead><tbody>
<tr><td>2000 spraw z czasem obsługi</td><td>Przewidzieć minuty</td><td>Supervised regression + baseline</td><td>Data leakage z przyszłości</td></tr>
<tr><td>2000 spraw z etykietą „spóźniona”</td><td>Oszacować ryzyko</td><td>Supervised classification</td><td>Nierównowaga klas</td></tr>
<tr><td>2000 spraw bez etykiet</td><td>Odkryć typowe grupy</td><td>Unsupervised clustering</td><td>Grupy bez sensu biznesowego</td></tr>
<tr><td>Symulator z akcjami i nagrodami</td><td>Wybrać serię działań</td><td>Reinforcement learning</td><td>Źle zdefiniowana nagroda</td></tr>
<tr><td>Ogromny korpus tekstu</td><td>Uczyć reprezentacji języka</td><td>Self-supervised pretraining</td><td>Jakość i licencje danych</td></tr></tbody></table></div>
<p class="course-note"><strong>Kontrola zrozumienia:</strong> Jeśli klienci są podzieleni na „dobrych” i „złych” na podstawie już znanej oceny, jest to supervised classification. Jeśli algorytm sam znajduje segmenty bez etykiet — unsupervised clustering.</p>
</section>
`);
insert("12-mlfundament",`
<section class="course-master-dive">
<h2>Regresja liniowa (linear regression): pełen przykład od zera</h2>
<p>Chcemy przewidzieć czas obsługi <code>y</code> na podstawie liczby spraw <code>x</code>. Zamiast reguły zapisanej przez człowieka model uczy się <strong>dwóch liczb</strong>: nachylenia <code>w</code> i punktu startowego <code>b</code>.</p>
<div class="formula-block">ŷ = w · x + b</div>
<div class="learning-table-scroll" tabindex="0" role="region"><table><thead><tr><th>Symbol / PL</th><th>English</th><th>Znaczenie i jednostka</th><th>Konkretny przykład</th></tr></thead><tbody>
<tr><td>x — cecha</td><td>feature / input</td><td>Liczba zgłoszeń [szt.]</td><td>x = 3</td></tr>
<tr><td>y — rzeczywisty wynik</td><td>target / observed value</td><td>Znany czas z danych [min]</td><td>y = 7 min</td></tr>
<tr><td>ŷ — predykcja</td><td>prediction / y-hat</td><td>Czas przewidywany przez model [min]</td><td>ŷ = 2·3+1 = 7 min</td></tr>
<tr><td>w — waga</td><td>weight / coefficient</td><td>Ile minut zwiększy wynik dodatkowe zgłoszenie [min/szt.]</td><td>w = 2 min/szt.</td></tr>
<tr><td>b — wyraz wolny</td><td>bias / intercept</td><td>Przewidywany czas dla x = 0 [min]</td><td>b = 1 min</td></tr>
<tr><td>e = ŷ − y — błąd</td><td>residual / prediction error</td><td>Różnica predykcji i wyniku [min]</td><td>e = 0 min</td></tr></tbody></table></div>
<h3>Jak model uczy się wag? To nie jest zgadywanie jednym ruchem</h3>
<ol class="step-order"><li>Zbierasz dane wejściowe, np. 1000 historycznych wierszy. Dla każdego masz <code>x</code> i rzeczywisty <code>y</code>.</li>
<li>Dzielisz dane na <em>train/validation/test</em> i pilnujesz, by informacje z przyszłości nie trafiły do treningu.</li>
<li>Na początku wybierasz parametry, np. <code>w = 0</code>, <code>b = 0</code>; model przewiduje wtedy 0 dla każdego rekordu.</li>
<li>Obliczasz predykcje <code>ŷᵢ = w·xᵢ+b</code> i stratę <code>MSE</code> — średnią kwadratów błędów.</li>
<li>Gradient pokazuje, w którą stronę zmienić <code>w</code> i <code>b</code>. Aktualizujesz je, ponawiasz obliczenia i obserwujesz spadek MSE.</li>
<li>Na końcu oceniasz model na zbiorze testowym; mały błąd treningowy sam w sobie nie dowodzi użyteczności.</li></ol>
<div class="formula-block">MSE = (1/n) × Σᵢ₌₁ⁿ (ŷᵢ − yᵢ)²</div>
<p><strong>n</strong> = liczba przykładów, <strong>Σ</strong> = sumowanie, <strong>i</strong> = numer przykładu, <strong>ŷᵢ</strong> = przewidywany czas, <strong>yᵢ</strong> = rzeczywisty czas. Kwadrat zapobiega znoszeniu się dodatnich i ujemnych błędów. <strong>Jednostka MSE to min²</strong>; jeśli chcesz ponownie mieć minuty, użyj RMSE = √MSE.</p>
<p>Nie wyciągaj wniosku „wzrost x o 1 powoduje wzrost czasu o 2 minuty” bez dalszych założeń — sama regresja na danych obserwacyjnych pokazuje korelację modelową, nie dowodzi przyczynowości.</p>
</section>
`);
insert("13-gradient",`
<section class="course-master-dive">
<h2>Gradient descent (spadek gradientowy) — co robi każda litera?</h2>
<p>Model przewiduje czas <code>ŷ = w·x+b</code>. Strata dla jednego wiersza jest <code>L = (ŷ−y)²</code>. Trening ma zmienić <code>w</code> i <code>b</code> tak, aby strata malała. <strong>Gradient</strong> to pochodna straty względem parametrów; pokazuje lokalne tempo i kierunek zmiany błędu.</p>
<div class="formula-block">wₙₒwₑ = wₛₜₐᵣₑ − η · ∂L/∂w</div>
<div class="formula-block">bₙₒwₑ = bₛₜₐᵣₑ − η · ∂L/∂b</div>
<p><strong>η (eta)</strong> = learning rate, czyli rozmiar kroku. <strong>∂L/∂w</strong> = pochodna straty względem wagi, a <strong>∂L/∂b</strong> = pochodna względem wyrazu wolnego. Znak minus oznacza krok w stronę spadku straty, a nie jej wzrostu.</p>
<h3>Rachunek jednego wiersza — x = 2, y = 6</h3>
<div class="worked-step"><strong>1. Stan początkowy:</strong> w=1, b=0. Predykcja ŷ=1·2+0=2. Błąd e=2−6=−4. Strata L=(−4)²=16.</div>
<div class="worked-step"><strong>2. Reguła łańcuchowa (chain rule):</strong> ∂L/∂w=2(ŷ−y)·x=2·(−4)·2=−16; ∂L/∂b=2(ŷ−y)=−8.</div>
<div class="worked-step"><strong>3. Aktualizacja:</strong> przy η=0,1 mamy w'=1−0,1·(−16)=2,6 i b'=0−0,1·(−8)=0,8.</div>
<div class="worked-step"><strong>4. Kontrola:</strong> nowa predykcja to 2,6·2+0,8=6. Błąd=0. <em>Uwaga:</em> trafienie idealnie w jeden przykład nie gwarantuje dobrej generalizacji; trzeba uczyć i testować na wielu obserwacjach.</div>
<p><strong>Backpropagation</strong> (wsteczna propagacja błędu) skutecznie liczy gradienty sieci wielowarstwowej za pomocą reguły łańcuchowej. <strong>Optimizer</strong> (optymalizator, np. SGD lub Adam) używa gradientów, by aktualizować parametry. To dwie różne czynności.</p>
</section>
`);
insert("41-ml-metryki",`
<section class="course-master-dive">
<h2>Metryki (metrics): policz wyniki zamiast zapamiętywać nazwy</h2>
<p><strong>Klasyfikacja (classification)</strong> przewiduje kategorię. Załóżmy 100 spraw, w tym 10 naprawdę pilnych. Model oznaczył 12 spraw jako pilne: 8 rzeczywiście pilnych, 4 niepilne. Pominął 2 pilne sprawy.</p>
<div class="learning-table-scroll" tabindex="0" role="region"><table><thead><tr><th>Wielkość</th><th>English</th><th>Wynik</th><th>Znaczenie</th></tr></thead><tbody>
<tr><td>TP</td><td>True positives</td><td>8</td><td>Poprawnie wykryte pilne</td></tr>
<tr><td>FP</td><td>False positives</td><td>4</td><td>Fałszywe alarmy</td></tr>
<tr><td>FN</td><td>False negatives</td><td>2</td><td>Przeoczone pilne</td></tr>
<tr><td>TN</td><td>True negatives</td><td>86</td><td>Poprawnie rozpoznane niepilne</td></tr></tbody></table></div>
<p><strong>Precision</strong> = TP/(TP+FP) = 8/12 ≈ 66,7% — spośród alarmów ile jest prawdziwych? <strong>Recall</strong> = TP/(TP+FN)=8/10=80% — ile prawdziwie pilnych wykryliśmy? <strong>F1</strong> = 2·Precision·Recall/(Precision+Recall) ≈ 72,7%. <strong>Accuracy</strong>=(TP+TN)/100=94%, ale maskuje skutki błędów przy rzadkich klasach.</p>
<p>W regulowanym procesie przeoczenie pilnego problemu może kosztować więcej niż fałszywy alarm. Dobierz <strong>próg decyzji (decision threshold)</strong> do kosztu FN i FP, a nie tylko do najwyższej accuracy. Sprawdź kalibrację prawdopodobieństw (probability calibration).</p>
<h3>Regresja — policz MAE i RMSE</h3>
<p>Rzeczywiste czasy [5,7,9] min, predykcje [6,5,10] min. Błędy [1,−2,1]. <strong>MAE</strong>=(|1|+|−2|+|1|)/3=1,33 min. <strong>MSE</strong>=(1²+(−2)²+1²)/3=2 min². <strong>RMSE</strong>=√2≈1,41 min. Duży błąd jest silniej karany przez RMSE niż MAE.</p>
<p>Każda metryka wymaga określenia danych testowych, przedziałów ufności w razie porównań oraz sensownego punktu odniesienia (baseline).</p>
</section>
`);
insert("32-llm-od-srodka",`
<section class="course-master-dive">
<h2>Skąd w offline LLM bierze się słowo „Warszawa”?</h2>
<ol class="step-order">
<li><strong>Tokenizer</strong> (tokenizator) ma słownik: mapowanie pomiędzy fragmentami tekstu i liczbami ID. W nim może istnieć token odpowiadający napisowi „Warszawa” albo kilku fragmentom tego napisu. Słownik to tekst i ID, a nie encyklopedia stolic.</li>
<li><strong>Embedding layer</strong> (warstwa osadzeń) zamienia ID tokenu w wektor liczb, np. 4096 współrzędnych. Te liczby są częścią trenowanych wag.</li>
<li><strong>Transformer</strong> przetwarza aktualny kontekst, wykorzystując attention i warstwy obliczeniowe. Wagi wytrenowane na wielu przykładach kształtują wektor ukryty stanu.</li>
<li><strong>Output head</strong> (warstwa wyjściowa) przelicza ten stan na logity — po jednej liczbie dla tokenów z całego słownika. Logit nie jest jeszcze prawdopodobieństwem.</li>
<li><strong>Softmax</strong> zamienia logity na rozkład prawdopodobieństw, np. „Warszawa” 0,82; „Kraków” 0,06; inne 0,12 w czysto ilustracyjnym przykładzie.</li>
<li><strong>Decoding</strong> wybiera token (argmax lub sampling) i <strong>detokenization</strong> zamienia ID z powrotem na widoczny napis.</li>
</ol>
<p class="concept">„Model ma wiedzę w wagach” to skrót: liczby w wagach wpływają na skojarzenia i przewidywania. Tekstowe brzmienie tokenu pochodzi z tokenizatora. Żadne pojedyncze weight nie musi zawierać ciągu znaków „Warszawa”.</p>
<p><strong>Ograniczenie:</strong> tak zapisane skojarzenia mogą być nieaktualne albo błędne. RAG dostarcza nowe, kontrolowane fakty w kontekście bez aktualizowania wag.</p>
</section>
`);
insert("33-transformer",`
<section class="course-master-dive">
<h2>Attention: co znaczą Q, K, V i √dₖ?</h2>
<p>W <strong>self-attention</strong> każdy token może korzystać z reprezentacji innych tokenów w dozwolonym kontekście. Dla macierzy reprezentacji <code>X</code> model wylicza <code>Q = XWq</code>, <code>K = XWk</code>, <code>V = XWv</code>. Macierze <code>Wq, Wk, Wv</code> są wyuczonymi parametrami.</p>
<div class="formula-block">Attention(Q,K,V) = softmax(QKᵀ / √dₖ) · V</div>
<div class="learning-table-scroll" role="region" tabindex="0"><table><thead><tr><th>Symbol</th><th>English</th><th>Rola</th></tr></thead><tbody>
<tr><td>Q</td><td>Query</td><td>Czego szuka dany token w innych pozycjach?</td></tr>
<tr><td>K</td><td>Key</td><td>Jak token jest „opisany” do porównania z zapytaniem?</td></tr>
<tr><td>V</td><td>Value</td><td>Jaką informację można przenieść do reprezentacji wyniku?</td></tr>
<tr><td>Kᵀ</td><td>Transposed keys</td><td>Transpozycja potrzebna do iloczynów skalarnych Q·K.</td></tr>
<tr><td>dₖ</td><td>Key dimension</td><td>Liczba składowych wektora K; pierwiastek stabilizuje skalę wyników dot-product.</td></tr>
<tr><td>softmax</td><td>Normalized weights</td><td>Przekształca wyniki dopasowania na dodatnie wagi sumujące się do 1.</td></tr></tbody></table></div>
<p><strong>Przykład liczbowy:</strong> query = [1,0], dwa keys: K₁=[1,0], K₂=[0,1]. Iloczyny skalarne są 1 i 0. Przy dₖ=2 wyniki po skalowaniu to 0,707 i 0. Softmax daje w przybliżeniu [0,67;0,33]. Wynik to 0,67·V₁+0,33·V₂. <strong>To uproszczony pojedynczy head</strong>; prawdziwy transformer używa wielu głowic i warstw, maski przyczynowej oraz feed-forward layers.</p>
</section>
`);
insert("34-embeddingi",`
<section class="course-master-dive">
<h2>Embeddingi (vector embeddings) i cosine similarity — policz dokładnie</h2>
<p>Embedding to wektor liczb reprezentujący obiekt, np. fragment dokumentu. Model embeddingowy uczy się, aby semantycznie podobne fragmenty trafiały zwykle bliżej siebie. Samo podobieństwo nie gwarantuje prawdziwości dokumentu ani uprawnień użytkownika.</p>
<div class="formula-block">cosine(a,b) = (a·b) / (‖a‖ · ‖b‖)</div>
<p><strong>a·b</strong> = iloczyn skalarny, czyli suma mnożeń odpowiadających sobie współrzędnych. <strong>‖a‖</strong> = długość wektora a, czyli √(a₁²+a₂²+…). <strong>‖b‖</strong> = długość b. Wynik dla niezerowych wektorów mieści się od −1 do 1; 1 oznacza ten sam kierunek, 0 — prostopadłość.</p>
<p><strong>Przykład:</strong> a=[1,2], b=[2,1]. a·b = 1·2+2·1=4. Obie długości to √5. Similarity = 4/(√5·√5)=4/5=0,8.</p>
<p><strong>RAG:</strong> query embedding → nearest-neighbor search → filtr dostępu ACL → reranker → kontekst LLM → odpowiedź ze źródłami. Wymiarowość wektora i odległość to własności modelu i indeksu; nie zakładaj, że wyniki z dwóch różnych modeli embeddingowych są porównywalne.</p>
</section>
`);
insert("15-lora",`
<section class="course-master-dive">
<h2>LoRA, QLoRA, Full Fine-Tuning — zmieniają co innego</h2>
<p><strong>Full fine-tuning</strong> aktualizuje wiele lub wszystkie bazowe parametry modelu. <strong>LoRA</strong> zamraża główną macierz wag W i uczy tylko niewielkie macierze A i B o niskiej randze. <strong>QLoRA</strong> dodatkowo przechowuje bazowe wagi w postaci niskobitowej podczas treningu adaptera. Wszystkie te sposoby uczą adapter/parametry przez gradient; sama kwantyzacja do 4 bitów nie jest nauką bez gradientów.</p>
<div class="formula-block">W' = W + (α/r) · B · A</div>
<p><strong>W</strong> = bazowa macierz wag (zamrożona), <strong>A</strong> i <strong>B</strong> = trenowane macierze adaptera, <strong>r</strong> = rank (ranga, wielkość pośrednia), <strong>α</strong> = współczynnik skalowania aktualizacji. Dla W 4096×4096 i r=8: pełna macierz ma 16 777 216 liczb, a A+B tylko 8·4096+4096·8=65 536 liczb, czyli około 0,39% parametrów tej jednej macierzy.</p>
<p><strong>Pamięć:</strong> adapter zmniejsza stan optymalizatora i gradientów trenowanych wag, ale model bazowy musi być nadal ładowany. Aktywacje, bufory i długość kontekstu mogą dominować zużycie pamięci. Można robić eksperymenty na CPU i RAM, lecz nie obiecuj możliwości trenowania dowolnego wielkiego LLM na zwykłym laptopie.</p>
</section>
`);
function film(){
 const body=document.querySelector("#lesson-31-rodzaje-ml .sublesson-body");if(!body)return;
 const steps=[
 {h:"Co jest celem ML?",d:"Algorytm ma poznać wzorzec na przykładach. Programista wybiera model, dane i funkcję błędu, ale nie wpisuje ręcznie odpowiedzi dla każdej przyszłej sprawy.",demo:"Dane + algorytm → parametry → predykcja",tags:["Dane","Trening","Wagi","Test"]},
 {h:"Supervised: cecha X i wynik y",d:"W każdym przykładzie znamy wejście X oraz prawidłowy wynik y. Model może sprawdzić, jak bardzo pomylił się na przykładzie.",demo:"X: 1, 2, 3, 4 zgłoszenia\nY: 3, 5, 7, 9 minut",tags:["X = features","y = target","Etykiety"]},
 {h:"Regresja: wynik jest liczbą",d:"Na tych danych dobry prosty model to y-hat = 2*x+1. Dla trzech zgłoszeń zwraca siedem minut. Liczba 2 ma jednostkę min/zgłoszenie.",demo:"x=3   w=2   b=1\nŷ = 2 · 3 + 1 = 7 min",tags:["Regression","ŷ = wx+b","minuty"]},
 {h:"Klasyfikacja: wynik jest klasą",d:"Gdy y to etykieta 'opóźnienie' lub 'brak opóźnienia', model uczy się klasyfikacji. Może zwrócić prawdopodobieństwo klasy: np. 0,82. Próg decyzji ustalamy w aplikacji.",demo:"X: 20 spraw, 3 agentów\nP(opóźnienie)=0,82  →  ALARM",tags:["Classification","Label","Threshold"]},
 {h:"Unsupervised: nie znamy y",d:"Clustering ma tylko cechy obiektów. Grupy nie mają automatycznie nazw biznesowych. Trzeba je opisać, porównać z ekspercką wiedzą i sprawdzić stabilność.",demo:"X: zachowania klientów\nK-means → grupa 0 / 1 / 2",tags:["Clustering","No labels","Validation"]},
 {h:"Reinforcement: decyzje w czasie",d:"Agent obserwuje stan, wybiera akcję i otrzymuje nagrodę. Polityka wyboru działań może być aktualizowana po wielu epizodach symulacji. Nagroda źle dobrana prowadzi do złych strategii.",demo:"state → action → reward → state'\nKolejka: przydziel zespół A/B",tags:["RL","Policy","Reward"]},
 {h:"Uczenie: policz błąd i gradient",d:"Model startuje z niedokładnymi wagami. Dla x=2 i y=5, przy w=0,b=0 ma predykcję 0 i błąd -5. Gradient pokaże, jak zmienić w i b, aby zredukować błąd.",demo:"ŷ = 0·2+0 = 0\nL = (0−5)² = 25",tags:["Loss","Gradient","Optimizer"]},
 {h:"Walidacja: nie ucz się na teście",d:"Trening służy do aktualizowania wag, walidacja do wyboru konfiguracji, test do niezależnej oceny. Dane z przyszłości lub tej samej osoby w różnych zbiorach mogą zawyżyć wynik.",demo:"TRAIN → VAL → TEST\nnp. 70%    15%    15%",tags:["Data split","Leakage","Baseline"]},
 {h:"Produkcja: model trzeba monitorować",d:"Po wdrożeniu mierzysz jakość na nowych danych, latency, rozkłady cech, błędy i koszty. Produkcja to nie samo wciśnięcie Deploy; potrzebujesz właściciela, alarmów i rollbacku.",demo:"Prediction → feedback → drift check\nWersje modelu + możliwość rollback",tags:["MLOps","Monitoring","Rollback"]}
 ];
 const w=document.createElement("section");w.className="study-film";
 w.innerHTML='<h3>Animacja prowadzona: jak naprawdę uczy się Machine Learning</h3><p>Nie jest to sam wykres. Na każdym etapie pojawia się pełne wyjaśnienie, definicje i liczbowy przykład. Możesz włączyć polski odczyt dostępny w przeglądarce.</p><div class="film-progress"><i></i></div><div class="frame" aria-live="polite"><small class="film-counter"></small><h4></h4><div class="film-flow"></div><p class="film-captions"></p><div class="film-demo"></div></div><div class="film-controls"><button class="film-back" type="button">← Poprzedni</button><button class="film-next" type="button">Następny →</button><button class="film-play" type="button">Automatyczne kroki</button><button class="film-speak" type="button">Odczytaj po polsku</button><button class="film-stop" type="button">Stop</button></div><details><summary>Tekst całej animacji · do czytania</summary><div class="film-transcript"></div></details>';
 const transcript=w.querySelector(".film-transcript");
 steps.forEach((st,i)=>{const p=document.createElement("p");p.textContent=(i+1)+". "+st.h+": "+st.d;transcript.append(p)});
 const anchor=body.querySelector(".course-master-dive");anchor?.insertAdjacentElement("afterend",w);
 let idx=0,timer=null;
 const stop=()=>{if(timer){clearInterval(timer);timer=null}if("speechSynthesis" in window)window.speechSynthesis.cancel();w.querySelector(".film-play").textContent="Automatyczne kroki"};
 function render(){
  const s=steps[idx];w.querySelector(".film-counter").textContent="Krok "+(idx+1)+" z "+steps.length;
  w.querySelector("h4").textContent=s.h;w.querySelector(".film-captions").textContent=s.d;
  w.querySelector(".film-demo").textContent=s.demo;
  const flow=w.querySelector(".film-flow");flow.replaceChildren();
  s.tags.forEach((tag,j)=>{const el=document.createElement("div");el.className="film-stage"+(j===idx%s.tags.length?" selected":"");el.textContent=tag;flow.append(el)});
  w.querySelector(".film-progress i").style.width=((idx+1)/steps.length*100)+"%";
  w.querySelector(".film-back").disabled=idx===0;w.querySelector(".film-next").disabled=idx===steps.length-1;
 }
 w.querySelector(".film-back").addEventListener("click",()=>{stop();idx=Math.max(idx-1,0);render()});
 w.querySelector(".film-next").addEventListener("click",()=>{stop();idx=Math.min(idx+1,steps.length-1);render()});
 w.querySelector(".film-stop").addEventListener("click",stop);
 w.querySelector(".film-play").addEventListener("click",()=>{
  if(timer){stop();return}
  w.querySelector(".film-play").textContent="Pauza";
  timer=setInterval(()=>{if(idx===steps.length-1){stop();return}idx++;render()},10500);
 });
 w.querySelector(".film-speak").addEventListener("click",()=>{
  if(!("speechSynthesis" in window)){alert("Ta przeglądarka nie udostępnia czytania głosem.");return}
  window.speechSynthesis.cancel();const utter=new SpeechSynthesisUtterance(steps[idx].h+". "+steps[idx].d);
  utter.lang="pl-PL";utter.rate=0.92;window.speechSynthesis.speak(utter);
 });
 render();
}
film();
function mathLab(){
 const body=document.querySelector("#lesson-13-gradient .sublesson-body");if(!body)return;
 const box=document.createElement("section");box.className="interactive-math";
 box.innerHTML=`<h3>Laboratorium: rzeczywisty gradient descent na czterech obserwacjach</h3>
 <p>Zmieniają się prawdziwe wartości <strong>MSE, ∂MSE/∂w, ∂MSE/∂b</strong> oraz prosta predykcji. Nie są to wygenerowane na sztywno etykiety.</p>
 <div class="control-row"><label>Learning rate (η): <strong class="lr-text"></strong><input type="range" class="lr" min="0.002" max="0.06" value="0.02" step="0.002"></label>
 <div><button type="button" class="one">Wykonaj 1 krok</button><button type="button" class="twenty">Wykonaj 20 kroków</button><button type="button" class="reset">Reset</button></div></div>
 <svg viewBox="0 0 700 320" role="img" aria-label="Wykres rzeczywistych punktów treningowych i prostej modelu"></svg>
 <div class="math-output" aria-live="polite"></div>
 <p><small>Przykład syntetyczny. Dataset: (x,y) = (1,3), (2,5), (3,7), (4,9). Optimum jest bliskie w=2, b=1. Przy wysokim η gradient może przeskoczyć optimum i spowodować niestabilność.</small></p>`;
 const anchor=body.querySelector(".course-master-dive");anchor?.insertAdjacentElement("afterend",box);
 const lrInput=box.querySelector(".lr"),out=box.querySelector(".math-output"),svg=box.querySelector("svg");
 const data=[[1,3],[2,5],[3,7],[4,9]],ns="http://www.w3.org/2000/svg";let w=0,b=0,iter=0,last="";
 const gradients=()=>{let loss=0,gw=0,gb=0;for(const [x,y] of data){const err=w*x+b-y;loss+=err*err;gw+=2*x*err;gb+=2*err}return {mse:loss/data.length,dw:gw/data.length,db:gb/data.length}};
 const create=(tag,attrs,text)=>{const e=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));if(text!==undefined)e.textContent=text;svg.append(e);return e};
 const fmt=n=>Number(n).toFixed(4).replace(".",",");
 function render(){
  const g=gradients();const rate=Number(lrInput.value);box.querySelector(".lr-text").textContent=fmt(rate);
  out.innerHTML=`<p><strong>Iteracja ${iter}</strong> · w=${fmt(w)}, b=${fmt(b)} · <strong>MSE=${fmt(g.mse)}</strong></p>
  <p>Wzór: ŷ = w·x + b, MSE=(1/n) Σ (ŷ−y)², gdzie n=4.</p>
  <p>Średnie pochodne: ∂MSE/∂w = <strong>${fmt(g.dw)}</strong>; ∂MSE/∂b = <strong>${fmt(g.db)}</strong>.</p>
  <p>Jeśli klikniesz „1 krok”: w'=${fmt(w-rate*g.dw)}; b'=${fmt(b-rate*g.db)}. Nowe w = stare w − η·gradient. ${last}</p>`;
  svg.replaceChildren();const xPix=x=>58+x*116,yPix=y=>281-y*23;
  create("line",{x1:58,y1:12,x2:58,y2:281,stroke:"#86afba","stroke-width":2});
  create("line",{x1:58,y1:281,x2:662,y2:281,stroke:"#86afba","stroke-width":2});
  for(let x=0;x<=5;x++){create("line",{x1:xPix(x),y1:281,x2:xPix(x),y2:286,stroke:"#9cbbc5"});create("text",{x:xPix(x),y:306,fill:"#b1cddb","text-anchor":"middle","font-size":12},x)}
  for(let y=0;y<=11;y+=2){create("line",{x1:53,y1:yPix(y),x2:662,y2:yPix(y),stroke:"#2c4558"});create("text",{x:43,y:yPix(y)+4,fill:"#b1cddb","text-anchor":"end","font-size":12},y)}
  create("text",{x:615,y:306,fill:"#c1e9e2","font-size":12},"x: zgłoszenia");
  create("text",{x:60,y:15,fill:"#c1e9e2","font-size":12},"y: minuty");
  create("line",{x1:xPix(0),y1:yPix(b),x2:xPix(5),y2:yPix(w*5+b),stroke:"#f5c97d","stroke-width":3});
  for(const [x,y] of data){create("circle",{cx:xPix(x),cy:yPix(y),r:7,fill:"#8cead0",stroke:"#0b1827","stroke-width":2})}
  create("text",{x:420,y:22,fill:"#8cead0","font-size":12},"● dane treningowe");
  create("text",{x:420,y:40,fill:"#f5c97d","font-size":12},"— aktualna predykcja");
 }
 const step=()=>{const g=gradients(),rate=Number(lrInput.value),prev=g.mse;w-=rate*g.dw;b-=rate*g.db;iter++;last="Zmiana MSE po kroku: "+fmt(prev)+" → "+fmt(gradients().mse);};
 box.querySelector(".one").addEventListener("click",()=>{step();render()});
 box.querySelector(".twenty").addEventListener("click",()=>{for(let i=0;i<20;i++)step();render()});
 box.querySelector(".reset").addEventListener("click",()=>{w=0;b=0;iter=0;last="";render()});
 lrInput.addEventListener("input",render);render();
}
mathLab();
})();