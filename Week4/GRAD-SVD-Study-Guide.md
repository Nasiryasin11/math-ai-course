# Graduate-Level Study Guide: Singular Value Decomposition (SVD)

## Overview
This guide presents intuition, formal statements, proof sketches, worked examples, practice problems with solutions, and connections to related topics for the Singular Value Decomposition (SVD) of matrices — a fundamental tool in graduate-level linear algebra, numerical analysis, and data science.

**Prerequisites:** linear algebra (eigenvalues/vectors, inner-product spaces), basic analysis, and familiarity with orthogonal/unitary matrices.

**Notation:** For a real matrix $A\in\mathbb{R}^{m\times n}$, $\|\cdot\|_2$ denotes the Euclidean vector norm and induced operator norm; $A^{T}$ is transpose and $A^{+}$ is the Moore–Penrose pseudoinverse.

## 1. Intuition
- The SVD factors a matrix into orthonormal input directions, scaling factors, and orthonormal output directions.
- Think of $A$ as a linear map that stretches/compresses and rotates: SVD isolates the principal directions (singular vectors) where the map acts by pure scaling (singular values).
- Low-rank structure: the largest singular values capture the dominant action of $A$; truncating small singular values yields optimal low-rank approximations (in the $\ell_2$-operator norm and Frobenius norm).

Geometric picture: For the unit sphere in $\mathbb{R}^n$, $A$ maps it to an ellipsoid in $\mathbb{R}^m$. The principal axes of that ellipsoid are scaled by the singular values, and the axes directions are given by singular vectors.

## 2. Formal Theorem (Matrix SVD)
Theorem (SVD):

For any matrix $A\in\mathbb{R}^{m\times n}$ there exist orthogonal matrices $U\in\mathbb{R}^{m\times m}$ and $V\in\mathbb{R}^{n\times n}$, and a diagonal matrix $\Sigma\in\mathbb{R}^{m\times n}$ with nonnegative diagonal entries $\sigma_1\ge\sigma_2\ge\dots\ge0$, such that
$$
A = U\Sigma V^{T}.
$$
The nonzero diagonal entries of $\Sigma$ are the singular values of $A$. If $\mathrm{rank}(A)=r$, then $\sigma_{r}>0$ and $\sigma_{r+1}=\dots=0$.

Properties:
- The columns of $U$ (resp. $V$) are called left (resp. right) singular vectors.
- $A^{T}A = V\Sigma^{T}\Sigma V^{T}$ and $AA^{T} = U\Sigma\Sigma^{T} U^{T}$; singular values are square roots of eigenvalues of $A^{T}A$ and $AA^{T}$.
- Best low-rank approximation (Eckart–Young): the rank-$k$ truncated SVD minimizes the operator or Frobenius norm error among all rank-$k$ matrices.

## 3. Proof Sketch
1. Consider $A^{T}A$ (an $n\times n$ symmetric positive semidefinite matrix). Diagonalize: $A^{T}A = V\Lambda V^{T}$ with $\Lambda=\mathrm{diag}(\lambda_i)$, $\lambda_i\ge0$.
2. Define $\sigma_i=\sqrt{\lambda_i}$ and order so $\sigma_1\ge\sigma_2\ge\dots\ge0$. Set $\Sigma$ with these entries.
3. For nonzero $\sigma_i$, set left singular vectors $u_i = (1/\sigma_i) A v_i$. This gives orthonormal $u_i$ because
$$\langle u_i,u_j\rangle = \frac{1}{\sigma_i\sigma_j} v_i^{T} A^{T}A v_j = \frac{\lambda_j}{\sigma_i\sigma_j} v_i^{T}v_j = \delta_{ij}.
$$
4. Extend $\{u_i\}$ and $\{v_i\}$ to orthonormal bases for $\mathbb{R}^m$ and $\mathbb{R}^n$ respectively; assemble $U,\Sigma,V$ to obtain $A=U\Sigma V^{T}$.

Remarks on infinite-dimensional/general operators: analogous decompositions hold for compact self-adjoint operators (spectral theorem) but require functional analysis.

## 4. Worked Examples

Example 1 — Small numeric SVD:

