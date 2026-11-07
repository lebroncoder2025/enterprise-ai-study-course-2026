# Structured Outputs, JSON Schema i kontrakt API

> **Sedno:** tekst, który *wygląda* jak JSON, nie wystarcza. Aplikacja powinna wymagać obsługiwanego formatu strukturalnego, walidować schema i weryfikować poprawność biznesową danych.

## Dlaczego „zwróć JSON” bywa niewystarczające?
Model może zwrócić zły typ pola, brak przecinka, nieistniejącą kategorię lub wymyślony identyfikator. Parser JSON sprawdza **składnię**, schema sprawdza **kształt**, a logika biznesowa sprawdza **znaczenie**. To trzy różne etapy.

## Przykładowy kontrakt
```json
{
  "ticket_id": "Q-1024",
  "category": "documentation",
  "needs_human_review": true,
  "missing_fields": ["approved_sop_version"],
  "evidence": ["doc:quality-12#section-2"]
}
```
To **przykładowy wynik**, nie potwierdzona klasyfikacja enterprise environment. Zamiast swobodnego pola `category` możesz zdefiniować enum `system | process | documentation`. `ticket_id` powinno pochodzić z zaufanego źródła, nie z fantazji modelu.

## Walidacja i obsługa błędów
Aplikacja powinna: (1) wysłać instrukcję i odpowiedni format, (2) odebrać odpowiedź, (3) zwalidować typy i dozwolone wartości, (4) sprawdzić źródła/ACL, (5) wykonać deterministyczne reguły, (6) w razie błędu retry lub obsługę przez człowieka. **Temperature=0** nie gwarantuje pełnej deterministyczności ani poprawności biznesowej.

## Function calling vs structured output
**Structured output** ogranicza format odpowiedzi. **Tool/function calling** służy modelowi do wskazywania operacji wraz z argumentami; wykonanie obsługuje runtime. Jeżeli model proponuje `create_ticket`, backend powinien autoryzować i zwalidować tę operację, a czasem wymagać approval.

**Ćwiczenie:** dla trzech przypadków („brak źródła”, „zły numer SOP”, „brak uprawnień”) określ wynik walidacji i czy powinno dojść do zapisu do systemu.
