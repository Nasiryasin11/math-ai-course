mkdir -p week1

cat > week1/concept.md <<'EOF'
# Systems of Equations

A system of equations is a collection of two or more equations that use the same variables. The goal is to find the value of each variable that makes all equations true at the same time. In algebra, one of the most common examples is a system of two linear equations with two variables, usually written using $x$ and $y$. A solution to the system is an ordered pair $(x,y)$ that satisfies every equation in the system.

For example, a simple system can be written as:

$$
\begin{cases}
x-y=5 \\
2x+y=7
\end{cases}
$$

This system asks us to find one value of $x$ and one value of $y$ that make both equations true. Systems of equations are useful because many real-world problems involve more than one condition. For example, in engineering, economics, physics, and data science, we often need to solve several relationships at the same time.

One common method for solving systems is the substitution method. In this method, we solve one equation for one variable and substitute that expression into the other equation. For example, from the equation $x-y=5$, we can solve for $x$:

$$
x=y+5
$$

Then we substitute this expression into the second equation:

$$
2(y+5)+y=7
$$

Simplifying gives:

$$
3y+10=7
$$

Then:

$$
3y=-3
$$

So:

$$
y=-1
$$

After finding $y$, we substitute back into $x=y+5$. This gives $x=4$. Therefore, the solution is:

$$
(x,y)=(4,-1)
$$

Another important method is the elimination method. In this method, we add or subtract equations to eliminate one variable. This is useful when the coefficients of one variable are opposites or can be made opposites by multiplication.

A system can have one solution, no solution, or infinitely many solutions. If two lines intersect at exactly one point, the system has one solution. If the lines are parallel, the system has no solution. If the equations represent the same line, the system has infinitely many solutions.

Overall, systems of equations are important because they teach us how to solve multiple mathematical conditions together. They also provide a foundation for more advanced topics such as matrices, linear algebra, optimization, and mathematical modeling.
EOF