(()=>{"use strict";
const moduleIds=["ai-ml","llm","prompty","rag-azure","fine-tuning","agenci","produkty","produkcja","gxp-sox"];
// Usuń wyłącznie nasze stare animacje i generowane filmy; nie usuwaj zewnętrznych filmów autorów.
document.querySelectorAll(".clip-grid,.narrated-mp4,.narrated-optional,.old-clip-folder").forEach(el=>el.remove());
document.querySelectorAll(".study-film,.study-video").forEach(el=>el.remove());
document.querySelectorAll("video[src*='assets/videos/guide-'],video[src*='assets/videos/rag.mp4'],video[src*='assets/videos/search.mp4'],video[src*='assets/videos/azure.mp4']").forEach(el=>{const parent=el.closest(".clip,.video-container,.video-panel");(parent||el).remove()});
// Nie powielaj wstępów w działach: pojedynczy przewodnik zamiast kilku identycznych podsumowań.
const rag=document.getElementById("view-rag-azure");
if(rag){
 const rebuilt=rag.querySelector("#rag-praktycznie"),infra=rag.querySelector("#infra-course"),index=rag.querySelector(".sublesson-index"),lessons=rag.querySelector(".sublessons");
 const header=rag.querySelector(".module-header");
 if(header){
  const counter=header.querySelector(".module-counter");
  if(counter)counter.textContent="1. RAG od podstaw → 2. API i Azure → 3. Praktyka i zaawansowane lekcje";
 }
 // Pojedyncza liniowa kolejność bez ukrytych duplikatów:
 // nagłówek → RAG → API/MCP/Azure → ćwiczenia → lekcje zaawansowane.
 if(rebuilt&&header)header.insertAdjacentElement("afterend",rebuilt);
 if(infra&&rebuilt)rebuilt.insertAdjacentElement("afterend",infra);
 const lab=rag.querySelector(".rag-lab,.rag-interactive,.rag-laboratory");
 if(lab&&infra)infra.insertAdjacentElement("afterend",lab);
 if(index&&infra)(lab||infra).insertAdjacentElement("afterend",index);
 if(lessons&&index)index.insertAdjacentElement("afterend",lessons);
 // Długie, powtarzające się rozpiski Azure zostają jako materiały zaawansowane,
 // ale są domyślnie zwinięte; nawigacja do lekcji nadal je otwiera.
 if(lessons){
  const label=document.createElement("p");label.className="rag-advanced-label";
  label.textContent="Dalej: lekcje pogłębiające Azure i Foundry. Rozwiń tylko interesujący Cię temat.";
  lessons.insertAdjacentElement("beforebegin",label);
  lessons.querySelectorAll("details.sublesson").forEach(d=>d.open=false);
 }
 // Jedyny wskazany film w sekcji RAG, widoczny od razu.
 rag.querySelectorAll("video,iframe[src*='youtube']").forEach(el=>{
  if(rebuilt?.contains(el))return;
  const block=el.closest(".curated-film,.study-video,.clip,.narrated-mp4,.video-container,.curated-video-library");
  if(block&&rag.contains(block))block.remove();else el.remove();
 });
 const player=rebuilt?.querySelector("#rag-player iframe");
 if(player)player.setAttribute("title","RAG — jedyny film w tym dziale");
}
// Usunięcie powtarzających się opisów „dokładne objaśnienie” w tych samych lekcjach.
// Zachowujemy główny materiał, quizy, notatki, tabele i ćwiczenia.
document.querySelectorAll(".sublesson-body").forEach(body=>{
 const deep=body.querySelectorAll(".deep-learning");
 deep.forEach(block=>{
  const heading=block.querySelector("h2");
  if(heading&&/Dokładne objaśnienie i przykład/i.test(heading.textContent||""))block.remove();
 });
});
// Uprość stronę startową: czytelna kolejność działów i bez odsyłaczy do starych animacji.
const start=document.getElementById("view-start");
if(start){
 start.querySelectorAll(".curated-landing-link,.infra-home-link").forEach(el=>el.remove());
 const hero=start.querySelector(".hero");
 if(hero&&!hero.querySelector(".course-order-note")){
  const note=document.createElement("div");note.className="course-order-note";
  note.innerHTML="<strong>Jak korzystać z kursu?</strong><p>Idź po kolei: podstawy AI i ML → LLM → prompty → RAG i Azure → fine-tuning → agenci → produkty → produkcja → bezpieczeństwo. W każdym dziale najpierw poznaj mechanizm, potem zrób ćwiczenie i quiz.</p>";
  hero.append(note);
 }
}
document.documentElement.dataset.courseCleanFlow="1";
})();