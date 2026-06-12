
# Singular Value Decomposition and Low-Rank Approximation

Contents
--------

- Overview
- Geometric intuition
- Formal SVD theorem (existence and reduced SVD)
- Truncated SVD and Eckart–Young (proofs)
- Consequences and uses
- Short numeric example
- Worked examples (full solutions)
- Practice problems (complete solutions)
- Connections
- Refinement Process

Overview
--------

This note is a concise graduate‑level introduction to the Singular Value Decomposition (SVD). It proceeds from geometric intuition to formal statements, gives proofs of key approximation results (Eckart–Young), provides worked examples and practice problems with full solutions, and finishes with connections and a short refinement log.

Geometric intuition
-------------------

- View $A\in\mathbb{R}^{m\times n}$ as a linear map $A:\mathbb{R}^n\to\mathbb{R}^m$. The unit sphere in the domain is mapped by $A$ to an ellipsoid (possibly degenerate) in the codomain.
- The SVD selects orthonormal input directions $\{v_i\}$ and output directions $\{u_i\}$ so that
  $$A v_i = \sigma_i u_i,\qquad \sigma_1\ge\sigma_2\ge\dots\ge0.$$ 
- The singular values $\sigma_i$ are the ellipsoid's principal semi‑axes (lengths). Large $\sigma_i$ indicate directions preserved or amplified; small $\sigma_i$ indicate directions nearly collapsed.

Formal SVD theorem (existence and reduced SVD)
---------------------------------------------

Let $A\in\mathbb{R}^{m\times n}$ and $p=\min(m,n)$. There exist orthogonal matrices $U\in\mathbb{R}^{m\times m}$ and $V\in\mathbb{R}^{n\times n}$ and a diagonal $\Sigma\in\mathbb{R}^{m\times n}$ with nonnegative diagonal entries $\sigma_1\ge\dots\ge\sigma_p\ge0$ such that
$$A=U\Sigma V^T.$$ 

Sketch of existence (constructive).

1. Form $A^TA\in\mathbb{R}^{n\times n}$; it is symmetric positive semidefinite, so the spectral theorem gives an orthonormal eigenbasis $\{v_i\}_{i=1}^n$ and eigenvalues $\lambda_1\ge\lambda_2\ge\dots\ge0$ with $A^TA v_i=\lambda_i v_i$.
2. Define $\sigma_i=\sqrt{\lambda_i}\ (i=1,\dots,p)$. For each $\sigma_i>0$ set $u_i=\sigma_i^{-1}A v_i$. Then $\|u_i\|=1$ and $AA^Tu_i=\sigma_i^2u_i$; extend the $u_i$ and $v_i$ to orthonormal bases and assemble $U,V,\Sigma$ so that $A=U\Sigma V^T$.

Remarks.
- The reduced (economy) SVD keeps only the $r$ positive singular values: $A=U_r\Sigma_r V_r^T$ with $U_r\in\mathbb{R}^{m\times r}$, $V_r\in\mathbb{R}^{n\times r}$, $\Sigma_r\in\mathbb{R}^{r\times r}$.
- Nonzero singular values and the subspaces they define are unique; singular vectors are determined up to orthogonal rotation within eigenspaces for repeated singular values.

Truncated SVD and Eckart–Young (optimality)
-------------------------------------------

For $k\le r$ the rank‑$k$ truncated SVD is
$$A_k:=\sum_{i=1}^k\sigma_i u_i v_i^T = U_k\Sigma_k V_k^T.$$ 

Eckart–Young: for any matrix $B$ with $\operatorname{rank}(B)\le k$,
$$\min_{\operatorname{rank}(B)\le k}\|A-B\|_2=\|A-A_k\|_2=\sigma_{k+1},$$
$$\min_{\operatorname{rank}(B)\le k}\|A-B\|_F=\|A-A_k\|_F=\Big(\sum_{i=k+1}^p\sigma_i^2\Big)^{1/2}.$$ 

Proof (Frobenius norm).

Let $A=U\Sigma V^T$ be the full SVD and write $\widetilde B=U^T B V$. Orthogonality implies
$$\|A-B\|_F=\|\Sigma-\widetilde B\|_F.$$ 
The rank of $\widetilde B$ is at most $k$. Because $\Sigma$ is diagonal, the squared Frobenius error is the sum of squared differences of corresponding entries. Any off‑diagonal entry of $\widetilde B$ only increases the error without reducing diagonal residuals, so the optimal $\widetilde B$ is diagonal. Among diagonal matrices of rank at most $k$ the best choice is to match the largest $k$ diagonal entries of $\Sigma$ and set remaining diagonal entries to zero. Thus the minimizer corresponds to $B=A_k$ and the minimal squared error equals $\sum_{i=k+1}^p\sigma_i^2$.

