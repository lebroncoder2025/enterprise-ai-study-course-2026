"""Przykład prawdziwego treningu regresji bez bibliotek zewnętrznych.
Uruchom: python 01_trening_regresji.py
Zmodyfikuj learning_rate na 0.9 i zobacz, co się dzieje z funkcją straty.
"""
data = [(0, 1), (1, 3.15), (2, 4.85), (3, 7.15), (4, 8.85)]
weight, bias, learning_rate = -0.4, 0.5, 0.09

def loss(w, b):
    return sum((w*x + b - y)**2 / 2 for x, y in data) / len(data)

print(f"start: w={weight:.3f}, b={bias:.3f}, loss={loss(weight,bias):.4f}")
for epoch in range(1, 101):
    # Obie pochodne z TEGO SAMEGO stanu w,b.
    dw = sum((weight*x + bias - y)*x for x, y in data) / len(data)
    db = sum((weight*x + bias - y) for x, y in data) / len(data)
    weight -= learning_rate * dw
    bias -= learning_rate * db
    if epoch in (1, 2, 5, 10, 20, 50, 100):
        print(f"epoka {epoch:3d}  w={weight:+.4f}  b={bias:+.4f}  loss={loss(weight,bias):.6f}")
print("prognoza dla x=5:", round(weight*5 + bias, 3))
