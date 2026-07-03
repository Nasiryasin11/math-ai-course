# Capstone Literature Synthesis

## NotebookLM Query

**Exact query sent:**

Across the uploaded papers in this notebook, synthesize the literature on entropy-stable high-order numerical methods, first-order hyperbolic reformulations, diffusion equations, and hyperbolic Navier-Stokes solvers. Identify the key research themes, main numerical methods, important results, limitations, and open questions. Organize the answer into sections for themes, methods, results, and gaps.

## NotebookLM Response

The literature across these sources focuses on advancing high-order numerical methods for fluid dynamics by integrating entropy stability, positivity preservation, and the hyperbolization of diffusion to achieve robust simulations on complex, unstructured grids.

## Key Research Themes

### 1. Entropy Stability and Robustness

A central theme is the development of schemes that satisfy a discrete entropy inequality, which provides a stronger nonlinear stability estimate than linear analysis. This is especially important for high-order methods, which can become unstable in the presence of under-resolved flow features, discontinuities, or shocks.

### 2. Positivity Preservation

Ensuring that thermodynamic variables such as density, pressure, and temperature remain positive is critical. Negative values can invalidate entropy-stability proofs and cause catastrophic numerical failure. Several papers therefore combine entropy stability with positivity-preserving mechanisms.

### 3. Hyperbolization of Viscous Terms

The Hyperbolic Navier-Stokes approach reformulates parabolic diffusion terms as a first-order hyperbolic system. This unifies the treatment of advection and diffusion, simplifies viscous discretization, and can improve computational efficiency.

### 4. Geometric Flexibility

Recent research increasingly focuses on extending high-order stable methods to unstructured, hybrid, and curvilinear meshes, including tetrahedral, prismatic, pyramidal, quadrilateral, and hexahedral elements. This is important for practical simulations involving complex geometries.

### 5. Mimetic Properties

Another important theme is the construction of mimetic discretizations that preserve fundamental identities and theorems of vector and tensor calculus at the discrete level. These properties support conservation, stability, and consistency on irregular grids.

## Main Numerical Methods

### 1. Summation-by-Parts Operators

Summation-by-parts operators are central to entropy-stable schemes because they mimic integration by parts at the discrete level. This property helps control interface and boundary contributions in high-order methods.

### 2. Discontinuous Galerkin Spectral Element Methods

Discontinuous Galerkin spectral element methods are extended to hybrid and curvilinear meshes using collapsed coordinate transformations, entropy-projected variables, and modal formulations. These methods seek high-order accuracy while avoiding severe time-step restrictions.

### 3. Entropy-Stable WENO Methods

Entropy-stable WENO methods combine shock-capturing capability with entropy-stability corrections. They are designed to handle discontinuities while preventing entropy-violating numerical behavior.

### 4. TECNO Schemes

TECNO schemes combine entropy-conservative fluxes with ENO reconstruction procedures. The ENO sign property is used to construct high-order accurate finite difference schemes that remain entropy stable.

### 5. Hyperbolic Navier-Stokes Formulations

Hyperbolic Navier-Stokes formulations, such as HNS20G, introduce gradient variables as additional unknowns. This allows viscous and inviscid terms to be treated using upwind-type discretizations in a unified first-order framework.

### 6. Brenner Regularization

Brenner regularization adds artificial dissipation inspired by the Brenner-Navier-Stokes equations. This approach can help guarantee pointwise positivity and entropy stability for compressible Navier-Stokes discretizations.

## Important Results

### 1. Improved Efficiency and Convergence

Hyperbolic Navier-Stokes solvers can allow time steps proportional to the mesh size rather than the square of the mesh size. This can improve convergence to steady states compared with conventional parabolic viscous discretizations.

### 2. High-Order Derivative Accuracy

A major benefit of hyperbolic reformulations is that gradients, viscous stresses, vorticity, and heat fluxes can be computed with the same order of accuracy as the primary solution variables. This is especially useful on irregular and adaptive grids.

### 3. Robust Shock Capturing

Entropy-stable methods such as entropy-stable WENO and TECNO schemes are designed to resolve strong discontinuities while avoiding the spurious oscillations and nonlinear instabilities often observed in standard high-order schemes.

### 4. Verification on Hybrid Meshes

Entropy-stable DG spectral element methods on mixed-element grids have been shown to preserve free-stream solutions and achieve design-order convergence on curvilinear elements.

## Limitations and Open Questions

### 1. Entropy-Stable Boundary Conditions

Although interior entropy-stable operators are well developed, constructing physical boundary conditions for Navier-Stokes equations that strictly preserve nonlinear entropy stability remains challenging.

### 2. Fully Discrete Stability

Many entropy-stability proofs are semi-discrete. Developing temporal integration schemes that preserve entropy stability and positivity while allowing efficient time stepping remains an active research area.

### 3. Pointwise Versus Integral Stability

A scheme may satisfy a global entropy estimate but still experience pointwise failures such as negative pressure or density in extreme tests. This creates a need for methods that combine entropy stability with pointwise admissibility preservation.

### 4. Complexity on Unstructured Meshes

Efficient construction of high-order entropy-conservative and entropy-stable fluxes is relatively straightforward on structured grids, but it remains computationally expensive and technically difficult on general multidimensional unstructured meshes.

### 5. Optimal Companion Operators for Shock Capturing

For shock-capturing methods, identifying the best companion operator, such as WENO, MUSCL, or DG-based dissipation, remains an open question. The challenge is to balance accuracy, robustness, and computational efficiency near discontinuities.