Proof (operator norm — sketch).

Using the variational characterization of singular values, any rank‑$k$ matrix $B$ maps the $(k+1)$st right singular vector $v_{k+1}$ into a subspace of dimension at most $k$, so one can choose $x=v_{k+1}$ to get
$$\|(A-B)v_{k+1}\|\ge\|A v_{k+1}\|-\|B v_{k+1}\|=\sigma_{k+1}.$$ 
Hence $\|A-B\|_2\ge\sigma_{k+1}$ for all such $B$, and equality is achieved by $B=A_k$.

Consequences and common uses
----------------------------

- Moore–Penrose pseudoinverse: $A^+=V\Sigma^+U^T$ gives the minimal‑norm least‑squares solution $x=A^+b$.
- PCA / data analysis: for centered data $X$, SVD yields principal directions ($V$) and singular values whose squares measure explained variance; truncation implements PCA projection.
- Compression & denoising: truncating small singular values is the optimal low‑rank lossy compression in Frobenius or operator norm (Eckart–Young).
- Numerical practice: dense SVD via bidiagonalization+QR; for large sparse/structured matrices use Lanczos or randomized algorithms to obtain leading singular triplets efficiently.

Short numeric example
---------------------

```python
import numpy as np

A = np.array([[3.,1.,1.],[1.,3.,1.],[1.,1.,3.]])
U,S,Vt = np.linalg.svd(A, full_matrices=False)

# rank-1 truncated approximation
k = 1
A1 = S[0] * np.outer(U[:,0], Vt[0,:])
print('singular values:', S)
print('||A-A1||_2 =', np.linalg.norm(A-A1,2), 'sigma2=', S[1])
print('||A-A1||_F =', np.linalg.norm(A-A1,'fro'))
```

Worked examples (full solutions)
--------------------------------

### Example 1 — 2×2 symmetric matrix (compute SVD)

Let $A=\begin{pmatrix}3&1\\1&3\end{pmatrix}$. Compute SVD step by step.

1. Compute $A^TA=A^2=\begin{pmatrix}10&6\\6&10\end{pmatrix}$.
2. Solve $\det(A^TA-\lambda I)=0$: $(10-\lambda)^2-36=0$ ⇒ $\lambda=16,4$. Thus $\sigma_1=4$, $\sigma_2=2$.
3. Eigenvectors: for $\lambda=16$ solve $(A^TA-16I)v=0$ ⇒ $v\propto(1,1)^T$, normalize $v_1=\frac{1}{\sqrt{2}}(1,1)^T$. For $\lambda=4$ take $v_2=\frac{1}{\sqrt{2}}(1,-1)^T$.
4. Left singular vectors: $u_i=\sigma_i^{-1}A v_i$. Compute $A v_1=4 v_1$, $A v_2=2 v_2$, hence $u_i=v_i$.
5. Assemble
$$U=V=\frac{1}{\sqrt{2}}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad \Sigma=\begin{pmatrix}4&0\\0&2\end{pmatrix},$$
and verify $A=U\Sigma V^T$ by multiplication.

### Example 2 — rank‑1 truncation (3×3 matrix)

Let $A=\begin{pmatrix}3&1&1\\1&3&1\\1&1&3\end{pmatrix}=2I+J$ where $J$ is the all‑ones matrix. Note $J$ has eigenvalues $3$ (eigenvector $\mathbf{1}$) and $0$ (multiplicity 2). Thus $A$ has eigenvalues $5,2,2$ and singular values $5,2,2$.

Normalized principal eigenvector $v_1=\frac{1}{\sqrt{3}}\mathbf{1}$ gives the rank‑1 approximation
$$A_1=5\,v_1v_1^T=\frac{5}{3}J.$$ 
Discarded singular values are $2,2$, so
$$\|A-A_1\|_2=2,\qquad \|A-A_1\|_F=\sqrt{2^2+2^2}=2\sqrt{2}.$$ 
Interpretation: $A_1$ models the common‑mean component; residual contains two orthogonal fluctuation modes.

Practice problems (complete solutions)
-------------------------------------

