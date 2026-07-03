# Capstone MCP Log

This log documents the actual tool queries used for the Track C research capstone. It shows how Zotero MCP and NotebookLM were used for literature retrieval, thematic grouping, synthesis, and gap analysis.

---

## Zotero MCP Query 1: Capstone Research Library

**Tool used:** Zotero MCP through VS Code Copilot Agent Mode

**Exact query sent:**

Using the Zotero MCP, search my Zotero library collection "Capstone Research" and list all papers in that collection. Return them as a numbered list with year, title, authors, and one-sentence description. Only use papers from my Zotero library.

**MCP tool calls made:**

Copilot first tried `zotero_search_items` with the input:

`{"query":"Capstone Research","item_type":"-attachment","limit":100,"qmode":"everything"}`

The tool required a collection key rather than only the collection name. Copilot then used `zotero_search_collections` with the input:

`{"query":"Capstone Research"}`

After finding the collection key, Copilot used `zotero_get_collection_items` with the input:

`{"collection_key":"FQ439BV4","detail":"full","limit":100}`

**Response returned:**

All 10 papers were retrieved from the Capstone Research collection:

1. **2002** — *Mimetic Finite Difference Methods for Diffusion Equations* — J. Hyman; J. Morel; M. Shashkov; S. Steinberg — Reviews and extends mimetic finite-difference methods that preserve discrete vector-calculus identities for diffusion in strongly heterogeneous anisotropic materials on nonorthogonal and unstructured grids.

2. **2007** — *A first-order system approach for diffusion equation. I: Second-order residual-distribution schemes* — Hiroaki Nishikawa — Introduces solving diffusion via an equivalent first-order hyperbolic system, yielding O(h) time steps and second-order residual-distribution schemes.

3. **2010** — *A first-order system approach for diffusion equation. II: Unification of advection and diffusion* — Hiroaki Nishikawa — Extends the first-order hyperbolic framework to unify advection and diffusion in a single system with upwind-compatible discretization.

4. **2013** — *High-order entropy stable finite difference schemes for nonlinear conservation laws: Finite domains* — Travis C. Fisher; Mark H. Carpenter — Develops high-order SBP/SAT finite-difference schemes that satisfy discrete entropy inequalities on bounded domains.

5. **2013** — *High-order accurate entropy stable numerical schemes for hyperbolic conservation laws* — Ulrik Skre Fjordholm; Eitan Tadmor; Siddhartha Mishra — Constructs high-order entropy-stable finite-difference and finite-volume schemes for scalar and systems of hyperbolic conservation laws.

6. **2014** — *Entropy Stable Spectral Collocation Schemes for the Navier--Stokes Equations: Discontinuous Interfaces* — Mark H. Carpenter; Travis C. Fisher; Eric J. Nielsen; Steven H. Frankel — Derives provably entropy-stable high-order spectral collocation element methods for compressible Navier-Stokes with stable treatment of discontinuous interfaces.

7. **2016** — *Hyperbolic Navier-Stokes Solver for Three-Dimensional Flows* — Yoshitaka Nakashima; Norihiko Watanabe; Hiroaki Nishikawa — Proposes a 3D solver for Navier-Stokes equations using a first-order hyperbolic formulation for improved robustness and derivative accuracy.

8. **2022** — *An Adaptive Space-Time Hyperbolic Navier-Stokes Solver for Two-Dimensional Unsteady Viscous Flows* — E. Padway; H. Nishikawa — Presents an adaptive-grid space-time solver for 2D unsteady viscous flows using a hyperbolic Navier-Stokes formulation on tetrahedral spacetime grids.

9. **2022** — *Positivity-preserving entropy stable schemes for the 1-D compressible Navier-Stokes equations: First-order approximation* — Johnathon Upperman; Nail K. Yamaleev — Combines entropy stability with pointwise positivity preservation for first-order discretizations of 1D compressible Navier-Stokes.

10. **2026** — *Entropy stable high-order discontinuous Galerkin spectral-element methods on curvilinear, hybrid meshes* — Jens Keim; Anna Schwarz; Patrick Kopper; Marcel Blind; Christian Rohde; Andrea Beck — Constructs entropy-stable high-order DGSEM on curvilinear hybrid meshes using collapsed coordinates and entropy-projected variables.

