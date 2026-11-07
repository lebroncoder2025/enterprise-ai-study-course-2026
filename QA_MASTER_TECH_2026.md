# Kontrola jako?ci ? Enterprise AI Master GenAI Prompt 2026

## Zawarto?? aktywnego wydania
- 48 lekcji, 132 pytania z obja?nieniami, 14 laboratori?w oraz 156 hase? s?ownika.
- 17 edukacyjnych makiet ekran?w z lokaln? galeri? PNG oraz 12 kr?tkich polskich animacji offline.
- Zachowano granatowo-turkusow? stylistyk? paczki ?r?d?owej. Portal prowadzi do pe?nej akademii, wersji jednoplikowej, kursu bazowego, laboratori?w, galerii i sprintu.
- Uzupe?niono multimodalne GenAI oraz ewaluacj? agenta uwzgl?dniaj?c? zar?wno ko?cowy wynik, jak i przebieg u?ycia narz?dzi.

## Kontrole wykonane na aktywnym folderze i ZIP
- Chromium: portal, akademia, akademia jednoplikowa, sprint, kurs zaawansowany, makiety i galeria.
- Szeroko?ci 320, 360, 390, 430, 768, 1024 i 1440 px: brak poziomego przepe?nienia w sprawdzonych widokach.
- Akademia: 48 kart; trasy lekcji 30 i 42 otwieraj? tre?ci uzupe?niaj?ce; quiz zg?asza 132 pytania.
- Galeria ?aduje 17/17 obraz?w; w sprawdzonych widokach brak wyj?tk?w JavaScript.
- Zrzuty ekranu portalu i akademii od?wie?one; mobilny podgl?d zapisany jako widok 390 ? 844 px.
- ZIP sprawdzony `testzip()` i zgodno?ci? liczby plik?w z aktywnym folderem.
- Prywatny ZIP ?r?d?owy zachowany w `Resources/Archive/2026-11-07`; poprzedni aktywny wariant TECH r?wnie? zarchiwizowany przed usuni?ciem z `Preparation`.

## Ograniczenia
- Nie testowano po??czenia z rzeczywistym tenantem Microsoft ani wdro?enia Azure, Foundry czy Copilot Studio.
- Linki do dokumentacji i wideo wydawc?w wymagaj? internetu i mog? zmienia? si? niezale?nie od kursu; w?asne animacje s? dost?pne lokalnie.
- Symulacje s? edukacyjne i nie zast?puj? test?w bezpiecze?stwa, walidacji GxP ani ewaluacji produkcyjnej.

## ?r?d?a techniczne
- Microsoft Foundry ? evaluation overview: https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-overview
- Microsoft Foundry ? agent evaluators: https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators
- Microsoft Foundry ? vision models: https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/gpt-with-vision
- Microsoft Foundry ? evaluate generative AI applications: https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluate-generative-ai-app