#### Problem 1 (Computational)

Compute the SVD of

$$A=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$ 
Give $U, \Sigma,$ and $V^T$.

### Solution

Compute $A^TA=I$, so eigenvalues are $1,1$, and singular values are $\sigma_1=1,\sigma_2=1$. Right singular vectors are eigenvectors of $A^TA$, take the standard basis $e_1,e_2$; compute left singular vectors $u_i=\sigma_i^{-1}A v_i$:
$$A e_1 = e_2,\quad A e_2 = e_1.$$ 
Hence one valid choice is
$$U=V=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \Sigma=\begin{pmatrix}1&0\\0&1\end{pmatrix},$$
because $A=U\Sigma V^T=U V^T= A$ (here $U=V=A$). Another common choice is $U=V=I$ with $\Sigma=A$, but the canonical SVD uses orthonormal singular vectors.

### Problem 2 (Theory — Frobenius Eckart–Young)

Let $A=\sum_{i=1}^p\sigma_i u_i v_i^T$. Prove that $A_k=\sum_{i=1}^k\sigma_i u_i v_i^T$ minimizes $\|A-B\|_F$ over all $\operatorname{rank}(B)\le k$.

#### Solution

Let $A=U\Sigma V^T$. For any $B$ with rank $\le k$ write $\widetilde B=U^T B V$. Then $\|A-B\|_F=\|\Sigma-\widetilde B\|_F$ and $\operatorname{rank}(\widetilde B)\le k$. Writing out entries, the squared Frobenius error is
$$\sum_{i=1}^p(\sigma_i-\widetilde B_{ii})^2+\sum_{i\ne j}\widetilde B_{ij}^2+\text{(zero rows/cols contributions)}.$$
For fixed rank the off‑diagonal terms only increase the error, so the best choice makes $\widetilde B$ diagonal. Among diagonal matrices of rank $\le k$, setting the first $k$ diagonal entries equal to $\sigma_1,\dots,\sigma_k$ and the rest to zero minimizes the sum, giving minimal squared error $\sum_{i=k+1}^p\sigma_i^2$ and $B=A_k$.

### Problem 3 (Application — compression accounting)

Suppose $X\in\mathbb{R}^{4\times3}$ has singular values $\sigma_1=12$, $\sigma_2=3$, $\sigma_3=1$. For the rank‑1 approximation $X_1$ compute fraction explained, operator and Frobenius errors, and storage tradeoff.

#### Solution

- Total squared energy: $12^2+3^2+1^2=154$. Rank‑1 explains $12^2/154=144/154\approx0.9351$ (93.5%).
- Operator error: $\|X-X_1\|_2=\sigma_2=3$.
- Frobenius error: $\|X-X_1\|_F=\sqrt{\sigma_2^2+\sigma_3^2}=\sqrt{9+1}=\sqrt{10}\approx3.1623$.
- Storage: original matrix stores $4\times3=12$ scalars. Rank‑1 SVD stores $4$ (entries of $u_1$) + $1$ ($\sigma_1$) + $3$ (entries of $v_1$) = $8$ scalars. Relative storage $8/12=2/3$.

Connections
-----------

- Linear algebra: SVD diagonalizes $A$ in orthonormal bases, relates spectra of $A^TA$ and $AA^T$, and describes range/nullspace structure precisely.
- Numerical analysis: SVD is numerically stable; algorithms include bidiagonalization+QR, Lanczos, and randomized methods. Perturbation results (Weyl, Davis–Kahan) quantify sensitivity via singular values and vectors.
- Optimization: Eckart–Young gives exact low‑rank projections; convex relaxations use the nuclear norm acting on singular values.
- Statistics & ML: PCA is SVD of centered data; truncated SVD gives low‑dimensional embeddings used in dimensionality reduction, LSA, collaborative filtering, and more.

Refinement Process
------------------

- Drafted intuition and formal statements.
- Added constructive existence sketch and reduced SVD notes.
- Proved Eckart–Young for Frobenius norm and sketched the operator‑norm argument.
- Included two worked examples with full step‑by‑step computations and three practice problems with complete solutions.
- Cleaned duplication, tightened proofs, and improved Markdown and notation for final submission.

Further reading
---------------

Golub & Van Loan, Matrix Computations; Trefethen & Bau, Numerical Linear Algebra; Halko, Martinsson & Tropp, "Finding structure with randomness" (randomized SVD).


