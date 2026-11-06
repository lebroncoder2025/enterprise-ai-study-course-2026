# 09 · Microsoft 365 Copilot — jak działa z danymi firmy i czym różni się od Copilot Studio

> **Microsoft 365 Copilot jest interfejsem pracy z danymi M365**, a Copilot Studio służy do konfigurowania i wdrażania wyspecjalizowanych agentów. Oba produkty mogą współpracować, ale nie są tym samym.

## Co dzieje się po pytaniu?

Przykład: „Podsumuj najważniejsze ustalenia spotkania dotyczącego upgrade’u aplikacji”. W odpowiednio skonfigurowanej usłudze Copilot może wykorzystać dostępny użytkownikowi kontekst z Teams, Outlooka, dokumentów i innych obszarów M365. Warstwa wyszukiwania i ugruntowania danych **grounding** pobiera kontekst; LLM formułuje odpowiedź. To nie jest koniecznie fine-tuning modelu na danych Twojej firmy.

**Uprawnienia:** platforma ma respektować istniejące ACL/Microsoft 365 permissions. To szczególnie istotne, gdy pliki są udostępnione zbyt szeroko — Copilot nie naprawi złego modelu uprawnień w SharePoint.

## Microsoft 365 Copilot a zwykły Microsoft Copilot

Nazwa „Copilot” bywa używana w wielu produktach: konsumenckim chacie, Copilot Chat w organizacji, rozszerzonym Microsoft 365 Copilot, GitHub Copilot i Copilot Studio. **Nie wyciągaj wniosków o dostępie do służbowych danych po samej nazwie ikony.** W 2026 Microsoft opisuje mechanizm Work IQ do wykorzystania kontekstu służbowego tam, gdzie pozwalają licencja i konfiguracja.

## Gdzie pojawia się agent z Copilot Studio?

Tworzysz agenta w Copilot Studio, dodajesz wiedzę i narzędzia, publikujesz wersję, konfigurujesz kanał **Teams / Microsoft 365 Copilot**, a potem udostępniasz odpowiednim użytkownikom. Współpracownik może wybrać lub wywołać agenta w środowisku Microsoft 365, jeśli został udostępniony i spełnione są wymagania uprawnień. Samo stworzenie agenta nie publikuje go wszystkim.

## Praktyczne przykłady

**Przykład A, chat M365:** „Porównaj notatki z dwóch spotkań i znajdź otwarte punkty” — potrzebny dostęp do właściwych spotkań/plików.

**Przykład B, dedykowany agent Studio:** „Sprawdź status zgłoszenia w ServiceNow i przygotuj streszczenie z procedurą” — potrzebna integracja z systemem, odpowiednie scopes i policy checks.

**Przykład C, kod:** „Napisz nowy skrypt Python do analizy zgłoszeń” — do zmian w repo wygodniejszy może być coding agent niż sam chat M365.

## Niebezpieczna pułapka

„Wszystko jest w firmowym tenantcie, więc odpowiedź jest na pewno poprawna”. **Nie.** Kontrola dostępu i jakość odpowiedzi to osobne własności. Nadal oceniasz citation accuracy, data freshness, hallucinations i koszt.

Źródła: [Microsoft: skąd Copilot bierze informacje](https://support.microsoft.com/en-us/microsoft-365-copilot/what-information-does-copilot-use-to-answer-my-prompt), [Copilot Chat: licencje i dostęp](https://support.microsoft.com/en-us/microsoft-365-copilot/how-copilot-chat-works-with-and-without-a-microsoft-365-copilot-license), [Publikacja agenta](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams).
