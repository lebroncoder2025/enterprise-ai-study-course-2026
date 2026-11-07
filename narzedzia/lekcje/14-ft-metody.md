# Fine-tuning: SFT, DPO, RFT i continued pretraining


> **W jednym zdaniu:** Fine-tuning oznacza dodatkowy trening modelu bazowego. Metody różnią się rodzajem sygnału treningowego, a nie tylko liczbą aktualizowanych wag.

## Cztery pytania zanim zaczniesz

**Czy potrzebujesz nowej wiedzy?** Jeśli dokumenty zmieniają się często i trzeba wskazywać źródła — zacznij od **RAG**. Jeśli chcesz stabilnie wymuszać format, ton, procedurę klasyfikacji lub zachowanie modelu — rozważ **SFT**. Jeśli chcesz poprawić preferowaną jakość odpowiedzi na parach „lepsza/gorsza” — **DPO**. Jeśli można mierzyć jakość rozwiązania automatycznym graderem i optymalizować wyniki — **RFT**.

## Metody według sygnału uczącego

| Metoda | Jakie dane przygotować | Co się optymalizuje | Dla jakiego celu |
|---|---|---|---|
| **SFT – Supervised Fine-Tuning** | `prompt → poprawna odpowiedź` | cross-entropy na docelowych tokenach | format JSON, klasyfikacja, instrukcje |
| **DPO – Direct Preference Optimization** | prompt + odpowiedź `chosen` + `rejected` | preferowanie `chosen` względem `rejected` z modelem referencyjnym | styl, użyteczność, preferencje |
| **RFT – Reinforcement Fine-Tuning** | prompt + mierzalny grader / reward | maksymalizacja sygnału jakości w procesie RL | zadania z ocenialnym rezultatem, np. poprawność |
| **Continued pretraining** | dużo surowego tekstu domenowego | przewidywanie tokenów na domenie | adaptacja języka/rozkładu domeny, zwykle kosztowna |

**Uwaga:** DPO i RFT nie są „bezgradientowe” — typowo nadal zmieniają parametry i wymagają optymalizacji. Metodę dostrajania wybierasz niezależnie od wyboru LoRA czy pełnego treningu (w zakresie zgodności narzędzi i modelu).

## Jak wyglądają dane SFT?

```json
{"messages": [
  {"role":"user","content":"Zwróć kategorię zgłoszenia: 'pompa zatrzymuje się'"},
  {"role":"assistant","content":"{"category":"equipment_failure"}"}
]}
```

To ilustracja — rzeczywisty format i obsługiwane role zależą od usługi i modelu. Przed treningiem potrzebujesz deduplikacji, ochrony PII i osobnego zbioru testowego. Sam przykład nie uczy modelu całej procedury GxP.

## Kiedy NIE robić fine-tuningu

- Nie masz bazowego benchmarku i error analysis.
- Odpowiedzi zależą od świeżych dokumentów i wersji SOP; wtedy RAG zwykle ma przewagę.
- Potrzebujesz wyłącznie krótkiego, stabilnego system promptu.
- Nie masz legalnej podstawy ani kontroli danych treningowych.
- Zamierzasz uzyskać gwarancję bezbłędności; fine-tuning jej nie zapewnia.

## Minimalny eksperyment

1. Golden set 100–300 przykładów (zakres zależny od zadania), odseparowany od treningu.
2. Baseline: prompt + ewentualny RAG na zamrożonym modelu.
3. Dopiero później mały trening SFT; porównanie wyników według tych samych metryk.
4. Testy regresji, bezpieczeństwa, kosztów i odporności na odmienne sformułowania.

Źródło: [Foundry — metody fine-tuningu](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/fine-tuning-considerations), [Transformers Trainer](https://huggingface.co/docs/transformers/trainer).
