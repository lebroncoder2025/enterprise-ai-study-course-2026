"""Dydaktyczny LoRA na JEDNEJ macierzy — naprawdę uczy adapter A, B na CPU.
Uruchom: pip install numpy && python 02_lora_numpy.py
Nie jest to fine-tuning LLM. Demonstruje matematykę W_eff=W_0+B@A.
"""
import numpy as np
from pathlib import Path

rng = np.random.default_rng(42)
d, r = 8, 2
base = rng.normal(scale=0.4, size=(d, d))
u = rng.normal(size=(d, 1))
v = rng.normal(size=(1, d))
delta_target = 0.5 * (u @ v)
target = base + delta_target

A = rng.normal(scale=0.1, size=(r, d))
B = np.zeros((d, r))
learning_rate = 0.6
for step in range(2500):
    error = B @ A - delta_target
    loss = np.mean(error**2)
    # Mean squared error of d*d matrix entries; both gradients are exact.
    gB = (2 / (d*d)) * (error @ A.T)
    gA = (2 / (d*d)) * (B.T @ error)
    B -= learning_rate * gB
    A -= learning_rate * gA
    if step % 500 == 0 or step == 2499:
        print(f'Krok {step:4d} | loss={loss:.9f}')

print('Bazowa macierz pozostaje niezmieniona:', np.allclose(target - delta_target, base))
print('Full FT parametrów:', d*d, '| LoRA parametrów:', d*r + r*d)
np.savez(Path(__file__).with_name('mini_lora_adapter.npz'), A=A, B=B)
print('Zapisano tylko adapter A i B (nie całą macierz bazową).')
