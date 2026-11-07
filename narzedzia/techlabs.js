/* Enterprise AI Master technical labs — calculations run entirely inside this browser.
 * Educational simulations, not calls to Microsoft / cloud services. */
(()=>{'use strict';
 const $=id=>document.getElementById(id);
 const num=(id,def=0)=>{const x=Number($(id)?.value);return Number.isFinite(x)?x:def};
 const fmt=(x,d=5)=>Number.isFinite(x)?x.toFixed(d):'—';
 function gd(){let w=num('gdW',.3),lr=num('gdLR',.1),steps=Math.floor(num('gdSteps',8)); const xs=[1,2,3],ys=[2,4,6],rows=[];
  for(let k=0;k<steps;k++){let loss=0,g=0;for(let i=0;i<3;i++){const err=w*xs[i]-ys[i];loss+=err*err/3;g+=2*err*xs[i]/3;}rows.push({step:k+1,w,loss,g});w-=lr*g;if(!Number.isFinite(w)||Math.abs(w)>1e12)break;}
  let final=xs.reduce((a,x,i)=>a+(w*x-ys[i])**2,0)/3;
  $('gdStepCount').textContent=steps;
  $('gdOut').textContent=`DATASET: (1→2), (2→4), (3→6)\nŷ=w*x; loss = mean((ŷ-y)²)\n\n${rows.slice(0,18).map(r=>`step ${String(r.step).padStart(2)} | w=${fmt(r.w,6)} | dL/dw=${fmt(r.g,5)} | loss=${fmt(r.loss,5)}`).join('\n')}${rows.length>18?'\n… kolejne kroki pominięte w podglądzie':''}\n\nWYNIK: w=${fmt(w,6)} · końcowy loss=${fmt(final,6)}\n${!Number.isFinite(final)||final>100?'Uwaga: rozbieżność! Learning rate jest zbyt duży albo model niestabilny.':final<0.01?'Waga jest bliska docelowej wartości 2.':'Porównaj wynik z dłuższym uczeniem i innym learning rate.'}`;
 }
 function lora(){const d=num('loraD',4096),r=num('loraR',8),full=d*d,train=2*d*r,ratio=full/train;
 $('loraOut').textContent=`Dla JEDNEJ macierzy W o kształcie ${d}×${d}:\nFull FT: ${full.toLocaleString('pl-PL')} aktualizowanych parametrów\nLoRA rank=${r}: A=${r}×${d}; B=${d}×${r}\nAdapter: ${train.toLocaleString('pl-PL')} trenowanych parametrów\n${fmt(ratio,2)}× mniej aktualizowanych elementów tej macierzy\nOdsetek: ${fmt(train/full*100,4)}%\n\nPamiętaj: w całym LLM wiele macierzy i pamięć na aktywacje!`;
 }
 function mem(){const b=num('memParams',7),bytes=num('memType',2);const min=b*bytes;const bits=bytes*8;
 $('memOut').textContent=`Parametry modelu: ${fmt(b,2)} mld\nFormat: ${bits} bit/parametr\nMinimum rozmiaru SAMYCH WAG: ~${fmt(min,2)} GB dziesiętnych\nSamo przechowywanie wag ≠ wymagania RAM/VRAM.\n\nDodatkowo w inferencji: KV-cache, aktywacje, struktury runtime, overhead kwantyzacji.\nDodatkowo w treningu: gradienty, stany optymalizatora, aktywacje, checkpointy.\n\nPrzykład: 7B w 4-bit = 3.5 GB idealne minimum wag; praktyczny rozmiar większy.`;
 }
 const cases={
 normal:['Otrzymano pytanie','Zweryfikowano Entra claims i zakres danych','Wywołano Search API z filtrem ACL','LLM wygenerował odpowiedź z cytowaniami','Zapisano spans i zakończono bez zapisu'],
 timeout:['Otrzymano request','Search API przekroczyło timeout 3s','Sprawdzono limit retry i status niepowodzenia','Zwrócono odpowiedź o niedostępności źródeł','Zalogowano incydent'],
 duplicate:['Otrzymano prośbę o zapis','Tool otrzymał request z idempotency key','Przyszedł identyczny retry','Backend wykrył powtórzenie','Nie wykonano drugiego zapisu; approval pozostaje wymagane'],
 inject:['Search zwrócił fragment dokumentu','W treści znaleziono próbę zmiany instrukcji','Traktujemy źródło jako dane o niskim zaufaniu','Nie wywołujemy nieautoryzowanego toola','Zwrócono wyłącznie odpowiedź opartą na zweryfikowanym kontekście'],
 loop:['Model ponawia Search','Kolejna próba powtarza wcześniejsze wyniki','Licznik kroków dochodzi do limitu','Przerwany agent; eskalacja / abstention','Trace pokazuje powód zatrzymania']
 };
 function agent(){const k=$('agentCase').value,guard=$('agentGuard').value==='on';let arr=cases[k]; if(!guard){arr={
 normal:['Request','Wywołano wyszukiwanie bez ACL','Odpowiedź wygenerowana bez sprawdzenia źródeł'],
 timeout:['Request','Search API nie odpowiada','Brak timeoutu → użytkownik czeka, narastają zasoby'],
 duplicate:['Żądanie zapisu','Ponowienie bez idempotency key','Ten sam efekt uboczny wykonany dwa razy'],
 inject:['Pobrano tekst','Model uznał instrukcje PDF za swoje instrukcje','Potencjalne ujawnienie danych / wywołanie narzędzia'],
 loop:['Search','Search','Search','Brak warunku zatrzymania → koszty rosną']
 }[k];}
 $('agentTrace').innerHTML=arr.map((s,i)=>`<div class="step-card"><em>SPAN ${i+1}</em><div>${s.replaceAll('&','&amp;').replaceAll('<','&lt;')}</div></div>`).join('');
 $('agentResult').textContent=guard?'Przebieg z kontrolami: nadal trzeba przeprowadzić realne testy i wymusić polityki w backendzie.':'Przebieg bez zabezpieczeń: wykryte ryzyko. W prawdziwej aplikacji taki wariant nie powinien przejść release gate.';
 }
 function ev(){let tp=num('eTP'),fp=num('eFP'),fn=num('eFN'),tn=num('eTN');const p=tp+fp?tp/(tp+fp):0,r=tp+fn?tp/(tp+fn):0,a=tp+fp+fn+tn?(tp+tn)/(tp+fp+fn+tn):0,f=p+r?2*p*r/(p+r):0;
 $('evalOut').textContent=`Macierz: TP=${tp} FP=${fp} FN=${fn} TN=${tn}\n\nPrecision = TP / (TP+FP) = ${fmt(p*100,2)}%\nRecall    = TP / (TP+FN) = ${fmt(r*100,2)}%\nF1        = 2PR / (P+R) = ${fmt(f*100,2)}%\nAccuracy  = (TP+TN) / całość = ${fmt(a*100,2)}%\n\nFalse negatives (${fn}) są często szczególnie ważne w detekcji istotnych zdarzeń — zależy to od kosztu błędu.`;
 }
 function gate(){const ids=['gateData','gateEval','gateSafety','gateApprove','gateTrace','gateCanary'];let off=ids.filter(x=>!$(x).checked);
 $('gateOut').textContent=off.length?'HOLD — nie wdrażaj: '+off.map(x=>({'gateData':'brak lineage','gateEval':'brak testów regresyjnych','gateSafety':'brak testów bezpieczeństwa','gateApprove':'brak approval','gateTrace':'brak monitoringu i rollback','gateCanary':'brak kontrolowanego rollout'}[x])).join('; '):'READY FOR FORMAL REVIEW — warunki ilustracyjnego gate spełnione. Rzeczywista decyzja wymaga zatwierdzenia przez odpowiedzialny zespół.';
 }
 function init(){
  const watch={gd:['gdW','gdLR','gdSteps'],lora:['loraD','loraR'],mem:['memParams','memType'],agent:['agentCase','agentGuard'],ev:['eTP','eFP','eFN','eTN'],gate:['gateData','gateEval','gateSafety','gateApprove','gateTrace','gateCanary']};
  for(const [name,ids] of Object.entries(watch)){const cb={gd,lora,mem,agent,ev,gate}[name];if(!ids.every(x=>$(x)))continue;ids.forEach(x=>{$(x).addEventListener('input',cb);$(x).addEventListener('change',cb)});cb()}
 }
 document.addEventListener('DOMContentLoaded',init);
})();
