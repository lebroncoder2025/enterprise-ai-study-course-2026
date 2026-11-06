# QA — 6 listopada 2026

- 11/11 lekcji zbudowanych z plików Markdown i dostępnych z nawigacji.
- 30 pytań; natychmiastowy feedback i zapis odpowiedzi lokalnie.
- Konfigurator: pola Instructions / Knowledge / Tools / Channels / approval, generowanie konfiguracji i eksport markdown.
- Symulator: stały flow, Topic, dynamiczny agent, autonomous event-driven; zmiana trybu zmienia ślad.
- Kompozytor: stałe instructions + pytanie + retrieval context; ostrzeżenie prompt injection.
- Interfejs: desktop 1365px i telefon 390px, bez błędów JavaScript i bez poziomego overflow w lekcji Copilot Studio.
- Oficjalne screenshoty mają atrybucję i link źródłowy; pobierane są z domen producentów. W środowisku testowym nie udało się załadować ich przez sieć, więc przewidziano komunikat awaryjny. Nie są zapisane w ZIP.
- Przy testowaniu w przeglądarce z ograniczeniami dostępu do plików zastosowano samowystarczalną wersję HTML wczytaną bez serwera. Sam proces publikacji agenta do prawdziwego tenantu Microsoft **nie był testowany**, bo wymaga konta i konfiguracji firmowej.


## Enterprise screen gallery - 7 November 2026

- 17 interactive product mockups: Foundry, Azure Portal, AI Search, Copilot Studio, Power BI, Azure DevOps, ServiceNow, Copilot/Codex, Kneat/GxP, Entra/API Management, Azure Monitor, Azure ML, GitHub Actions, SharePoint, Purview and API Management.
- Checked every tab at 1440px and 390px: no horizontal overflow and no JavaScript errors.
- Exported a local PNG preview for each panel; open `PODGLAD_SCREENS/index.html` for the offline gallery.
- All numbers and environment names are fictional; linked official docs are the source for current product behavior.
