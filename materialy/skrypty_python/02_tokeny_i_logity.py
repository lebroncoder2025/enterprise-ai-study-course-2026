"""Minimalny pokaz tokenizera, warstwy wynikowej i softmax; NIE jest to LLM.
Tokeny i wagi są wymyślone, ale wzór i obliczenia są prawdziwe.
"""
import math

vocabulary = {11: 'Warsz', 12: 'awa', 13: 'Berlin', 14: 'Kraków', 15: 'Hamburg'}
print('Dekoder ID 11,12:', ''.join(vocabulary[i] for i in (11,12)))

# Wyuczone wagi wierszy "output head" (tu ręcznie ustawione, nie trenowane).
# h = [sygnał: Polska, sygnał: Niemcy, sygnał: pytanie o stolicę]
head = {
    'Warszawa': ([4.5, -1.4, .8], .2),
    'Berlin':   ([-1.3, 4.5, .8], .2),
    'Kraków':   ([1.9, -.6, -.5], .1),
    'Hamburg':  ([-.6, 1.9, -.5], .1),
}

def predict(country='PL', capital_hint=1, temperature=1):
    h = [int(country == 'PL'), int(country == 'DE'), capital_hint]
    logits = {word: sum(a*b for a,b in zip(h,weights)) + bias
              for word,(weights,bias) in head.items()}
    # Stabilna numerycznie wersja softmax.
    peak = max(x/temperature for x in logits.values())
    exps = {k: math.exp(v/temperature - peak) for k,v in logits.items()}
    total = sum(exps.values())
    probs = {k: v/total for k,v in exps.items()}
    print(f'\nkontekst: {country}, h={h}, temperatura={temperature}')
    for key in sorted(probs, key=probs.get, reverse=True):
        print(f'{key:10s} logit {logits[key]:+6.2f}  prawdopodobieństwo {probs[key]:6.2%}')
    print('Najwyższy wynik:', max(probs, key=probs.get))

predict('PL')
predict('DE')
# W prawdziwym LLM: h powstaje przez wiele bloków attention + MLP;
# output head ma tysiące wierszy odpowiadających ID tokenów, a nie tylko 4 miasta.
