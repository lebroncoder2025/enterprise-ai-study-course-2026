(() => {
  'use strict';
  const key = 'enterprise_ai_unified_v1';
  const format = 'enterprise-ai-academy-progress';
  const $ = id => document.getElementById(id);
  const status = message => { const node = $('progress-transfer-status'); if (node) node.textContent = message; };
  function readState() {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch { return {}; }
  }
  function download(name, value) {
    const blob = new Blob([JSON.stringify(value, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = name;
    document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1500);
  }
  const exportButton = $('export-progress');
  const chooseButton = $('choose-progress-import');
  const fileInput = $('progress-import-file');
  exportButton?.addEventListener('click', () => {
    try {
      const state = readState();
      download('enterprise-ai-academy-progress.json', {
        format, version: 1, exportedAt: new Date().toISOString(), state
      });
      status('Plik został pobrany. Przenieś go na drugie urządzenie, a tam wybierz „Importuj postęp”.');
    } catch {
      status('Nie udało się odczytać postępu tej przeglądarki.');
    }
  });
  chooseButton?.addEventListener('click', () => fileInput?.click());
  fileInput?.addEventListener('change', async () => {
    const file = fileInput.files?.[0]; if (!file) return;
    try {
      if (file.size > 2_000_000) throw new Error('Plik jest większy niż 2 MB.');
      const payload = JSON.parse(await file.text());
      if (payload?.format !== format || payload?.version !== 1 || !payload.state || typeof payload.state !== 'object') {
        throw new Error('To nie jest plik postępu tej akademii.');
      }
      const incoming = payload.state;
      const current = readState();
      const merge = (name, validate = () => true) => {
        const a = incoming[name] && typeof incoming[name] === 'object' && !Array.isArray(incoming[name]) ? incoming[name] : {};
        const b = current[name] && typeof current[name] === 'object' && !Array.isArray(current[name]) ? current[name] : {};
        return Object.fromEntries(Object.entries({ ...a, ...b }).filter(([k, v]) => validate(k, v)));
      };
      const merged = {
        ...incoming, ...current,
        done: Object.fromEntries([...new Set([...Object.keys(incoming.done || {}), ...Object.keys(current.done || {})])].filter(k => incoming.done?.[k] === true || current.done?.[k] === true).map(k => [k, true])),
        qa: merge('qa', (k, v) => typeof k === 'string' && Number.isInteger(v) && v >= 0 && v <= 4),
        notes: merge('notes', (k, v) => typeof k === 'string' && typeof v === 'string'),
        builder: Object.keys(current.builder || {}).length ? current.builder : (incoming.builder || {})
      };
      localStorage.setItem(key, JSON.stringify(merged));
      status('Postęp połączony. Odświeżam kurs…');
      setTimeout(() => location.reload(), 500);
    } catch (error) {
      status(error?.message || 'Nie udało się zaimportować pliku.');
    } finally { fileInput.value = ''; }
  });
})();