**How I used this response:**

I used this response to verify that the Zotero collection contained 10 relevant papers for the capstone. I also used it to check author-year citation information before drafting `capstone/introduction.md`.

---

## Zotero MCP Query 2: Thematic Grouping of Papers

**Tool used:** Zotero MCP through VS Code Copilot Agent Mode

**Exact query sent:**

Using the Zotero MCP, group the papers in my "Capstone Research" Zotero collection by research theme. Use the themes entropy stability, positivity preservation, mimetic finite difference methods, first-order hyperbolic reformulations, diffusion equations, and hyperbolic Navier-Stokes solvers. Include author, year, title, and a short explanation of why each paper belongs to the theme.

**Response returned:**

The Zotero MCP returned the following thematic grouping of the 10 papers in the Capstone Research collection.

### Entropy Stability

**Fisher, T.C. & Carpenter, M.H. (2013)**  
*High-order entropy stable finite difference schemes for nonlinear conservation laws: Finite domains*  
Core paper establishing the SBP/SAT finite-difference framework for constructing provably entropy-stable discretizations on bounded domains.

**Fjordholm, U.S.; Tadmor, E.; Mishra, S. (2013)**  
*High-order accurate entropy stable numerical schemes for hyperbolic conservation laws*  
Foundational theoretical treatment of entropy-stable high-order schemes for scalar and systems-level hyperbolic conservation laws, including TECNO constructions.

**Carpenter, M.H.; Fisher, T.C.; Nielsen, E.J.; Frankel, S.H. (2014)**  
*Entropy Stable Spectral Collocation Schemes for the Navier--Stokes Equations: Discontinuous Interfaces*  
Extends entropy-stable SBP design to high-order spectral collocation element methods for compressible Navier-Stokes with entropy-stable interface treatment.

**Keim, J. et al. (2026)**  
*Entropy stable high-order discontinuous Galerkin spectral-element methods on curvilinear, hybrid meshes*  
State-of-the-art entropy-stable DGSEM on all standard element types using collapsed coordinates, generalized SBP operators, and entropy-projected variables.

### Positivity Preservation

**Upperman, J. & Yamaleev, N.K. (2022)**  
*Positivity-preserving entropy stable schemes for the 1-D compressible Navier-Stokes equations: First-order approximation*  
Directly addresses the gap between entropy-stability proofs and physical admissibility by constructing first-order schemes that enforce both entropy stability and positivity of density, pressure, and temperature simultaneously.

### Mimetic Finite Difference Methods

**Hyman, J.; Morel, J.; Shashkov, M.; Steinberg, S. (2002)**  
*Mimetic Finite Difference Methods for Diffusion Equations*  
Reviews and extends mimetic finite-difference operators that satisfy discrete analogues of vector-calculus identities and conservation laws on nonorthogonal, unstructured, and irregular grids for diffusion problems in heterogeneous anisotropic media.

### First-Order Hyperbolic Reformulations

**Nishikawa, H. (2007)**  
*A first-order system approach for diffusion equation. I: Second-order residual-distribution schemes*  
Introduces reformulating the diffusion equation as a first-order hyperbolic system with gradient unknowns, enabling O(h) time steps and simultaneous high-order gradient accuracy.

**Nishikawa, H. (2010)**  
*A first-order system approach for diffusion equation. II: Unification of advection and diffusion*  
Extends the first-order reformulation to the advection-diffusion equation, unifying both terms under a single hyperbolic system and a single upwind discretization strategy.

**Nakashima, Y.; Watanabe, N.; Nishikawa, H. (2016)**  
*Hyperbolic Navier-Stokes Solver for Three-Dimensional Flows*  
Applies first-order hyperbolic reformulation principles to compressible Navier-Stokes in 3D, introducing gradient variables as additional hyperbolic unknowns to replace parabolic viscous terms.

**Padway, E. & Nishikawa, H. (2022)**  
*An Adaptive Space-Time Hyperbolic Navier-Stokes Solver for Two-Dimensional Unsteady Viscous Flows*  
Extends hyperbolic reformulation to adaptive space-time tetrahedral grids, demonstrating improved derivative quality and convergence acceleration for unsteady viscous problems.

