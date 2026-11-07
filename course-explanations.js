/* Learning details directly in the existing modules: no duplicate courses. */
(()=>{
"use strict";
function card(container,html){
 const root=document.getElementById("view-"+container);
 const header=root?.querySelector(".module-header,.course-guide");
 if(!root||!header)return;
 const box=document.createElement("section");box.className="learning-mechanics";box.innerHTML=html;header.insertAdjacentElement("afterend",box);
}
card("llm",`
<h2>Jak naprawdę powstaje następny token? / How next-token prediction works</h2>
<p><b>Logit</b> (<i>logit</i>: surowa punktacja jednego możliwego tokenu) to wynik liczbowy przed obliczeniem prawdopodobieństwa. <b>Logity</b> (<i>logits</i>: taka punktacja dla wielu tokenów) nie są jeszcze odpowiedzią ani procentami.</p>
<p><b>Softmax</b> (<i>softmax function</i>: przekształcenie logitów na nieujemne prawdopodobieństwa, których suma to 1, czyli 100%) obliczamy osobno dla każdej możliwej kontynuacji.</p>
<div class="math-number-grid">
<div><b>1. INPUT / WEJŚCIE</b><p>Model rozważa trzy przykładowe tokeny: „Warszawa”, „Kraków”, „Berlin”.</p></div>
<div><b>2. LOGITS / PUNKTACJA</b><p>Załóżmy: 2, 1, 0. To liczby przykładowe — nie są prawdziwym wynikiem konkretnego LLM.</p></div>
<div><b>3. EXP / WYKŁADNIK</b><p>Liczymy e² ≈ 7,389; e¹ ≈ 2,718; e⁰ = 1. Symbol e ≈ 2,718 to stała matematyczna Eulera.</p></div>
<div><b>4. NORMALIZATION / DZIELENIE PRZEZ SUMĘ</b><p>Suma to 7,389 + 2,718 + 1 = 11,107. Prawdopodobieństwo tokenu i = e^(logit i) / suma e^(logit każdego tokenu).</p></div>
<div><b>5. PROBABILITIES / PRAWDOPODOBIEŃSTWA</b><p>„Warszawa”: 7,389 / 11,107 ≈ 66,5%. „Kraków”: 24,5%. „Berlin”: 9,0%. Razem około 100%.</p></div>
<div><b>6. SAMPLING / WYBÓR</b><p>Model wybiera kolejny token — deterministycznie lub losując według tych wartości. Dekoder (<i>decoder</i>: zamiana token ID na widoczny tekst) odtwarza litery.</p></div>
</div>
<p><b>Co ważne?</b> Te procenty nie są gwarancją prawdziwości faktu. Wyrażają preferencję modelu co do następnego tokenu w danym kontekście. Temperatura (<i>temperature</i>: parametr zmieniający rozkład wyboru tokenów) może spłaszczać lub wyostrzać ten rozkład.</p>
`);
card("ai-ml",`
<h2>Od wzoru do działania / Mathematics with meaning</h2>
<p>Prosta regresja liniowa (<i>linear regression</i>) ma wzór <strong>ŷ = w × x + b</strong>. Litera <b>x</b> to cecha wejściowa (<i>feature</i>), np. liczba zgłoszeń. <b>w</b> to waga (<i>weight</i>) określająca wpływ x na wynik. <b>b</b> to wyraz wolny (<i>bias/intercept</i>) dodawany do wyniku. <b>ŷ</b> czytamy „igrek z daszkiem” i oznacza prognozę (<i>prediction</i>). <b>y</b> bez daszka to prawdziwa zmierzona wartość (<i>ground truth</i>).</p>
<p>Przykład: x = 2, w = 3, b = 1. Model przewiduje ŷ = 3 × 2 + 1 = 7. Jeśli prawdziwe y = 8, błąd (<i>error</i>) wynosi ŷ − y = −1.</p>
<p>Kwadrat tego błędu to (−1)² = 1. W zbiorze wielu próbek liczymy <b>MSE</b> (<i>mean squared error</i>: średnią kwadratów błędów), dzieląc sumę kwadratów przez liczbę próbek. Uczymy wagi tak, by MSE malało na danych treningowych i model dobrze działał także na nowych danych.</p>
<p>Dla jednej próbki i straty L = (ŷ − y)² pochodna względem w wynosi dL/dw = 2 × (ŷ − y) × x. Tutaj dL/dw = 2 × (−1) × 2 = −4. <b>Gradient</b> (<i>gradient</i>: informacja, jak strata zmienia się wraz z wagą) jest ujemny. Przy <b>learning rate</b> (<i>współczynnik uczenia</i>) η = 0,1 aktualizujemy w: 3 − 0,1 × (−4) = 3,4. To jeden krok treningu, nie cała nauka modelu.</p>
<p><b>Uwaga:</b> gradient nie jest dokładnością modelu. Accuracy, precision i recall mierzą jakość oceny, a gradient pomaga aktualizować parametry podczas nauki.</p>
`);
})();