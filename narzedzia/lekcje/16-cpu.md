# Fine-tuning na CPU i RAM: co jest realne?


> **W jednym zdaniu:** CPU potrafi trenować sieci i adaptery gradientowo. Ale CPU nie jest „magiczną prostszą metodą”, a QLoRA jest zwykle projektowane pod wydajne szkolenie na GPU.

## Cztery sytuacje, których nie należy mieszać

1. **CPU inference:** uruchamianie gotowego GGUF przez `llama.cpp`, Ollamę lub LM Studio; można korzystać z RAM zamiast VRAM. **To nie jest trening.**
2. **Klasyczny ML na CPU:** regresja, Random Forest, boosting na danych tabelarycznych; często bardzo rozsądny wybór.
3. **Trenowanie małej sieci / małego modelu tekstowego na CPU:** realne, ale zwykle znacznie wolniejsze. PyTorch `device='cpu'` i `optimizer.step()` nadal aktualizują parametry.
4. **LoRA/PEFT na CPU:** technicznie możliwe w zgodnych narzędziach i przy modelach mieszczących się w RAM, ale duże LLM-y mogą trenować skrajnie wolno. Popularne konfiguracje 4-bit z `bitsandbytes` nie są uniwersalną receptą dla każdego CPU; trzeba sprawdzić wsparcie i backend.

## Kiedy to ma sens?

Do nauki gradientów wystarczy Python + NumPy, nawet bez karty graficznej. Do rzeczywistego fine-tuningu na CPU wybierz **niewielki** model i mały zbiór treningowy. 7B na laptopowym CPU to zwykle zły punkt startowy, szczególnie bez weryfikacji pamięci i czasu.

## Oblicz pamięć samych wag

Dla modelu z 7 miliardami parametrów:

- FP32: około **28 GB** samych parametrów.
- FP16/BF16: około **14 GB** samych parametrów.
- 4-bit: teoretyczne minimum **3,5 GB** na wartości wag, lecz rzeczywisty plik i uruchomienie mają dodatkowy narzut.

**Trening jest cięższy**: często dochodzą gradienty, stany optymalizatora, aktywacje, bufory tymczasowe i sekwencje danych. Nie traktuj wyliczeń samych wag jako prognozy całkowitego RAM/VRAM.

## Praktyczne ćwiczenie bez GPU

W katalogu `cwiczenia_python` masz skrypt `01_gradient_cpu.py`. Trenuje jeden parametr z NumPy i zapisuje go w pliku JSON. Dalej `02_lora_numpy.py` pokazuje adapter niskiej rangi w małej macierzy. To **wierne obliczenia matematyczne**, nie trening prawdziwego modelu 7B.

## Wniosek na rozmowę

„Model size, precision, optimizer states, activation memory, sequence length, batch size and hardware all matter. LoRA reduces the number of trainable parameters; quantization reduces the base model's storage footprint; neither removes the need to measure real training memory and throughput.”

Źródła: [PyTorch training loop](https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html), [Hugging Face PEFT](https://huggingface.co/docs/peft/index).
