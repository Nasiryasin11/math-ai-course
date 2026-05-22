---
marp: true
theme: default
paginate: true
---

# The Fundamental Theorem of Calculus

**MATH 797 — Week 1**

---

## Statement

Let $f$ be continuous on $[a, b]$ and let $F(x) = \int_a^x f(t)\,dt$.

Then $F$ is differentiable on $(a, b)$ and:

$$F'(x) = f(x)$$

Furthermore, if $G$ is any antiderivative of $f$:

$$\int_a^b f(x)\,dx = G(b) - G(a)$$

---

## Key Insight

The theorem connects two seemingly separate operations:

- **Differentiation** — instantaneous rate of change
- **Integration** — accumulated area under a curve

They are inverse operations.