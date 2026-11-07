(function courseCore(){
"use strict";
const roots=[...document.querySelectorAll("details.sublesson")];
const vocabByModule={
"view-ai-ml":[["sztuczna inteligencja","artificial intelligence (AI)"],["uczenie maszynowe","machine learning (ML)"],["uczenie nadzorowane","supervised learning"],["uczenie nienadzorowane","unsupervised learning"],["uczenie przez wzmacnianie","reinforcement learning (RL)"],["cecha","feature"],["etykieta","label"],["zmienna docelowa","target variable"],["funkcja straty","loss function"],["współczynnik uczenia","learning rate"],["podział danych","train/validation/test split"],["regresja","regression"],["klasyfikacja","classification"]],
"view-llm":[["duży model językowy","large language model (LLM)"],["tokenizacja","tokenization"],["słownik tokenów","token vocabulary"],["wektor reprezentacji","embedding vector"],["mechanizm uwagi","attention mechanism"],["model bazowy","foundation model"],["logity","logits"],["rozkład prawdopodobieństwa","probability distribution"],["dostrajanie modelu","fine-tuning"]],
"view-prompty":[["instrukcja systemowa","system instruction"],["wiadomość użytkownika","user message"],["hierarchia instrukcji","instruction hierarchy"],["projektowanie promptów","prompt engineering"],["projektowanie kontekstu","context engineering"],["schemat wyjścia","output schema"],["atak przez instrukcje w danych","prompt injection"],["wywołanie narzędzia","tool call"]],
"view-rag-azure":[["generowanie wspomagane wyszukiwaniem","retrieval-augmented generation (RAG)"],["wyszukiwanie leksykalne","lexical search"],["wyszukiwanie wektorowe","vector search"],["wyszukiwanie hybrydowe","hybrid search"],["ranking wyników","retrieval ranking"],["tożsamość zarządzana","managed identity"],["śledzenie żądań","request tracing"]],
"view-fine-tuning":[["pełne dostrajanie","full fine-tuning"],["uczenie z nadzorem instrukcyjnym","supervised fine-tuning (SFT)"],["dostrajanie efektywne parametrowo","parameter-efficient fine-tuning (PEFT)"],["adapter niskiej rangi","low-rank adaptation (LoRA)"],["dostrajanie z kwantyzacją","quantized LoRA (QLoRA)"],["zestaw walidacyjny","validation set"],["przeciek danych","data leakage"]],
"view-agenci":[["przebieg deterministyczny","deterministic workflow"],["agent autonomiczny","autonomous agent"],["orkiestracja","orchestration"],["narzędzie","tool"],["wyzwalacz","trigger"],["zatwierdzenie przez człowieka","human-in-the-loop (HITL)"],["idempotencja","idempotency"]],
"view-produkty":[["asystent kodu","coding assistant"],["uzupełnianie kodu","code completion"],["repozytorium","repository"],["uprawnienia najmniejsze niezbędne","least privilege"],["przegląd kodu","code review"],["instrukcje projektu","project instructions"]],
"view-produkcja":[["monitorowanie","monitoring"],["obserwowalność","observability"],["śledzenie wykonania","tracing"],["zbiór referencyjny","golden dataset"],["test regresyjny","regression test"],["wdrożenie kanarkowe","canary deployment"],["dryf danych","data drift"],["opóźnienie","latency"]],
"view-gxp-sox":[["dobra praktyka w regulowanym obszarze","Good x Practice (GxP)"],["dobre praktyki wytwarzania","Good Manufacturing Practice (GMP)"],["rzetelność zapisów","data integrity"],["ścieżka audytowa","audit trail"],["kontrole sprawozdawczości finansowej","internal control over financial reporting (ICFR)"],["ogólne kontrole IT","IT general controls (ITGC)"],["działania korygujące i zapobiegawcze","corrective and preventive action (CAPA)"]],
"view-projekt":[["wybór architektury","architecture selection"],["punkt odniesienia","baseline"],["analiza kompromisów","trade-off analysis"],["mierniki sukcesu","success metrics"],["koszt całkowity","total cost of ownership (TCO)"],["bramka produkcyjna","deployment gate"]]
};
const fallback=[["cel biznesowy","business objective"],["przetwarzanie danych","data processing"],["testowanie","testing"],["ewaluacja","evaluation"]];
let translations=0,tables=0;
for(const node of roots){
 const body=node.querySelector(".sublesson-body");if(!body)continue;
 const parent=node.closest(".course-module"),type=parent?.id||"";
 const words=vocabByModule[type]||fallback;
 const vocab=document.createElement("aside");vocab.className="english-vocab";
 vocab.innerHTML="<h3>Mini-słownik PL → EN · słowa do użycia na rozmowie</h3>";
 const dl=document.createElement("dl");
 for(const [pl,en] of words.slice(0,10)){const item=document.createElement("div");const dt=document.createElement("dt");dt.textContent=pl;const dd=document.createElement("dd");dd.textContent=en;item.append(dt,dd);dl.appendChild(item)}
 vocab.appendChild(dl);
 const intro=body.querySelector("blockquote,.lead");
 if(intro)intro.insertAdjacentElement("afterend",vocab);else body.prepend(vocab);translations++;
 for(const table of [...body.querySelectorAll("table")]){
  if(table.closest(".learning-table-scroll"))continue;
  const frame=document.createElement("div");frame.className="learning-table-scroll";frame.tabIndex=0;frame.setAttribute("role","region");
  const title=table.querySelector("th")?.textContent?.trim()||"Tabela danych";
  frame.setAttribute("aria-label","Tabela: "+title+". Na wąskim ekranie przewiń poziomo.");
  table.parentNode.insertBefore(frame,table);frame.appendChild(table);
  const desc=document.createElement("p");desc.className="learning-table-caption";
  desc.textContent="Tabela z widoczną siatką. Na telefonie przewiń w bok, aby zobaczyć wszystkie kolumny.";
  frame.after(desc);tables++;
 }
}
const first=document.querySelector("#lesson-30-ai-genai .learning-table-scroll table");
if(first&&first.querySelectorAll("th").length===4){
 first.innerHTML=`
 <thead><tr><th scope="col">Metoda / Method</th><th scope="col">Dane wejściowe / Input</th><th scope="col">Co zwraca / Output</th><th scope="col">Przykład biznesowy / Business example</th></tr></thead>
 <tbody>
 <tr><th scope="row">Reguły (rule-based system)</th><td>Warunki zapisane ręcznie, np. limit 100</td><td>Decyzja IF/ELSE; nie uczy się sam</td><td>Alert przy kwocie przekraczającej limit</td></tr>
 <tr><th scope="row">ML: klasyfikacja (supervised classification)</th><td>Cechy + etykieta: „opóźnione?”</td><td>Klasa lub prawdopodobieństwo klasy</td><td>Ryzyko opóźnienia przesyłki: 0,82</td></tr>
 <tr><th scope="row">ML: regresja (supervised regression)</th><td>Cechy + liczbowy wynik, np. czas w min</td><td>Liczba na skali ciągłej</td><td>Przewidywany czas obsługi: 43 min</td></tr>
 <tr><th scope="row">ML: klasteryzacja (unsupervised clustering)</th><td>Cechy klientów bez etykiet grup</td><td>Grupy znalezione w danych; numery klas nie mają znaczenia</td><td>Segmenty zachowań użytkowników</td></tr>
 <tr><th scope="row">ML: uczenie przez wzmacnianie (reinforcement learning)</th><td>Stan → działanie → nagroda → następny stan</td><td>Polityka wyboru działania</td><td>Symulacyjne sterowanie kolejką zadań</td></tr>
 <tr><th scope="row">Deep Learning (DL)</th><td>Dane liczbowe, obrazy, dźwięk, tekst</td><td>Predykcja, reprezentacja lub wygenerowana treść</td><td>Detekcja obiektów na zdjęciach</td></tr>
 <tr><th scope="row">GenAI / LLM (generative AI)</th><td>Tokeny instrukcji, kontekstu i historii</td><td>Nowa sekwencja tokenów</td><td>Odpowiedź oparta na przytoczonym SOP</td></tr>
 </tbody>`;
}
const filmLibrary={
"lesson-31-rodzaje-ml":{id:"PKKrnOEBZbc",title:"Podstawy AI – uczenie maszynowe (Dokodu, PL)",source:"https://dokodu.it/blog/python/ai/machine-learning/podstawy-ai-uczenie-maszynowe",focus:"Obserwuj, jakie dane są wejściem, skąd bierze się wynik docelowy i dlaczego podział na supervised / unsupervised / reinforcement dotyczy sposobu uczenia, a nie jednego algorytmu."},
"lesson-13-gradient":{id:"IHZwWFHWa-w",title:"Gradient descent, how neural networks learn — 3Blue1Brown (EN)",source:"https://www.3blue1brown.com/topics/neural-networks",focus:"Gdy pojawia się pochodna, prześledź, co oznacza zmiana wagi o niewielką wartość. Powróć do rachunku po filmie."}
};
for(const [lid,v] of Object.entries(filmLibrary)){
 const n=document.getElementById(lid);if(!n)continue;
 const body=n.querySelector(".sublesson-body");if(!body)continue;
 const wrap=document.createElement("div");wrap.className="study-video";
 wrap.innerHTML=`<h3>Film od niezależnego autora · ${v.title}</h3><p>${v.focus}</p>
 <button type="button" class="load-youtube">Odtwórz w lekcji (połączenie z YouTube)</button>
 <div class="player" hidden></div>
 <p><a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer">Otwórz bezpośrednio na YouTube</a> · <a href="${v.source}" target="_blank" rel="noopener noreferrer">Źródło / opis autora</a></p>
 <small>Film wymaga internetu. Jeśli właściciel wyłączy osadzanie, odtwórz go na YouTube. Kurs i ćwiczenia działają również bez niego.</small>`;
 body.insertBefore(wrap,body.children[2]||null);
 wrap.querySelector(".load-youtube").addEventListener("click",e=>{
  const player=wrap.querySelector(".player");if(player.children.length){player.hidden=!player.hidden;return}
  const iframe=document.createElement("iframe");
  iframe.src="https://www.youtube-nocookie.com/embed/"+v.id+"?rel=0";
  iframe.title=v.title;iframe.loading="lazy";iframe.referrerPolicy="strict-origin-when-cross-origin";
  iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";iframe.allowFullscreen=true;
  player.append(iframe);player.hidden=false;e.target.textContent="Pokaż / ukryj odtwarzacz";
 });
}
const vidElems=[...document.querySelectorAll("video[src^='assets/videos/']")];
for(const video of vidElems){
 const clip=video.closest(".clip");if(!clip||clip.closest(".archive-clip"))continue;
 const details=document.createElement("details");details.className="archive-clip";
 const summary=document.createElement("summary");summary.textContent="Dodatkowa animacja (archiwalna, skrótowa) — rozwiń opcjonalnie";
 clip.parentElement.insertBefore(details,clip);details.append(summary,clip);
 const help=document.createElement("p");
 help.textContent="Ta stara animacja jest tylko ilustracją. Pełne wyjaśnienie krok po kroku, definicje i ćwiczenia znajdziesz w rozdziałach poniżej.";
 help.className="course-note";details.append(help);
}
document.documentElement.dataset.courseEnriched="yes";
console.info("Academy enhancement: "+translations+" lesson glossaries, "+tables+" tables, "+vidElems.length+" archived clips");
})();