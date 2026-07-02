# Week 5 Lecture Plan

## Topic
Newton’s Method: Finding Roots Using Tangent Lines

## Target Audience
Undergraduate students in Calculus I, Calculus II, or an introductory numerical methods course.

## Lecture Goal
Help students understand how Newton’s Method uses tangent lines to approximate roots of nonlinear equations by deriving the iteration formula and applying it to a simple example.

## Key Points to Cover

1. **Motivation for Root Finding**
   Many equations cannot be solved exactly by algebraic methods. Newton’s Method gives a practical approach to approximate solutions of \(f(x)=0\).

2. **Geometric Idea**
   Start with an initial guess \(x_0\), draw the tangent line to \(y = f(x)\), and use its x-intercept as the next approximation.

3. **Newton’s Method Formula**
   Introduce the iteration:

   $$
   x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
   $$

   Emphasize that each new estimate uses the function value and derivative at the current point.

4. **Step-by-Step Example**
   Apply Newton’s Method to \(f(x)=x^2-2\) with \(x_0=1\) to approximate \(\sqrt{2}\).

5. **Convergence Behavior**
   Explain quadratic convergence for well-behaved functions and how close initial guesses lead to faster results.

6. **Limitations of the Method**
   Discuss failure modes: poor initial guesses, horizontal tangents where \(f'(x_n)=0\), and cases where iterations diverge.

7. **Interactive Visualization**
   Use an HTML animation to show the curve, tangent line, and successive approximations step by step.
