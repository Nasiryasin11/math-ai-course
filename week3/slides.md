---
marp: true
theme: default
paginate: true
title: Lipschitz Continuity
---

# Lipschitz Continuity
A concise overview for graduate students familiar with real analysis.

---

## Definition
Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces.  
A map $f:X\to Y$ is Lipschitz if there exists $L\ge0$ such that
$$d_Y(f(x),f(y)) \le L\,d_X(x,y)\quad\text{for all }x,y\in X.$$
- Such an $L$ is a Lipschitz constant; global vs.\ local Lipschitz as usual.

---

## Geometric intuition
- On $\mathbb R$, $|f(x)-f(y)|\le L|x-y|$ means every chord has slope (in absolute value) at most $L$.  
- Picture: no secant of the graph is steeper than $L$ — a uniform slope bound.

---

## Example 1: linear maps
- $f(x)=ax+b$ on $\mathbb R$: $|f(x)-f(y)|=|a|\,|x-y|$.  
- Hence Lipschitz with constant $L=|a|$ (minimal).

---

## Example 2: bounded derivative
- If $f\in C^1([a,b])$ and $L=\sup_{[a,b]}|f'|<\infty$, then for all $x,y\in[a,b]$,
$$
|f(x)-f(y)|\le L|x-y|.
$$
- Therefore, $f$ is Lipschitz with constant $L$.

---

## A continuous non‑Lipschitz example
- $f(x)=\sqrt{x}$ on $[0,1]$ is continuous but not Lipschitz on any interval containing $0$.  
- Indeed $\dfrac{|\sqrt{x}-\sqrt{0}|}{|x-0|}=\dfrac{1}{\sqrt{x}}\to\infty$ as $x\downarrow0$.

---

## Uniform continuity & short MVT proof
- Every Lipschitz map is uniformly continuous: given $\varepsilon>0$ take $\delta=\varepsilon/L$.  
- If $f\in C^1([a,b])$ and $L=\sup_{[a,b]}|f'|<\infty$, then for any $x,y\in[a,b]$, there exists $\xi$ between $x$ and $y$ such that $f(x)-f(y)=f'(\xi)(x-y)$.
- Therefore, $|f(x)-f(y)|\le L|x-y|$.

---

## Takeaway
- Lipschitz = uniform linear control on increments with constant $L$.  
- Implies uniform continuity and provides a simple, uniform slope bound for estimates.