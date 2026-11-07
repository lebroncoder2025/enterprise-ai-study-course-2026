"""Prawdziwy gradient descent na CPU, bez zewnętrznych bibliotek.
Uruchom: python 01_gradient_cpu.py
"""
import json
from pathlib import Path

samples = [(1.0, 2.0), (2.0, 4.0), (3.0, 6.0)]
w = 0.3
learning_rate = 0.1

for step in range(20):
    loss = sum((w*x-y)**2 for x, y in samples) / len(samples)
    grad = sum(2*(w*x-y)*x for x, y in samples) / len(samples)
    print(f"Krok={step+1:02d}  w={w:+.6f}  loss={loss:.8f}  gradient={grad:+.6f}")
    w -= learning_rate * grad

path = Path(__file__).with_name('wyuczona_waga.json')
path.write_text(json.dumps({'w': w, 'learning_rate': learning_rate}, indent=2), encoding='utf-8')
print('Zapisano:', path, '| w=', round(w, 6))
