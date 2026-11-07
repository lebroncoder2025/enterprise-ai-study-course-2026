(() => {
  'use strict';
  const input = document.getElementById('course-search');
  const results = document.getElementById('search-results');
  if (!input || !results) return;
  const topics = [
    { id: 'infra-api', title: 'API — żądanie HTTP i połączenie backendu z AI', words: ['api','endpoint','http','rest','backend','status','401','403','json'] },
    { id: 'infra-mcp', title: 'MCP — host, klient, serwer i narzędzia', words: ['mcp','model context protocol','host','server','serwer mcp','tool','tools'] },
    { id: 'infra-azure', title: 'Azure — usługi i połączenia w architekturze', words: ['azure','app service','entra','key vault','search','foundry','blob'] },
    { id: 'infra-case', title: 'Praktyka — formularz, plik i odpowiedź aplikacji', words: ['plik','upload','formularz','multipart','dokument','csv','pdf','docx'] },
    { id: 'infra-ops', title: 'Infrastruktura — sieć, prywatność i operacje', words: ['infrastruktura','sieć','private endpoint','monitoring','log','vnet','dns'] }
    ,{ id: 'work-iq-learning', title: 'Work IQ \u2014 kontekst pracy, Work IQ API i agenci', words: ['work iq','workiq','kontekst pracy','workplace intelligence','microsoft graph','copilot work data'], route: '#/lekcja/agenci/02-studio' }
  ];
  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      results.querySelectorAll('[data-infra-search-result]').forEach(node => node.remove());
      const term = input.value.trim().toLocaleLowerCase('pl');
      if (term.length < 2) return;
      const matches = topics.filter(topic => topic.words.some(word => word.includes(term) || term.includes(word)));
      for (const topic of matches) {
        const link = document.createElement('a');
        link.href = topic.route || '#/lekcja/rag-azure/10-azure';
        link.dataset.infraSearchResult = topic.id;
        link.dataset.courseRoute = topic.route || '#/lekcja/rag-azure/10-azure';
        link.textContent = 'Temat praktyczny › ' + topic.title;
        results.append(link);
      }
    }, 30);
  });
  results.addEventListener('click', event => {
    const link = event.target.closest('[data-infra-search-result]');
    if (!link) return;
    event.preventDefault();
    const targetId = link.dataset.infraSearchResult;
    location.hash = link.dataset.courseRoute || '#/lekcja/rag-azure/10-azure';
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;
      for (let node = target; node; node = node.parentElement) {
        if (node.tagName === 'DETAILS') node.open = true;
      }
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.querySelector('summary')?.focus({ preventScroll: true });
    }, 220);
  });
})();
