# 08 · ChatGPT i Claude.ai — projekty, pliki, instrukcje i różnica względem API

> Chat w przeglądarce to gotowa aplikacja. Modele przez API to usługa bazowa. **Własna aplikacja nie dziedziczy automatycznie prywatnych projektów, narzędzi ani ustawień użytkownika z portalu ChatGPT/Claude.**

## ChatGPT — jak wykorzystać go do prawdziwej pracy?

**Przykład:** analizujesz dokumentację architektury firmy i chcesz oddzielić fakty od hipotez. Tworzysz Projekt, umieszczasz dozwolone pliki, zapisujesz instrukcje projektu i prowadzisz rozmowy. Kontekst projektu może pomóc utrzymać stałą terminologię; nie jest jednak gwarancją, że każdy dokument zawsze znajdzie się w kontekście w całości.

**Stały kontekst:** otwórz projekt → menu `•••` → **Project settings** → wpisz instrukcje projektu, np. „Odwołuj się do źródeł. Gdy brak danych, powiedz, czego brakuje. Odpowiadaj po polsku”. Według aktualnej dokumentacji instrukcje projektu obowiązują w jego zakresie i zastępują globalne custom instructions w tym projekcie. Dostępność innych funkcji zależy od planu oraz polityk workspace.

**Ważne:** „Projekt”, „instrukcje niestandardowe”, „pamięć”, „narzędzia”, „własny GPT”, „aplikacje/łączniki” i „API” to odrębne funkcje. Nie wolno zakładać, że każdy użytkownik ma identyczny zestaw.

## Claude.ai — podobny cel, osobna implementacja

**Projekty Claude** organizują czaty, pliki i instrukcje. W projekcie znajdziesz **Project Knowledge** (dokumenty) i **Set project instructions** (trwałe zachowanie). Możesz nadać zadanie: „Wszystkie odpowiedzi o wymaganiach oddzielaj od the learneromendacji; cytuj źródła”. Wiedza projektu nie jest automatycznie wspólną historią wszystkich oddzielnych czatów — mechanizmy pamięci i projektów mogą działać inaczej niż załączniki.

**Claude.ai ≠ Claude Code:** przeglądarkowy chat nie powinien być automatycznie traktowany jak agent, który potrafi wykonać operacje na lokalnym repozytorium. Claude Code jest do tego wyspecjalizowaną powierzchnią, posiadającą własne pliki `CLAUDE.md` i uprawnienia.

## Różnice między interfejsem chat a własnym API

| Własność | ChatGPT/Claude.ai | Własne API w Flask |
|---|---|---|
| UI | Dostarcza producent | Budujesz sam |
| Historie/projekty | Mechanizmy platformy | Sam przechowujesz i filtrujesz |
| System/developer instructions | Częściowo przez projekty i konfigurację | Definiujesz w żądaniach i aplikacji |
| Search/RAG | W wybranych narzędziach platformy | Łączysz z Azure AI Search lub własnym retrieverem |
| Narzędzia | Zależą od planu, produktu i podłączonych usług | Zdefiniowane przez Twój backend/harness |
| Tożsamość i dostęp | Logowanie usługi | Np. Entra ID / własne middleware |
| Evals i monitoring | Zależnie od funkcji produktu | Twój obowiązek produkcyjny |

## Dlaczego model może odpowiedzieć inaczej w dwóch produktach?

Nawet jeśli bazowy model jest podobny, **harness**, instrukcje, temperatura/ustawienia, historia, wyniki wyszukiwania i dostępne narzędzia mogą być różne. Dwa czaty nie muszą wygenerować identycznego tekstu. Do rzetelnego porównania mierz te same przypadki i te same kryteria.

### Oryginalny screenshot ChatGPT Projects

<figure class="official-shot"><img loading="lazy" src="https://images.ctfassets.net/j22is2dtoxu1/intercom-img-dfd7518cb9b5ab4588cb814d/6ca9c53aec99d74eda875f16468276a2/Screenshot_2026-02-24_at_11.48.11%C3%A2__AM.png?fm=webp&amp;q=80&amp;w=1344" alt="Zrzut z Help Center OpenAI — projekt ChatGPT i ustawienia projektu"/><figcaption>OpenAI Help Center — „Projects in ChatGPT”, menu projektu. Wymaga internetu. <a href="https://help.openai.com/en/articles/10169521-projects-in-chatgpt" target="_blank" rel="noopener noreferrer">Oficjalny artykuł ↗</a></figcaption></figure>

## Ćwiczenie: jeden cel, trzy konfiguracje

**Cel:** odpowiedzi o architekturze internal process assistant wyłącznie z dokumentacji projektu.

- **ChatGPT Project:** instrukcja projektu + dozwolone pliki jako źródła.
- **Claude Project:** Project Knowledge + Set project instructions.
- **Własny Flask + Azure Search + LLM:** stała instrukcja backendu + retrieval tylko dozwolonych dokumentów + weryfikacja cytatów + logi i testy.

W żadnym wariancie nie zakładaj automatycznego spełnienia ograniczeń bezpieczeństwa wyłącznie na podstawie promptu.

Źródła: [ChatGPT Projects](https://help.openai.com/en/articles/10169521-projects-in-chatgpt), [Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects), [OpenAI API Agents](https://developers.openai.com/api/docs/guides/agents).
