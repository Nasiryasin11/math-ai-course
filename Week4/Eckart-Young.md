# Eckart–Young–Mirsky Theorem (Markdown)

## Intuition

- A matrix acts by stretching along orthogonal directions (its singular vectors) by amounts equal to its singular values. The largest singular values determine the dominant action.
- To approximate a matrix by one of lower rank, keep the principal directions with the largest singular values and discard the rest; this preserves the dominant stretchings while removing weaker components (often noise).
- Geometrically: approximate the image ellipsoid of the unit sphere by another ellipsoid that uses only the largest semi-axes.

## Formal Statement (Eckart–Young–Mirsky)

Let $A\in\mathbb{R}^{m\times n}$ have SVD $A=U\Sigma V^{T}$ with singular values $\sigma_1\ge\sigma_2\ge\dots\ge0$ and rank $r$. For 0\le k < r define the truncated SVD
$$
A_k = \sum_{i=1}^k \sigma_i u_i v_i^{T} = U_k \Sigma_k V_k^{T}.
$$
Then for any matrix $B$ with $\mathrm{rank}(B)\le k$,

- Frobenius norm:
$$
\min_{\mathrm{rank}(B)\le k} \|A-B\|_F = \|A-A_k\|_F = \left(\sum_{j>k}\sigma_j^2\right)^{1/2}.
$$
- Operator (spectral) norm:
$$
\min_{\mathrm{rank}(B)\le k} \|A-B\|_2 = \|A-A_k\|_2 = \sigma_{k+1}.
$$

More generally, $A_k$ minimizes the error for any unitarily invariant norm (any norm that depends only on the singular values).

## Notation and assumptions

- $A=U\Sigma V^{T}$ is the SVD with orthonormal columns $u_i, v_i$ and nonnegative singular values $\sigma_i$.
- $\|\cdot\|_2$ denotes the operator norm; $\|\cdot\|_F$ denotes the Frobenius norm.
- When singular values repeat at the cutoff, minimizers need not be unique; solutions are unique when $\sigma_k>\sigma_{k+1}$.

## Proof (sketch with reasoning)

1. Reduction by unitary invariance:
- Step: Conjugate by $U^{T}$ and $V$ to reduce the approximation problem to approximating the diagonal matrix $\Sigma$ by a rank-$k$ matrix $C$.
- Reason: Unitarily invariant norms satisfy $\|A-B\|=\|U^{T}AU-V^{T}BV\|$, and $U^{T}AV=\Sigma$, so we may minimize $\|\Sigma-C\|$ over $\mathrm{rank}(C)\le k$.

2. Frobenius norm minimization:
- Step: Observe $\|\Sigma-C\|_F^2$ equals the sum of squared differences between diagonal entries of $\Sigma$ and entries of $C$; any off-diagonal entries of $C$ only increase this sum.
- Reason: For diagonal $\Sigma$, matching its largest diagonal entries exactly yields the least squared error; a rank-$k$ matrix can perfectly match at most $k$ independent diagonal entries. Thus the minimal residual squared norm equals $\sum_{j>k}\sigma_j^2$.

3. Operator norm minimization:
- Step: Use the fact that a rank-$k$ perturbation changes at most $k$ singular values (Weyl interlacing). Hence the (k+1)-th singular value of the residual is at least $\sigma_{k+1}$.
- Reason: The orthogonal coordinate corresponding to $\sigma_{k+1}$ in $\Sigma$ cannot be removed by a rank-$k$ matrix; therefore the spectral norm of the residual is at least $\sigma_{k+1}$, and equality is achieved by truncation.

4. Unitarily invariant norms:
- Step: Apply majorization and von Neumann or Ky Fan inequalities: the vector of singular values of residual is minimized (in the majorization ordering) by truncation.
- Reason: Truncation yields the least-change pattern on singular values consistent with a rank-$k$ approximant.

## Example

Suppose $A$ has singular values $(5,3,1,0,\dots)$. For $k=1$ the best rank-1 approximant $A_1$ uses only $5$ and yields errors:

- Spectral error: $\|A-A_1\|_2 = 3$. 
- Frobenius error: $\|A-A_1\|_F = \sqrt{3^2+1^2+\dots} = \sqrt{10}$.

This demonstrates numerically that truncation preserves the dominant mode and quantifies residual energy.

## Connections

- PCA: Eckart–Young shows why PCA (keeping top principal components) minimizes reconstruction error in least-squares sense.
- Numerical linear algebra: basis for low-rank compression, model reduction, and data denoising.
- Optimization: closed-form solution to rank-constrained least-squares problem; informs convex relaxations via nuclear norm.
- Inverse problems: truncated SVD acts as a spectral filter to stabilize ill-posed inverses; related to Tikhonov regularization.

## Common mistakes

- Zeroing small matrix entries (entrywise thresholding) is not equivalent to optimal low-rank approximation; must truncate in SVD basis.
- Confusing uniqueness: repeated singular values permit non-unique singular vectors (only the subspace is unique).
- Mixing up norms: spectral norm error equals $\sigma_{k+1}$, Frobenius accumulates squared discarded singular values.

## Further reading

- Golub & Van Loan, "Matrix Computations".
- Horn & Johnson, "Matrix Analysis" (unitarily invariant norms, von Neumann's trace inequality).
