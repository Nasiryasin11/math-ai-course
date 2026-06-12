# GRAD-SVD: Problems and Full Solutions

This file contains the practice problems from the study guide with full solutions.

## Problem 1 (Computation)
Compute the full SVD of
$$
B=\begin{pmatrix}2 & 0 & 0\\0 & 1 & 1\\0 & 1 & 1\end{pmatrix}.
$$

Solution:

1. Compute $B^{T}B$. Let columns of $B$ be $c_1,c_2,c_3$. Then
$$B^{T}B=\begin{pmatrix}c_1\cdot c_1 & c_1\cdot c_2 & c_1\cdot c_3\\ c_2\cdot c_1 & c_2\cdot c_2 & c_2\cdot c_3\\ c_3\cdot c_1 & c_3\cdot c_2 & c_3\cdot c_3\end{pmatrix}=\begin{pmatrix}4 & 0 & 0\\0 & 2 & 2\\0 & 2 & 2\end{pmatrix}.
$$

2. Diagonalize the lower-right $2\times2$ block: the matrix $\begin{pmatrix}2&2\\2&2\end{pmatrix}$ has eigenpairs $(4,(1,1)^T)$ and $(0,(1,-1)^T)$. Thus eigenvalues of $B^{T}B$ are $4,4,0$.

3. Singular values are square roots: $\sigma_1=2,\;\sigma_2=2,\;\sigma_3=0$.

4. Right singular vectors (orthonormal eigenvectors of $B^{T}B$):
$$v_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad v_2=\frac{1}{\sqrt{2}}\begin{pmatrix}0\\1\\1\end{pmatrix},\quad v_3=\frac{1}{\sqrt{2}}\begin{pmatrix}0\\1\\-1\end{pmatrix}.
$$

5. Left singular vectors for nonzero singular values: $u_i=\frac{1}{\sigma_i}B v_i$.
Compute
$$Bv_1 = \begin{pmatrix}2\\0\\0\end{pmatrix}\implies u_1=\frac{1}{2}\begin{pmatrix}2\\0\\0\end{pmatrix}=\begin{pmatrix}1\\0\\0\end{pmatrix}.
$$
$$Bv_2=\frac{1}{\sqrt{2}}(c_2+c_3)=\frac{1}{\sqrt{2}}\begin{pmatrix}0\\2\\2\end{pmatrix}=\begin{pmatrix}0\\\sqrt{2}\\\sqrt{2}\end{pmatrix}\implies u_2=\frac{1}{2}\begin{pmatrix}0\\\sqrt{2}\\\sqrt{2}\end{pmatrix}=\begin{pmatrix}0\\1/\sqrt{2}\\1/\sqrt{2}\end{pmatrix}.
$$
Choose $u_3$ to complete an orthonormal basis, e.g.
$$u_3=\frac{1}{\sqrt{2}}\begin{pmatrix}0\\1\\-1\end{pmatrix}.
$$

6. Assemble $U=[u_1\,u_2\,u_3]$, $V=[v_1\,v_2\,v_3]$, and
$$\Sigma=\mathrm{diag}(2,2,0).
$$
One verifies $B=U\Sigma V^{T}$.

Remarks: this SVD shows $\mathrm{rank}(B)=2$ and that the two nonzero singular values are equal (a repeated singular value), so the corresponding singular vectors are determined only up to an orthogonal rotation in the two-dimensional invariant subspace.

---

## Problem 2 (Uniqueness)
Prove that singular values of a matrix are unique (as a multiset) and that singular vectors corresponding to a simple singular value are unique up to sign.

Solution (concise):

Let $A\in\mathbb{R}^{m\times n}$ and consider $A^{T}A$, which is symmetric positive semidefinite. The eigenvalues $\lambda_i$ of $A^{T}A$ are uniquely determined (as a multiset) by the characteristic polynomial; singular values are $\sigma_i=\sqrt{\lambda_i}$, so the singular values are unique as a multiset.

If $\sigma$ is a simple (multiplicity-one) singular value, then its corresponding right singular vector $v$ is an eigenvector of $A^{T}A$ for eigenvalue $\sigma^2$. Since that eigenspace is one-dimensional, any other eigenvector is a scalar multiple of $v$; normalization fixes the magnitude, leaving only sign ambiguity: $v' = \pm v$. The left singular vector $u$ is $u=(1/\sigma)Av$ and inherits the same sign freedom.

If a singular value has multiplicity greater than one, its singular vectors are determined only up to an orthogonal transformation within the corresponding eigenspace.

---

## Problem 3 (Eckart–Young / Best Rank-k Approximation)
Let $A=U\Sigma V^{T}$ be the SVD with singular values $\sigma_1\ge\sigma_2\ge\dots$. Show that the best rank-$k$ approximation to $A$ in Frobenius norm is
$$A_k=U_k\Sigma_k V_k^{T},$$
where $U_k,\Sigma_k,V_k$ keep the first $k$ singular triples, and compute the error $\|A-A_k\|_F^2=\sum_{j>k}\sigma_j^2$.

Solution (sketch with the key steps):

1. Write $A=\sum_{i=1}^{r}\sigma_i u_i v_i^{T}$ (finite sum up to rank $r$). Any rank-$k$ matrix $X$ can be written in terms of orthonormal bases, but by unitary invariance of the Frobenius norm we may work in the coordinates given by $U$ and $V$.

