# Governance, GxP, SOX, PII i Human-in-the-Loop

> **Governance to kontrola całego cyklu życia AI**, a nie pojedynczy filtr treści na końcu. Decyduje o przeznaczeniu, właścicielu, ryzyku, danych, kontrolach, dowodach i odpowiedzialności.

## GxP a SOX — inny cel, wspólna dyscyplina
**GxP** oznacza zasady dobrej praktyki w regulowanych procesach farmaceutycznych (np. GMP, GCP, GLP). **CSV / Computer System Validation** dotyczy udokumentowanego potwierdzenia, że system realizuje zamierzone zastosowanie. **SOX** skupia się m.in. na kontrolach wewnętrznych istotnych dla raportowania finansowego; nie jest podtypem GxP. **ITGC** obejmują np. dostęp, zmiany i operacje IT. Wymagany zakres kontroli zależy od zastosowania i klasyfikacji systemu.

## Data Integrity
**ALCOA+** to praktyczny skrót jakości zapisów: attributable, legible, contemporaneous, original, accurate, a dodatkowe zasady obejmują m.in. kompletność, spójność, trwałość i dostępność. AI nie powinno „dopowiadać” brakujących dowodów tylko dlatego, że brzmi to wiarygodnie.

## PII, prywatność i dostęp
**PII** to dane identyfikujące osobę; w UE stosujesz również pojęcia i wymagania **RODO/GDPR**. **Authentication** potwierdza tożsamość, **authorization** sprawdza dozwoloną operację. Entra SSO nie daje automatycznie prawa do każdego pliku SharePoint. Logi, wektory i dokumenty wymagają osobnej polityki retencji i dostępu.

## Fairness i explainability
**Bias** może pojawić się w danych, etykietowaniu, promptach i procesie decyzyjnym. **Fairness** wymaga zdefiniowania, wobec kogo i według jakiej miary oceniamy nierówne skutki. **Explainability** pomaga zrozumieć podstawę decyzji, ale wyjaśnienie wygenerowane przez LLM nie zawsze jest wiernym zapisem mechanizmu modelu.

## Human-in-the-Loop
Przegląd człowieka powinien być **realnym punktem kontroli**: kto może zatwierdzić, co widzi, jaki ma czas, czy może odrzucić i gdzie zapisuje się decyzję. „Agent napisze: zatwierdź” bez egzekwowania approval w backendzie nie wystarcza.

**Związek z enterprise environment:** governance, guardrails, fairness, explainability, privacy oraz pharma/GxP są literalnie wymienione w ogłoszeniu. Nie należy twierdzić, że firma używa konkretnego przepływu bez źródła.
