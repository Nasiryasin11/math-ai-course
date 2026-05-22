# math-ai-course

This repository contains my course files and practice work.

## About

This repository is used to practice Git, GitHub, VS Code, and course-related coding tasks.

## Author

Nasir Yasin
## 1.3 Markdown for Mathematics

### Markdown Basics

Markdown is plain text with lightweight syntax that renders as formatted HTML. GitHub and VS Code render Markdown natively. Open or create any `.md` file in VS Code and click **Open Preview** or press `Cmd + Shift + V` to see the rendered version.

Core syntax:

# Heading 1
## Heading 2
### Heading 3

**bold**, *italic*, `inline code`

- Bullet list item
- another item
  - Nested item

1. Numbered item
2. Second item

[Link text](https://example.com)

### Fenced code blocks with syntax highlighting

```python
def quadratic(a, b, c):
    return (-b + (b**2 - 4*a*c)**0.5) / (2*a)
```

### Inline mathematics

The Pythagorean theorem states $x^2 + y^2 = z^2$.

A fraction inline: $\frac{a}{b}$.

Greek letters: $\alpha$, $\beta$, $\gamma$, $\lambda$, $\Omega$.

### Display mathematics

You can write larger equations like this:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
$$
\int_0^1 f(x)\,dx
$$
#Common Expression
Fraction:
$$\frac{a}{b}$$

Sum:
$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$$

Integral:
$$\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$$

Matrix:
$$
\begin{pmatrix}
  a & b \\
  c & d
\end{pmatrix}
\begin{pmatrix}
  x \\
  y
\end{pmatrix}
=
\begin{pmatrix}
  ax + by \\
  cx + dy
\end{pmatrix}
$$

Aligned equations:
$$
\begin{aligned}
  \nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
  \nabla \times \mathbf{B} &= \mu_0 \mathbf{J}
\end{aligned}
$$