2. Using orthonormality, compute
$$\|A-X\|_F^2 = \sum_{i=1}^{r}\sigma_i^2 - 2\langle X,\sum_{i=1}^{r}\sigma_i u_i v_i^{T}\rangle + \|X\|_F^2.
$$
Optimizing over matrices of rank at most $k$ (one can show the maximum inner product with $A$ is achieved when $X$ uses the top $k$ singular directions with the same coefficients), one obtains that choosing
$$X=\sum_{i=1}^{k}\sigma_i u_i v_i^{T}$$
minimizes the error. Plugging in gives
$$\|A-A_k\|_F^2 = \sum_{i=k+1}^{r}\sigma_i^2.
$$

Remarks: A clean proof projects $A$ into the subspace spanned by the first $k$ right singular vectors and uses Pythagorean orthogonality; see Eckart & Young (1936) or any standard matrix computation text for a detailed epsilon-delta style proof.

---

## Problem 4 (Noisy Low-Rank Recovery)
Suppose $M=M_0+E$ where $M_0$ has rank $r$ and $E$ is a perturbation (noise). Explain how truncated SVD can recover $M_0$ and state informal conditions guaranteeing recovery.

Solution (informal but precise statements):

- If $M_0$ has singular values $\sigma_1(M_0)\ge\dots\ge\sigma_r(M_0)>0$ and the noise $E$ has operator norm $\|E\|_2$ significantly smaller than the spectral gap $\gamma=\sigma_r(M_0)-\sigma_{r+1}(M_0)$ (note $\sigma_{r+1}(M_0)=0$), then the top-$r$ singular subspace of $M$ will be close to that of $M_0$.
- Weyl's inequality gives |\sigma_i(M)-\sigma_i(M_0)| \le \|E\|_2, so nonzero singular values of $M_0$ are perturbed by at most \|E\|_2. If \|E\|_2 < \sigma_r(M_0)/2 then the small singular values (noise) remain separated from the signal singular values.
- Davis–Kahan (sin Theta) theorem bounds the distance between subspaces in terms of \|E\|_2 and the spectral gap; thus truncated SVD (keeping top $r$ singular values of $M$) yields a matrix close to $M_0$ in operator and Frobenius norms.

Practical recipe: compute SVD of $M$, examine the singular value decay, pick cutoff $k$ where a spectral gap appears (or use model-selection criteria), and reconstruct $\hat M=M_k$. This denoises when signal singular values dominate noise.

---

## Problem 5 (First-Order Perturbation Formulas)
Let $A(t)$ be a matrix smoothly depending on scalar parameter $t$, with simple (non-repeated) singular value $\sigma_i(t)$ and corresponding singular vectors $u_i(t),v_i(t)$ normalized so $\|u_i\|=\|v_i\|=1$. Derive expressions for $\sigma_i'(t)$ and formulas for the projections of $u_i'(t)$ and $v_i'(t)$ onto other singular vectors.

Solution (derivation sketch and formulas):

Differentiate the identity
$$A(t)v_i(t) = \sigma_i(t) u_i(t)
$$
with respect to $t$:
$$A'(t)v_i + A v_i' = \sigma_i' u_i + \sigma_i u_i'.\qquad(1)
$$
Take inner product with $u_i^{T}$ and use $u_i^{T}u_i=1$ and $u_i^{T}u_i'=0$ (orthogonality of derivative to vector due to normalization) to obtain the simple formula
$$\boxed{\sigma_i'(t) = u_i^{T} A'(t) v_i.}
$$
To get components of $u_i'$ and $v_i'$, project (1) onto $u_j$ for $j\ne i$ (left singular vectors):
$$u_j^{T}A v_i' + u_j^{T}A' v_i = \sigma_i' u_j^{T}u_i + \sigma_i u_j^{T}u_i' = \sigma_i u_j^{T}u_i'.
$$
But $u_j^{T}A = \sigma_j v_j^{T}$ (transpose of singular equations), so after rearrangement one finds
$$u_j^{T}u_i' = \frac{u_j^{T}A' v_i}{\sigma_i-\sigma_j},\qquad j\ne i.
$$
Similarly, projecting the transpose identity $A^{T}u_i=\sigma_i v_i$ and differentiating yields
$$v_j^{T}v_i' = \frac{v_j^{T}A'^{T} u_i}{\sigma_i-\sigma_j} = \frac{u_i^{T}A' v_j}{\sigma_i-\sigma_j},\qquad j\ne i.
$$
Thus the derivatives of singular vectors expand in the other singular-vector directions with coefficients proportional to matrix perturbation entries and inversely proportional to spectral gaps $\sigma_i-\sigma_j$. These expressions require simple (non-repeated) singular values; repeated values need a more careful analysis using subspace derivatives.

---

## Further exercises (suggested)
- Work Example 1 from the study guide fully numerically (compute $U,\Sigma,V^{T}$ entries explicitly).
- Implement a small script that computes truncated SVD and demonstrates denoising on synthetically corrupted low-rank matrices.

---

References and further reading: see [GRAD-SVD-Study-Guide.md](GRAD-SVD-Study-Guide.md#L1).
