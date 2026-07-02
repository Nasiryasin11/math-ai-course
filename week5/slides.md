---
marp: true
theme: default
paginate: true
math: katex
---

<!-- _class: lead -->
# Newton’s Method
### Finding Roots Using Tangent Lines

---

## Learning Objectives

By the end of this lecture, students will be able to:

- Explain the tangent-line idea behind Newton’s Method
- Derive the iteration formula from the tangent line
- Use Newton’s Method to approximate a root
- Name common situations when the method can fail

---

## Why Root Finding?

Some equations cannot be solved exactly with algebra.

For example:

$$
 x^2 - 2 = 0
$$

The exact solution is:

$$
 x = \sqrt{2}
$$

Newton’s Method gives a numerical way to approximate this solution.

---

## Geometric Idea

Start with an initial guess:

$$
 x_0
$$

At each guess, draw the tangent line to the curve:

$$
 y = f(x)
$$

The tangent line crosses the x-axis at a new point, which becomes:

$$
 x_{n+1}
$$

Repeat this process to improve the estimate.

---

## Tangent Line at $x_n$

The tangent line to $y = f(x)$ at the point $(x_n, f(x_n))$ is:

$$
 y = f(x_n) + f'(x_n)\,(x - x_n)
$$

Here:

- $x_n$ is the current estimate
- $f(x_n)$ is the function value at $x_n$
- $f'(x_n)$ is the slope at $x_n$

---

## Finding the Next Guess

To find the next estimate $x_{n+1}$, set the tangent line equal to zero.

That gives:

$$
 0 = f(x_n) + f'(x_n)\,(x_{n+1} - x_n)
$$

Solve this equation for $x_{n+1}$.

---

## Newton’s Iteration Formula

Solving the equation gives:

$$
 x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

This means:

- start with $x_n$
- compute $f(x_n)$
- compute $f'(x_n)$
- use the formula to get $x_{n+1}$

---

## Example: $f(x) = x^2 - 2$

For this function:

$$
 f(x) = x^2 - 2
$$

and:

$$
 f'(x) = 2x
$$

Newton’s update becomes:

$$
 x_{n+1} = x_n - \frac{x_n^2 - 2}{2x_n}
$$

Start with:

$$
 x_0 = 1
$$

---

## Iteration Results

Using the formula with $x_0 = 1$:

$$
 x_1 = 1 - \frac{1^2 - 2}{2\cdot 1} = 1.5
$$

$$
 x_2 = 1.5 - \frac{1.5^2 - 2}{2\cdot 1.5} \approx 1.4167
$$

$$
 x_3 = 1.4167 - \frac{1.4167^2 - 2}{2\cdot 1.4167} \approx 1.4142
$$

The estimates quickly approach:

$$
 \sqrt{2} \approx 1.4142
$$

---

## When Newton’s Method Works Well

Newton’s Method works well when:

- the starting guess $x_0$ is close to the root
- the derivative $f'(x_n)$ is not zero
- the function behaves smoothly near the root

In these cases, each step usually gives a better estimate.

---

## When Newton’s Method Can Fail

Possible problems include:

- a poor initial guess that is far from the root
- a horizontal tangent where $f'(x_n) = 0$
- the next guess jumping far from the root
- the method entering a cycle and repeating values

A good starting point makes the method more reliable.

---

## Interactive Animation Idea

An animation can show how each step works:

- plot the curve

$$
 f(x) = x^2 - 2
$$

- mark the current estimate $x_n$
- draw the tangent line at $(x_n, f(x_n))$
- show the x-intercept as $x_{n+1}$

Students can step through the iterations one by one.

---

## Summary

- Newton’s Method approximates roots of

$$
 f(x) = 0
$$

- It uses tangent lines to move from $x_n$ to $x_{n+1}$
- The formula is:

$$
 x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

- It is best when the guess is good and the function is smooth.
