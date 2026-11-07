# Full fine-tuning, LoRA, QLoRA i PEFT


> **W jednym zdaniu:** LoRA zachowuje model bazowy bez zmian, a trenuje małe macierze „nakładki”. QLoRA dodatkowo przechowuje zamrożony model bazowy w postaci skwantyzowanej.

## Najpierw zwykła macierz

Warstwa ma macierz wag `W` o rozmiarze `d × d`. Jeżeli `d=4096`, to jest **16 777 216 parametrów** tylko w tej jednej macierzy. Full fine-tuning aktualizuje je wszystkie: dla wielu optymalizatorów potrzebujesz pamięci na parametry, gradienty i stany optymalizatora — znacznie więcej niż sam plik modelu.

## LoRA — rozkład o małej randze

Zamiast aktualizować `W`, obliczamy:

`W_effective = W_frozen + (α/r) · B · A`

Przy `A` o wymiarach `r × d` i `B` o wymiarach `d × r`. Dla `r=8` trenujesz `2 × 4096 × 8 = 65 536` liczb zamiast 16 777 216 **w tej macierzy** — około 256 razy mniej *parametrów aktualizowanych w tej warstwie*. Rzeczywisty bilans pamięci i szybkości zależy od całej architektury, aktywacji i ustawień treningu.

## QLoRA, kwantyzacja, GGUF — trzy różne znaczenia

- **LoRA:** adaptery niskiej rangi, zwykle bez kwantyzacji bazy.
- **QLoRA:** baza w niskiej precyzji (często 4-bit) + trenowane adaptery LoRA w odpowiedniej precyzji. Nadal potrzebujesz pamięci na aktywacje i obliczenia wstecz.
- **GGUF / 4-bit do Ollamy:** przede wszystkim format i kwantyzacja do **inferencji**, nie automatyczny mechanizm treningu. Samo pobranie GGUF nie uruchamia fine-tuningu.

## Inne warianty PEFT

| Technika | Co modyfikuje? | Ważny niuans |
|---|---|---|
| **Adapter layers** | małe moduły dodane do sieci | można przełączać adaptery |
| **IA³** | wektory skalujące wybrane aktywacje | bardzo mało trenowanych parametrów |
| **Prompt tuning** | trenowane „soft prompt embeddings” | to nie jest zwykły tekstowy prompt |
| **Prefix tuning** | trenowane wirtualne reprezentacje poprzedzające sekwencję | modyfikuje zachowanie, nie wiedzę w Search |
| **AdaLoRA** | adaptacyjnie przydzielana ranga adapterów | bardziej zaawansowana konfiguracja |

## Przechowywanie i deployment

Model bazowy może ważyć wiele gigabajtów, a adapter mieć dużo mniejszy plik `adapter_model.safetensors` i `adapter_config.json`. Podczas inferencji można ładować model bazowy + adapter albo — dla wybranych technik i zgodnych formatów — scalać wagi. Licencja modelu i zgodność runtime nadal obowiązują.

## Pytanie lidera: „Czy LoRA zmniejsza koszty inferencji?”

Nie automatycznie. Przede wszystkim obniża koszt **treningu** i rozmiar zapisywanych zmian. Ostateczna szybkość inferencji zależy od runtime, sposobu dołączania adaptera i możliwości scalenia.

Źródło: [Hugging Face PEFT](https://huggingface.co/docs/peft/index), [Transformers + PEFT](https://huggingface.co/docs/transformers/peft), [QLoRA paper](https://arxiv.org/abs/2305.14314).
