# Kontrola jakości — Enterprise AI Master GenAI Prompt 2026

## Zawartość aktywnego wydania
- 48 lekcji, 132 pytania z objaśnieniami, 14 laboratoriów oraz 156 haseł słownika.
- 17 edukacyjnych makiet ekranów z lokalną galerią PNG oraz 12 krótkich polskich animacji offline.
- Zachowano granatowo-turkusową stylistykę paczki źródłowej. Portal prowadzi do pełnej akademii, wersji jednoplikowej, kursu bazowego, laboratoriów, galerii i sprintu.
- Uzupełniono multimodalne GenAI oraz ewaluację agenta uwzględniającą zarówno końcowy wynik, jak i przebieg użycia narzędzi.

## Kontrole wykonane na aktywnym folderze i ZIP
- Chromium: portal, akademia, akademia jednoplikowa, sprint, kurs zaawansowany, makiety i galeria.
- Szerokości 320, 360, 390, 430, 768, 1024 i 1440 px: brak poziomego przepełnienia w sprawdzonych widokach.
- Akademia: 48 kart; trasy lekcji 30 i 42 otwierają treści uzupełniające; quiz zgłasza 132 pytania.
- Galeria ładuje 17/17 obrazów; w sprawdzonych widokach brak wyjątków JavaScript.
- Zrzuty ekranu portalu i akademii odświeżone; mobilny podgląd zapisany jako widok 390 × 844 px.
- ZIP sprawdzony `testzip()` i zgodnością liczby plików z aktywnym folderem.
- Prywatny ZIP źródłowy zachowany w `Resources/Archive/2026-11-07`; poprzedni aktywny wariant TECH również zarchiwizowany przed usunięciem z `Preparation`.

## Ograniczenia
- Nie testowano połączenia z rzeczywistym tenantem Microsoft ani wdrożenia Azure, Foundry czy Copilot Studio.
- Linki do dokumentacji i wideo wydawców wymagają internetu i mogą zmieniać się niezależnie od kursu; własne animacje są dostępne lokalnie.
- Symulacje są edukacyjne i nie zastępują testów bezpieczeństwa, walidacji GxP ani ewaluacji produkcyjnej.

## Źródła techniczne
- Microsoft Foundry — evaluation overview: https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-overview
- Microsoft Foundry — agent evaluators: https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators
- Microsoft Foundry — vision models: https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/gpt-with-vision
- Microsoft Foundry — evaluate generative AI applications: https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluate-generative-ai-app
