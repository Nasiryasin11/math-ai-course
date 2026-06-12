# SVD Practice Problems — Solutions

Three graduate-level practice problems on Singular Value Decomposition and Low-Rank Approximation. Each problem includes a full, step-by-step solution.

---

## Problem 1 (Computational)

Compute the SVD of
$$
A=\begin{pmatrix}3 & 1 \\\\ 1 & 3\end{pmatrix}.
$$
Give matrices `U`, `Σ`, and `V^T` explicitly and explain each step.

### Solution

1. Compute eigenvalues of `A` (since `A` is symmetric, eigenvectors of `A` are right singular vectors):
   - Characteristic polynomial: $(3-\lambda)^2-1=0$ ⇒ $(3-\lambda)=±1$.
   - Eigenvalues: $\lambda_1=4$, $\lambda_2=2$.

2. Eigenvectors (unnormalized):
   - For $\lambda_1=4$: $v\propto(1,1)^T$.
   - For $\lambda_2=2$: $v\propto(1,-1)^T$.

3. Normalize to obtain orthonormal `V` columns:
   $$v_1=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix},\qquad v_2=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}.$$
   So
   $$V=\begin{pmatrix}1/\sqrt{2} & 1/\sqrt{2}\\[4pt]1/\sqrt{2} & -1/\sqrt{2}\end{pmatrix}.$$

4. Singular values: for symmetric positive-definite `A` the singular values equal eigenvalues; thus
   $$\sigma_1=4,\quad \sigma_2=2,\qquad \Sigma=\operatorname{diag}(4,2).$$

5. Left singular vectors `U` satisfy $A v_i = \sigma_i u_i$:
   - $A v_1 = 4 v_1$ ⇒ $u_1=v_1$.
   - $A v_2 = 2 v_2$ ⇒ $u_2=v_2$.
   Hence $U=V$.

6. Final SVD:
   $$A = U \Sigma V^T,\qquad U=V=\frac{1}{\sqrt{2}}\begin{pmatrix}1 & 1\\[4pt]1 & -1\end{pmatrix},\ \Sigma=\begin{pmatrix}4 & 0\\[4pt]0 & 2\end{pmatrix}.$$

7. Interpretation: the orthonormal domain directions $(1,1)/\sqrt{2}$ and $(1,-1)/\sqrt{2}$ are stretched by factors 4 and 2, respectively. Because `A` is symmetric, left and right singular bases coincide.

---

## Problem 2 (Concept / Theorem)

Let $A\in\mathbb{R}^{m\times n}$ have SVD $A=\sum_{i=1}^p\sigma_i u_i v_i^{T}$ with $\sigma_1\ge\dots\ge\sigma_p\ge0$, $p=\min(m,n)$. Prove that the rank-$k$ truncated SVD
$$A_k=\sum_{i=1}^k\sigma_i u_i v_i^{T}$$
minimizes the Frobenius-norm approximation error among all matrices of rank at most $k$, i.e.
$$\|A-B\|_F\ge\|A-A_k\|_F\quad\text{for all }\operatorname{rank}(B)\le k.$$

### Solution (Frobenius-norm Eckart–Young)

1. Expand $A$ as the orthogonal sum of rank-1 terms:
   $$A=\sum_{i=1}^p\sigma_i u_i v_i^{T}.$$

2. Note orthogonality of these terms under the Frobenius inner product: for $i\ne j$,
   $$\langle u_i v_i^{T}, u_j v_j^{T}\rangle_F = \operatorname{tr}(v_i u_i^{T} u_j v_j^{T}) = 0$$
   because $u_i^T u_j=0$ and $v_i^T v_j=0$.

3. For any matrix $B$ with $\operatorname{rank}(B)\le k$, consider the squared Frobenius error:
   $$\|A-B\|_F^2 = \|A\|_F^2 + \|B\|_F^2 - 2\langle A,B\rangle_F.$$
   The term $\langle A,B\rangle_F$ is maximized when $B$ captures the components of $A$ corresponding to the largest singular values.

4. Equivalently, choose an orthonormal basis of rank-1 matrices aligned with the $u_i v_i^{T}$; any rank-$k$ $B$ can reproduce at most $k$ orthogonal components. Therefore the best choice is to keep the $k$ largest-$\sigma$ components, giving
   $$\min_{\operatorname{rank}(B)\le k}\|A-B\|_F^2 = \sum_{i=k+1}^p \sigma_i^2 = \|A-A_k\|_F^2.$$

5. This establishes the desired minimization statement.

Remark: the spectral-norm version (operator norm) that $\|A-A_k\|_2=\sigma_{k+1}$ follows from variational characterizations of singular values and requires a separate (but related) argument.

---

## Problem 3 (Application — Low-rank compression)

Suppose a centered data matrix $X\in\mathbb{R}^{4\times3}$ has singular values $\sigma_1=12$, $\sigma_2=3$, $\sigma_3=1$. You will compress with the rank-1 approximation $X_1$. Answer:

(a) Fraction of total variance explained by $X_1$.

(b) Frobenius and spectral norm errors $\|X-X_1\|_F$ and $\|X-X_1\|_2$.

(c) Storage cost (number of scalars) of original `X` and of rank-1 SVD representation; compute storage reduction ratio.

(d) Interpret the results: is rank-1 compression effective here?

### Solution

(a) Total variance (squared singular values): $12^2+3^2+1^2=144+9+1=154$. Rank-1 captures $144$. Fraction explained = $144/154\approx0.9351$ (≈93.5%).

(b) Errors by Eckart–Young:
- Spectral norm: $\|X-X_1\|_2=\sigma_2=3$.
- Frobenius norm: $\|X-X_1\|_F=\sqrt{\sigma_2^2+\sigma_3^2}=\sqrt{9+1}=\sqrt{10}\approx3.1623$.
- Relative Frobenius error: $\|X-X_1\|_F/\|X\|_F=\sqrt{10/154}\approx0.2548$ (≈25.5%).

(c) Storage cost:
- Original matrix: $4\times3=12$ scalars.
- Rank-1 SVD representation stores $U_1\in\mathbb{R}^{4\times1}$ (4 scalars), $\Sigma_1$ (1 scalar), $V_1\in\mathbb{R}^{3\times1}$ (3 scalars): total $4+1+3=8$ scalars.
- Storage ratio = $8/12=2/3$ → 33.3% reduction (store 66.7% of original).

(d) Interpretation:
- Rank-1 compression captures ≈93.5% of variance while reducing storage by one-third; this is an effective dimensionality reduction in many applications.
- The residual energy (≈25.5% relative Frobenius error) is moderate; whether acceptable depends on downstream tasks (reconstruction fidelity vs. model complexity).