Let
$$A=\begin{pmatrix}3 & 1\\ 1 & 3\\ 0 & 0\end{pmatrix} \in \mathbb{R}^{3\times2}.
$$
Compute $A^{T}A = \begin{pmatrix}10 & 6\\6 & 10\end{pmatrix}$. Eigenvalues: $\lambda_1=16$, $\lambda_2=4$. So $\sigma_1=4$, $\sigma_2=2$.
Right singular vectors (normalized eigenvectors of $A^{T}A$):
$$v_1=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix},\quad v_2=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}.
$$
Left singular vectors: $u_i = A v_i /\sigma_i$.

Carrying out the multiplications yields (exercise) the matrices $U,\Sigma,V^{T}$ that reconstruct $A$.

Example 2 — Rank-1 approximation (PCA flavor):
Given tall data matrix $X\in\mathbb{R}^{m\times n}$ (columns are samples), the top singular vector gives the direction of maximal variance; the rank-1 approximation $\sigma_1 u_1 v_1^{T}$ is the optimal one-dimensional reconstruction.

## 5. Practice Problems

Problems are ordered by increasing difficulty.

1) (Computation) Compute the full SVD of
$$B=\begin{pmatrix}2 & 0 & 0\\0 & 1 & 1\\0 & 1 & 1\end{pmatrix}.
$$

2) (Proof) Prove that singular values are unique (up to ordering) and singular vectors are unique up to sign when corresponding singular values are distinct.

3) (Approximation) Let $A\in\mathbb{R}^{m\times n}$ have SVD $A=U\Sigma V^{T}$. Show that the best rank-$k$ approximation in Frobenius norm is $A_k = U_k \Sigma_k V_k^{T}$, and compute the error $\|A-A_k\|_F^2 = \sum_{j>k}\sigma_j^2$.

4) (Application) For a noisy low-rank matrix $M = M_0 + E$ where $M_0$ has rank $r$ and $E$ is small noise, describe how truncated SVD helps recover $M_0$. State conditions (informally) when recovery is possible.

5) (Advanced) Let $A(t)$ be a matrix smoothly depending on parameter $t$. Derive first-order perturbation formulas for a simple (non-repeated) singular value $\sigma_i(t)$ and its singular vectors.

### Solutions (sketches)
1) Compute eigenpairs of $B^{T}B$, take square roots for singular values, build singular vectors as in section 3.

2) If $\sigma$ has multiplicity one, any two right singular vectors $v$ and $v'$ satisfy $A^{T}A v=\sigma^2 v$ and $A^{T}A v'=\sigma^2 v'$, so $v' = \pm v$ because eigenspace is 1D.

3) Use orthogonality of singular vectors and Pythagorean theorem in Frobenius norm; optimality follows from Eckart–Young.

4) Truncated SVD removes components due to noise if the noise singular values are smaller than the signal singular values; matrix perturbation bounds (Weyl, Davis–Kahan) quantify this.

5) Differentiate $A(t)v(t)=\sigma(t) u(t)$ and project appropriately; use normalization constraints to solve for derivatives.

## 6. Connections and Extensions
- Spectral theorem: SVD is a generalization of the spectral decomposition to non-square matrices via $A^{T}A$ and $AA^{T}$.
- Principal Component Analysis (PCA): SVD on centered data yields principal components; connection to variance maximization and dimensionality reduction.
- Moore–Penrose pseudoinverse: $A^{+}=V\Sigma^{+} U^{T}$ where $\Sigma^{+}$ inverts nonzero singular values.
- Regularization/Tikhonov: truncated SVD and Tikhonov regularization filter small singular values to stabilize inverses.
- Low-rank matrix completion, compressed sensing, and randomized SVD algorithms are modern algorithmic extensions.

## References
- Golub & Van Loan, "Matrix Computations" (classic reference).
- Trefethen & Bau, "Numerical Linear Algebra".
- Eckart & Young (1936) original theorem on best low-rank approximation.

---

If you want, I can also:
- add worked numeric computations filled out step-by-step for Examples 1 and 2,
- create LaTeX-formatted versions for lecture notes, or
- split problems into a separate `GRAD-SVD-Problems.md` with full solutions.
