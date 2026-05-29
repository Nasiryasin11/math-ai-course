
"""
Week 2 Interactive Python Task: Fourier Series

This file studies Fourier series approximation of a square wave.
The goal is to define a target periodic function, compute partial sums of its Fourier series,
compare several partial sums graphically, and measure the L2 approximation error as the number
of Fourier terms increases.

The file uses # %% cells so it can be run interactively in VS Code.
"""
# %%
#cell 1: Define the target periodic function (square wave)
import numpy as np
import matplotlib.pyplot as plt
def square_wave(x):
    """Returns the value of a square wave function at x."""
    return np.where((x % (2 * np.pi)) < np.pi, 1, -1)      
# %%
# Cell 2: Compute the Fourier coefficients for the square wave

def fourier_coefficients(n_terms):
    """
    Computes the first n_terms Fourier coefficients for the square wave.

    For the square wave:
        f(x) = 1  for 0 < x < pi
        f(x) = -1 for pi < x < 2pi

    The Fourier series contains only sine terms:
        b_n = 4 / (pi n) for odd n
        b_n = 0 for even n
    """
    a0 = 0
    an = np.zeros(n_terms)
    bn = np.zeros(n_terms)

    for n in range(1, n_terms + 1):
        if n % 2 == 1:
            bn[n - 1] = 4 / (np.pi * n)
        else:
            bn[n - 1] = 0

    return a0, an, bn


def fourier_series_approximation(x, n_terms):
    """
    Computes the Fourier series approximation of the square wave at x using n_terms."""
    a0, an, bn = fourier_coefficients(n_terms)
    approximation = a0 / 2  # Start with the average value
    for n in range(1, n_terms + 1):
        approximation += an[n - 1] * np.cos(n * x) + bn[n - 1] * np.sin(n * x)
    return approximation
# %%
#cell 3: Plot the target function and its Fourier approximations
x = np.linspace(-2 * np.pi, 2 * np.pi, 1000)
y_square = square_wave(x)
plt.figure(figsize=(12, 6))
plt.plot(x, y_square, label='Square Wave', color='black', linewidth=2)
for n_terms in [1, 3, 5, 10]:
    y_approx = fourier_series_approximation(x, n_terms)
    plt.plot(x, y_approx, label=f'Fourier Approximation (n={n_terms})')
plt.title('Fourier Series Approximation of a Square Wave')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid()
plt.show()
# %%
#cell 4: Measure the L2 approximation error as the number of Fourier terms increases
n_terms_list = np.arange(1,101)
errors = []
for n_terms in n_terms_list:
    y_approx = fourier_series_approximation(x, n_terms)
    error = np.sqrt(np.mean((y_square - y_approx) ** 2))
    errors.append(error)
plt.figure(figsize=(8, 5))
plt.plot(n_terms_list, errors, marker='o')
plt.title('L2 Approximation Error vs. Number of Fourier Terms')
plt.xlabel('Number of Fourier Terms')
plt.ylabel('L2 Approximation Error')
plt.xscale('log')
plt.yscale('log')
plt.grid()
plt.show()  
