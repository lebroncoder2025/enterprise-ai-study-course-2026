(()=>{"use strict";
const supplemental={
 prompty:["Instrukcje i stały kontekst","Słownik pojęć: prompt, agent, runtime i kontekst","Słownik MASTER: podstawowe pojęcia AI/ML/GenAI"],
 produkcja:["Evals, GxP, SOX i produkcja","MLOps/LLMOps i obserwowalność od podstaw","Enterprise governance: GxP, SOX, audyt i bezpieczeństwo"]
};
const modules=[...document.querySelectorAll(".course-module[data-module]")];
let sessionNo=0,coreCount=0,extraCount=0;
for(const module of modules){
 const key=module.dataset.module,holder=module.querySelector(".sublessons");
 if(!holder)continue;
 const lessons=[...holder.children].filter(el=>el.matches("details.sublesson"));
 if(!lessons.length)continue;
 const extras=[],core=[];
 for(const lesson of lessons){
  const name=lesson.querySelector(".sub-name")?.textContent?.trim()||"";
  if((supplemental[key]||[]).includes(name)){extras.push(lesson);extraCount++}
  else{core.push(lesson);coreCount++}
 }
 const section=document.createElement("div");section.className="lc-sessions";
 for(let i=0;i<core.length;i+=2){
  const pair=core.slice(i,i+2),session=document.createElement("section");
  session.className="lc-session";sessionNo++;
  const heading=document.createElement("h3");heading.className="lc-session-heading";
  heading.textContent="Etap "+String(sessionNo).padStart(2,"0")+" · "+pair.map(x=>x.querySelector(".sub-name")?.textContent?.trim()).join(" + ");
  session.append(heading);
  const intro=document.createElement("p");intro.className="lc-session-intro";
  intro.textContent="Jeden etap nauki, "+pair.length+" "+(pair.length===1?"temat":"powiązane tematy")+". Otwórz temat, poznaj przykład i wykonaj ćwiczenie.";
  session.append(intro);
  pair.forEach(d=>{d.open=false;session.append(d)});
  section.append(session);
 }
 holder.prepend(section);
 if(extras.length){
  const more=document.createElement("details");more.className="lc-supplemental";
  const summary=document.createElement("summary");summary.textContent="Materiały uzupełniające · "+extras.length+" tematy (powtórzenia i słowniki)";
  const explain=document.createElement("p");explain.textContent="Te treści pozostają dostępne, ale nie przerywają głównej ścieżki. Wróć do nich, gdy potrzebujesz przypomnienia lub szczegółów.";
  more.append(summary,explain);extras.forEach(d=>{d.open=false;more.append(d)});holder.append(more);
 }
 const counter=module.querySelector(".module-counter");
 if(counter)counter.textContent=Math.ceil(core.length/2)+" etapów nauki · "+core.length+" tematów podstawowych"+(extras.length?" · "+extras.length+" uzupełniające":"");
}
// Zachowaj wszystkie 52 identyfikatory i dotychczasowy postęp, ale pokazuj krótszą ścieżkę.
const start=document.querySelector("#view-start");
if(start){
 const lead=start.querySelector(".hero .lead");
 if(lead)lead.textContent="Praktyczna ścieżka Enterprise AI: "+sessionNo+" krótkich etapów w 10 działach. Każdy etap łączy powiązane zagadnienia, bez powtarzania tych samych definicji. Wszystkie 52 tematy i materiały szczegółowe nadal są dostępne.";
 const h=start.querySelector(".study-guide h2");
 if(h)h.textContent="Jak uczyć się w "+sessionNo+" etapach";
 start.querySelectorAll(".curriculum-grid .module-card").forEach(card=>{
  const link=card.getAttribute("href")||"",key=link.split("/").pop(),module=document.querySelector('[data-module="'+key+'"]');
  const count=module?.querySelectorAll(".lc-session").length,tag=card.querySelector("span");
  if(count&&tag)tag.textContent=tag.textContent.replace(/\d+ lekcj\w*/i,count+" etapów");
 });
 const note=start.querySelector(".course-order-note p");
 if(note)note.textContent="Przechodź przez "+sessionNo+" etapów w 10 działach. Powiązane tematy są razem; dodatkowe słowniki i powtórki przeniesiono do materiałów uzupełniających. Laboratoria i quizy pozostają dostępne.";
}
document.querySelectorAll(".rail .nav-item em").forEach(el=>{
 const btn=el.closest("[data-target]"),key=btn?.dataset.target;
 const module=key&&document.querySelector('[data-module="'+key+'"]');
 const n=module?.querySelectorAll(".lc-session").length;
 if(n)el.textContent=n+" etap.";
});
function revealHash(){
 const hash=decodeURIComponent(location.hash||"");
 const id=hash.split("/").pop();
 if(!id)return;
 const lesson=document.getElementById("lesson-"+id);
 if(!lesson)return;
 const more=lesson.closest(".lc-supplemental");
 if(more)more.open=true;
 lesson.open=true;
}
addEventListener("hashchange",revealHash);revealHash();
document.documentElement.dataset.compactSessions=String(sessionNo);
})();