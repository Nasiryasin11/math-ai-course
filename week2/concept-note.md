# Taylor Series 
## Definition
A Taylor series is a representation of a function as an infinite sum of terms that are calculated from the values of the function's derivatives at a single point. 

The Taylor series of a function $f(x)$ centered at $a$ is defined as:

$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n,
$$

where $f^{(n)}(a)$ is the $n$-th derivative of $f$ evaluated at $a$. We can also write the Taylor series in this form:
           
$$f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f'''(a)}{3!}(x - a)^3 + \cdots$$    
## Example
Now, consider the example of a function $f(x) = e^x$.
 First, we compute the derivatives of $f(x)$ at $x = 0$:

 Since every derivative of $e^x$ is $e^x$, we have:

 $$
 f^{(n)}(x) = e^x \implies f^{(n)}(0) = e^0 = 1 \text{ for all } n.
 $$

 Now substituting these values into the Taylor series formula:

   $$
   f(x) = 1 + 1 \cdot x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 + \cdots$$


   $$    
    f(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$ 

 Therefore, the Taylor series expansion of $e^x$ around $0$ is:
 $$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$
 This series converges for all real values of $x$.

 ## Concluding sentence
 Taylor series matter beacuse it help us to solve complicated functions using simple polynomials expressions.