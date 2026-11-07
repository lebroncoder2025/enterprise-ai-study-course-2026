(function courseExtra(){
"use strict";
function add(id,html){const body=document.querySelector("#lesson-"+id+" .sublesson-body");if(!body)return;const anchor=body.querySelector(".course-master-dive");anchor?.insertAdjacentHTML("beforeend",html)}
add("12-mlfundament",`
<h3>Klasyfikacja logistyczna (logistic regression) — co znaczy sigmoid?</h3>
<div class="formula-block">z = w·x + b;   p = σ(z) = 1/(1+e⁻ᶻ)</div>
<p><strong>z</strong> = surowy wynik modelu (logit), <strong>w</strong> = współczynnik, <strong>x</strong> = cecha, <strong>b</strong> = wyraz wolny, <strong>e≈2,71828</strong> = stała Eulera, <strong>σ</strong> = sigmoid (funkcja logistyczna), <strong>p</strong> = estymowane prawdopodobieństwo klasy 1. Dla z=0 sigmoid daje p=0,5. Dla z=2 daje około 0,881, dla z=−2 około 0,119.</p>
<p>Jeśli threshold=0,5, to p≥0,5 → klasa 1. Jeśli koszt przeoczenia sprawy jest duży, możesz obniżyć próg, ale zwiększy się liczba fałszywych alarmów. Pamiętaj: nawet p=0,8 nie dowodzi, że model jest dobrze skalibrowany.</p>
<h3>Log loss / binary cross-entropy</h3>
<div class="formula-block">L = −[y·ln(p) + (1−y)·ln(1−p)]</div>
<p><strong>y</strong> to rzeczywista etykieta 0 lub 1. <strong>p</strong> to prognozowana szansa klasy 1. <strong>ln</strong> to logarytm naturalny. Gdy y=1, a p=0,9: strata wynosi −ln(0,9)≈0,105. Jeśli model pewnie i błędnie daje p=0,01 dla prawdziwego y=1, strata ≈4,605. W ten sposób mocne błędne przekonania kosztują więcej.</p>
<h3>Drzewo, las losowy i boosting — to nie są synonimy</h3>
<p><strong>Decision tree</strong> dzieli przestrzeń cech warunkami, np. <code>liczba_zgloszen &gt; 12</code>. <strong>Random forest</strong> uczy wiele drzew na losowych próbkach i podzbiorach cech, a następnie uśrednia ich predykcje. <strong>Gradient boosting</strong>, m.in. XGBoost i LightGBM, dodaje słabe modele kolejno, aby poprawiać błędy poprzedniego zespołu. Losowy las opiera się głównie na baggingu i redukcji wariancji; boosting buduje sekwencję ulepszeń. Dobór zależy od danych, metryk, jakości cech, latency i wymogów explainability.</p>
`);
add("31-rodzaje-ml",`
<h3>K-means clustering na czterech liczbach — bez etykiet</h3>
<p>Mamy tylko jedną cechę: [1,2,9,10]. Wybieramy <strong>k=2</strong>, czyli liczbę grup. Ustawiamy początkowe <strong>centroids</strong> (centra) w 1 i 10. Dla każdej wartości liczymy odległość od obu centrów. Punkty 1 i 2 trafiają do pierwszej grupy, a 9 i 10 do drugiej. Przeliczamy centra jako średnie: (1+2)/2=1,5; (9+10)/2=9,5. Powtarzamy, aż przypisania się ustabilizują. Nazwy grup 0 i 1 są arbitralne.</p>
<p><strong>Odległość euklidesowa (Euclidean distance)</strong> dla punktów a=(a₁,…,aₘ) i b=(b₁,…,bₘ) to √Σ(aⱼ−bⱼ)². m oznacza liczbę cech, a j ich indeks. Jeśli cecha „przychód” ma tysiące jednostek, a „liczba zgłoszeń” tylko dziesiątki, brak skalowania (feature scaling) może zdominować dystans. To pokazuje, dlaczego preprocessing jest częścią modelowania.</p>
<h3>RL — przyszła nagroda a natychmiastowa nagroda</h3>
<div class="formula-block">Gₜ = rₜ + γ·rₜ₊₁ + γ²·rₜ₊₂ + …</div>
<p><strong>Gₜ</strong> = łączna zdyskontowana przyszła nagroda (return) od kroku t; <strong>rₜ</strong> = nagroda w chwili t; <strong>γ (gamma)</strong> = discount factor (współczynnik dyskonta), zwykle 0–1, dzięki któremu dalsze nagrody mają mniejszą wagę. Jeśli r₀=2, r₁=5 i γ=0,9, przy dwóch krokach G₀=2+0,9·5=6,5. RL uczy strategii, która daje dobry wynik w dłuższym horyzoncie, a niekoniecznie największą natychmiastową premię.</p>
`);
add("34-embeddingi",`
<h3>BM25 vs cosine: jedno wyszukuje słowa, drugie podobieństwo semantyczne</h3>
<p><strong>BM25</strong> to metoda lexical retrieval. Uwzględnia obecność słów z zapytania, częstość ich występowania i długość dokumentu. Działa dobrze na identyfikatorach i dokładnych terminach, np. <code>SOP-QA-104</code>. Embedding search wyszukuje podobne znaczenie, np. „kto zatwierdza procedurę?” vs „approval responsibilities”.</p>
<p><strong>Hybrid search</strong> łączy oba rankingi, często przez <strong>Reciprocal Rank Fusion (RRF)</strong>: sumujesz dla dokumentu składniki <code>1/(k+rank)</code> z poszczególnych list. <strong>rank</strong> = pozycja dokumentu na liście, a <strong>k</strong> = stała łagodząca wpływ pierwszej pozycji. To ranking, nie prawdopodobieństwo trafności. Połączenie metod może ograniczać błędy, ale wymaga oceny na prawdziwym golden set.</p>
`);
add("35-prompt-anatomia",`
<h3>Prompt a API: co wysyła aplikacja?</h3>
<pre><code>{
  "model": "model-wybrany-w-systemie",
  "messages": [
    {"role": "developer", "content": "Odpowiadaj na podstawie dostarczonych danych. Zwracaj JSON."},
    {"role": "user", "content": "Podsumuj tę procedurę."}
  ]
}</code></pre>
<p>To dydaktyczny zapis przypominający format wybranych API, <strong>nie uniwersalny kontrakt wszystkich dostawców</strong>. W nowoczesnych platformach instrukcje, dane multimodalne, historia, narzędzia i structured outputs mogą mieć osobne pola. Prawdziwe API, pola i hierarchię wiadomości sprawdzaj w dokumentacji wdrażanej wersji. Stałe instrukcje trzymasz w definicji agenta / backendzie, nie w klienckim JavaScript jako tajną konfigurację.</p>
`);
add("46-koszty-adopcja",`
<h3>Oblicz miesięczny koszt inference — zdefiniuj każdą wielkość</h3>
<div class="formula-block">C = N × ((Tᵢ/10⁶)·Pᵢ + (Tₒ/10⁶)·Pₒ)</div>
<p><strong>C</strong> = koszt tokenów (waluta ze stawki), <strong>N</strong> = liczba wywołań, <strong>Tᵢ</strong> = średnia liczba input tokens na żądanie, <strong>Tₒ</strong> = średnia liczba output tokens, <strong>Pᵢ/Pₒ</strong> = ceny miliona tokenów wejściowych i wyjściowych. Ceny zależą od modelu, dostawcy i kontraktu; nie przyjmuj liczb z kursu jako aktualnego cennika.</p>
<p>Przykład wyłącznie symulacyjny: N=100 000, Tᵢ=2000, Tₒ=500, Pᵢ=1 jednostka za mln, Pₒ=4 jednostki za mln. Koszt pojedynczego żądania =0,002+0,002=0,004 jednostki, zatem łącznie 400. Dodaj koszty storage, retrieval, narzędzi, monitoringu i zespołu. Wartość biznesową oceniaj osobno: skrócony czas obsługi nie oznacza jeszcze oszczędności netto.</p>
`);
function metrics(){
 const el=document.querySelector("#lesson-41-ml-metryki .sublesson-body");if(!el)return;
 const panel=document.createElement("div");panel.className="interactive-math";
 panel.innerHTML=`<h3>Eksperyment: jak próg zmienia Precision i Recall?</h3><p>Przesuwaj próg decyzji. Wyniki są liczone z 12 jawnych, <strong>syntetycznych</strong> prognoz: 4 prawdziwe przypadki pilne i 8 niepilnych.</p>
 <div class="control-row"><label>Decision threshold: <strong class="thr-val">0,50</strong><input class="thr" type="range" min="0.05" max="0.95" value="0.50" step="0.05"></label></div>
 <div class="math-output" aria-live="polite"></div>
 <small>TP = true positive, FP = false positive, FN = false negative, TN = true negative. Niższy próg zwykle zwiększa recall kosztem precision — sprawdzisz to sam.</small>`;
 el.querySelector(".course-master-dive")?.insertAdjacentElement("afterend",panel);
 const scores=[[.90,1],[.77,1],[.61,1],[.35,1],[.80,0],[.55,0],[.43,0],[.32,0],[.29,0],[.17,0],[.08,0],[.04,0]];
 function update(){
  const threshold=+panel.querySelector(".thr").value;panel.querySelector(".thr-val").textContent=threshold.toFixed(2).replace(".",",");
  let tp=0,fp=0,fn=0,tn=0;
  for(const [p,y] of scores){const pred=+(p>=threshold);if(pred===1&&y===1)tp++;else if(pred===1&&y===0)fp++;else if(pred===0&&y===1)fn++;else tn++}
  const precision=tp+fp?tp/(tp+fp):0,recall=tp+fn?tp/(tp+fn):0;
  const f1=precision+recall?2*precision*recall/(precision+recall):0;
  const fmt=n=>(n*100).toFixed(1).replace(".",",")+"%";
  panel.querySelector(".math-output").innerHTML=`<p><strong>TP = ${tp} · FP = ${fp} · FN = ${fn} · TN = ${tn}</strong></p><p>Precision = TP/(TP+FP) = ${tp}/(${tp}+${fp}) = <strong>${fmt(precision)}</strong>.</p><p>Recall = TP/(TP+FN) = ${tp}/(${tp}+${fn}) = <strong>${fmt(recall)}</strong>.</p><p>F1 = 2PR/(P+R) = <strong>${fmt(f1)}</strong>; Accuracy = (TP+TN)/12 = <strong>${fmt((tp+tn)/12)}</strong>.</p>`;
 }
 panel.querySelector(".thr").addEventListener("input",update);update();
}
metrics();
const visualSteps={
"lesson-32-llm-od-srodka":{
title:"LLM w 8 krokach — jak naprawdę powstaje słowo?",
steps:[
["Pytanie użytkownika","Użytkownik wysyła „Jaka jest stolica Polski?”. Interfejs aplikacji dopina właściwe instrukcje i kontekst.","USER → RUNTIME"],
["Tokenizer","Tokenizer rozbija tekst na tokeny i mapuje je na identyfikatory liczbowe. To słownik zapisany razem z modelowym formatem.","TEKST → ID tokenów"],
["Embeddings","Każdy ID odczytuje wyuczony wektor liczb z macierzy osadzeń. Te wektory są wejściem do transformera.","ID → wektor [0.1, -0.3, ...]"],
["Attention","Tokeny przetwarzane są w warstwach z mechanizmem uwagi. Wagi reprezentują wyuczone zależności statystyczne.","Q,K,V → weighted context"],
["Logits","Warstwa wyjściowa oblicza liczbę — logit — dla każdej pozycji słownika tokenów.","logits: token₁=2.1, token₂=0.7..."],
["Softmax","Logity zamieniają się na prawdopodobieństwa. Podwyższona temperatura spłaszcza rozkład, a niższa go wyostrza.","P(token | context)"],
["Decoding","Wybrany zostaje ID następnego tokenu; tokenizer odtwarza odpowiadający mu tekst. Może to być całe słowo lub jego część.","ID → „Warszawa” lub fragment"],
["Ponawianie","Nowy token wraca do kontekstu i model przewiduje kolejny aż do zakończenia. Żadne wyszukanie internetu nie jest wymagane.","token po tokenie → odpowiedź"]
]},
"lesson-28-interpreter":{
title:"Agent narzędziowy — jeden cykl tool calling",
steps:[
["Konfiguracja","Backend udostępnia narzędzie code_interpreter, jego opis i ograniczenia. Jeśli nie ma tool, model nie wykona kodu.","Tools=[code_interpreter]"],
["Polecenie","Użytkownik prosi o medianę z CSV. Wysłany jest prompt z instrukcją, historią i referencją do pliku.","„Policz medianę”"],
["Decyzja modelu","Przy tool_choice=auto model może wyemitować prośbę o tool call. Nie jest to wykonanie Pythona.","tool_call()"],
["Autoryzacja","Runtime sprawdza, czy bieżący użytkownik ma prawo używać narzędzia i pliku.","ACL + resource policy"],
["Sandbox","Izolowany interpreter wykonuje kod. Zapis logów i limity zależą od platformy.","Python: median([9,12,15,18,19])"],
["Wynik","Tool zwraca 15 i ewentualne błędy. Model otrzymuje wynik jako część nowego kontekstu.","tool_result = 15"],
["Odpowiedź","LLM prezentuje wynik i metodę. Aplikacja waliduje format, sprawdza wyniki oraz zapisuje trace.","„Mediana: 15”"],
["Kontrola","Jeżeli agent chciał zmienić dane w ERP, potrzebny byłby osobny uprawniony tool oraz approval. Code Interpreter nie daje dowolnego dostępu.","HITL + audit trail"]
]},
"lesson-20-mlops":{
title:"MLOps w 8 krokach — model to nie plik",
steps:[
["Źródła","Zbierasz wersjonowane obserwacje i dokumentujesz schemat cech. Odrzucasz lub maskujesz niedozwolone dane.","source + consent + schema"],
["Podział","Wydzielasz train/validation/test zgodnie z czasem i jednostką biznesową. Zabezpieczasz się przed leakage.","TRAIN | VALIDATION | TEST"],
["Trening","Uruchamiasz eksperyment, zapisujesz seed, hiperparametry, commit kodu i dane.","experiment run"],
["Ocena","Porównujesz z baseline i testami held-out, osobno dla trudnych przypadków.","MAE / F1 / safety / bias"],
["Model registry","Rejestrujesz wersję i artefakty. Osoba odpowiedzialna akceptuje poprawność.","model:v17"],
["Deploy","Wdrażasz canary/shadow albo cały ruch, ale masz plan wycofania.","5% → 20% → 100%"],
["Telemetry","Mierzysz błędy, latency, drift, koszty i feedback. W LLM także traces narzędzi i cytowania.","monitoring + alerts"],
["Ewolucja","Wykrywasz regresje, robisz rollback lub ponawiasz trening z odpowiednimi kontrolami.","incident → RCA → retrain"]
]}
};
function addGuided(id,config){
 const el=document.querySelector("#"+id+" .sublesson-body");if(!el)return;
 const guide=document.createElement("section");guide.className="study-film";
 guide.innerHTML=`<h3>${config.title}</h3><p>Materiał krok po kroku: nie tylko grafika, lecz opis działania i przykład przy każdym etapie. Możesz włączyć czytanie głosem przeglądarki.</p>
 <div class="film-progress"><i></i></div><div class="frame" aria-live="polite"><small class="film-counter"></small><h4></h4><p class="film-captions"></p><div class="film-demo"></div></div>
 <div class="film-controls"><button type="button" class="film-back">← Wstecz</button><button type="button" class="film-next">Dalej →</button><button type="button" class="film-play">Automatyczne kroki</button><button type="button" class="film-speak">Czytaj krok</button><button type="button" class="film-stop">Stop</button></div>`;
 el.querySelector(".course-master-dive")?.insertAdjacentElement("afterend",guide);
 const stages=config.steps;let i=0,timer=null;
 const stop=()=>{if(timer)clearInterval(timer);timer=null;guide.querySelector(".film-play").textContent="Automatyczne kroki";window.speechSynthesis?.cancel?.()};
 const render=()=>{
  guide.querySelector(".film-counter").textContent=`Krok ${i+1} z ${stages.length}`;
  guide.querySelector("h4").textContent=stages[i][0];
  guide.querySelector(".film-captions").textContent=stages[i][1];
  guide.querySelector(".film-demo").textContent=stages[i][2];
  guide.querySelector(".film-progress i").style.width=(100*(i+1)/stages.length)+"%";
  guide.querySelector(".film-back").disabled=i===0;guide.querySelector(".film-next").disabled=i===stages.length-1;
 };
 guide.querySelector(".film-back").onclick=()=>{stop();i=Math.max(0,i-1);render()};
 guide.querySelector(".film-next").onclick=()=>{stop();i=Math.min(stages.length-1,i+1);render()};
 guide.querySelector(".film-stop").onclick=stop;
 guide.querySelector(".film-play").onclick=()=>{if(timer){stop();return}timer=setInterval(()=>{if(i+1===stages.length){stop();return}i++;render()},10000);guide.querySelector(".film-play").textContent="Pauza"};
 guide.querySelector(".film-speak").onclick=()=>{if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(stages[i][0]+". "+stages[i][1]);u.lang="pl-PL";u.rate=.92;window.speechSynthesis.speak(u)};
 render();
}
for(const [id,config] of Object.entries(visualSteps))addGuided(id,config);
})();