(() => {
  'use strict';
  document.querySelectorAll('[data-workiq-check]').forEach(button => {
    button.addEventListener('click', () => {
      const form = button.closest('.workiq-mini-quiz');
      const questions = [...form.querySelectorAll('fieldset[data-answer]')];
      let score = 0;
      const explanations = [];
      questions.forEach((question, index) => {
        const selected = question.querySelector('input[type="radio"]:checked');
        const correct = selected?.value === question.dataset.answer;
        if (correct) score++;
        explanations.push(`${index + 1}. ${correct ? 'Dobrze' : 'Sprawdź'} — ${question.dataset.explanation}`);
      });
      const output = form.querySelector('[data-workiq-feedback]');
      if (output) output.textContent = `Wynik: ${score}/${questions.length}. ${explanations.join(' ')}`;
    });
  });
})();