### Diffusion Equations

**Nishikawa, H. (2007)**  
*A first-order system approach for diffusion equation. I*  
Directly targets the steady diffusion equation as the baseline problem for the first-order hyperbolic reformulation strategy.

**Nishikawa, H. (2010)**  
*A first-order system approach for diffusion equation. II*  
Generalizes the diffusion reformulation to the advection-diffusion equation, maintaining the diffusion equation as the core model problem.

**Hyman, J. et al. (2002)**  
*Mimetic Finite Difference Methods for Diffusion Equations*  
Focuses on diffusion in heterogeneous anisotropic media as the model PDE for developing mimetic discrete operators.

### Hyperbolic Navier-Stokes Solvers

**Nakashima, Y.; Watanabe, N.; Nishikawa, H. (2016)**  
*Hyperbolic Navier-Stokes Solver for Three-Dimensional Flows*  
First 3D implementation of the hyperbolic Navier-Stokes formulation, demonstrating practical robustness and accuracy for viscous compressible flow on unstructured grids.

**Padway, E. & Nishikawa, H. (2022)**  
*An Adaptive Space-Time Hyperbolic Navier-Stokes Solver for Two-Dimensional Unsteady Viscous Flows*  
Pushes hyperbolic Navier-Stokes to adaptive space-time domains for unsteady viscous flows, with demonstrated convergence and derivative-accuracy advantages over standard parabolic solvers.

**Carpenter, M.H. et al. (2014)**  
*Entropy Stable Spectral Collocation Schemes for the Navier--Stokes Equations: Discontinuous Interfaces*  
Bridges entropy stability and Navier-Stokes themes by providing an entropy-stable high-order spectral collocation discretization for the full compressible Navier-Stokes system.

**How I used this response:**

I used this response to organize the capstone introduction around the major research themes: entropy stability, positivity preservation, mimetic finite differences, first-order hyperbolic reformulations, diffusion equations, and hyperbolic Navier-Stokes solvers. This thematic grouping also helped identify the research gap connecting entropy stability, positivity, boundary treatment, fully discrete robustness, and hyperbolic reformulation.

---

## NotebookLM Query 1: Literature Synthesis

**Tool used:** NotebookLM

**Exact query sent:**

Across the uploaded papers in this notebook, synthesize the literature on entropy-stable high-order numerical methods, first-order hyperbolic reformulations, diffusion equations, and hyperbolic Navier-Stokes solvers. Identify the key research themes, main numerical methods, important results, limitations, and open questions. Organize the answer into sections for themes, methods, results, and gaps.

**Response returned:**

NotebookLM synthesized the uploaded papers around five major themes: entropy stability and robustness, positivity preservation, hyperbolization of viscous terms, geometric flexibility, and mimetic properties. It identified summation-by-parts operators, discontinuous Galerkin spectral element methods, entropy-stable WENO methods, TECNO schemes, hyperbolic Navier-Stokes formulations, and Brenner regularization as the main numerical methods.

NotebookLM also identified several important results across the literature. These included improved efficiency and convergence of hyperbolic Navier-Stokes solvers, high-order derivative accuracy for gradients and viscous quantities, robust shock-capturing behavior in entropy-stable schemes, and verification of entropy-stable DG spectral element methods on hybrid meshes.

The main limitations and open questions identified were entropy-stable boundary conditions, fully discrete entropy and positivity stability, pointwise versus integral stability, complexity on unstructured meshes, and optimal companion operators for shock capturing.

**How I used this response:**

I used this response to create `capstone/literature-synthesis.md`. I also used the themes, methods, results, and open questions from this response to shape the gap-analysis paragraphs in `capstone/introduction.md`.

---

## Summary of MCP and NotebookLM Usage

The Zotero MCP queries confirmed the contents of the Capstone Research collection and organized the 10 papers by theme. The NotebookLM query synthesized the full-text content across the uploaded papers and identified the major methods, results, limitations, and open problems. Together, these tools supported the creation of `capstone/references.bib`, `capstone/literature-synthesis.md`, and `capstone/introduction.md`.