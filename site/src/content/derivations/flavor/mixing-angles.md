---
title: "Flavor Mixing Angles (PMNS and CKM)"
status: "stub"
dependsOn: ["particles/three-generations", "gauge/weak-interaction"]
enablesDerivation: []
tags: ["flavor"]
summary: "Deriving neutrino and quark mixing matrices from discrete residual symmetries of the winding-axis geometry"
rigorLevel: "informal"
lastUpdated: 2026-03-09
---

## Target

**Derive the PMNS (lepton) and CKM (quark) mixing matrices from the geometric structure of the three winding axes that generate three particle generations.**

The Three Generations derivation establishes that three particle families arise because dim SO(3) = 3, corresponding to three independent winding axes. The mixing matrices (PMNS for leptons, CKM for quarks) describe how the mass eigenstates relate to the weak-interaction eigenstates. Currently these matrices are measured experimentally with no theoretical prediction of their entries.

A derivation would predict the mixing angles ($\theta_{12}, \theta_{13}, \theta_{23}$) and CP-violating phases ($\delta$) for both sectors.

## Prior Work

The extension papers on neutrino flavor (ideas #5–8, #11) proposed that the icosahedral-dodecahedral ($A_5$) dual geometry determines a flavor-breaking tensor $D = K_{\text{ico}} - K_{\text{dod}}$. Residual discrete symmetries of $A_5$ select the charged-lepton basis (via a 5-fold residual $R_5$) and neutrino basis (via a Klein pair $(R_2^a, R_2^b)$), giving $U_{\text{PMNS}} = U_e^\dagger U_\nu$. Key structural results:

- **Two-sector architecture**: $\theta_{13} \sim \kappa^{0.43}$ (controlled by breaking amplitude $\kappa$), while $\theta_{12}$ and $\theta_{23}$ are set purely by the discrete residual symmetry choice — explaining why the reactor angle is small while solar and atmospheric angles are large.
- **Five discrete CP channels**: Each residual symmetry pair gives a characteristic CP phase $\delta$ and Jarlskog invariant $J$.
- **Geometric preference**: The observed PMNS pattern lies in the top ~2% of geometric configurations (preferred but not fine-tuned).
- **Quark extension**: The same residual symmetry strategy could determine CKM alongside PMNS.

The specific icosahedral Fisher geometry is tied to the prior framework's OC action. The transferable structural insights are: (a) discrete subgroups of SO(3) select bases, (b) the breaking mechanism has a natural geometric scale, (c) the two-sector structure explains the angle hierarchy.

## Proposed Approach

1. **Winding-axis geometry**: The three winding axes in SO(3) define a configuration space. The coherence cost function on this space determines the physics.
2. **Discrete symmetry of coherence cost**: If the coherence cost function has $A_5$ symmetry (the largest non-abelian finite simple subgroup of SO(3)), residual symmetries of $A_5$ select preferred bases for the mass and weak-interaction eigenstates. This is plausible: $A_5$ is the symmetry group of the icosahedron, which is the Platonic solid with the most faces in 3D — it maximizes the approximation to spherical symmetry.
3. **Breaking tensor from anisotropy**: The mass hierarchy (Bootstrap → exponential tunneling) creates anisotropy among the three axes. This anisotropy defines a breaking tensor analogous to $D$ in the prior work. Its direction is geometric; its magnitude sets $\kappa$.
4. **Residual symmetry selection**: Following the discrete flavor symmetry program (Ma, Altarelli-Feruglio, King), identify which residual subgroups of $A_5$ are realized in each sector and compute the resulting mixing matrices.
5. **CKM from the same mechanism**: The quark sector uses the same three axes but with different breaking amplitude (smaller $\kappa$), explaining why CKM is nearly diagonal while PMNS has large angles.

### Structural Postulate Needed

Likely: **Coherence cost respects maximal discrete symmetry** — the coherence cost function on the space of winding configurations has the maximal finite symmetry consistent with 3D (i.e., $A_5$). This is motivated by the framework's location-independence principle and the uniqueness of $A_5$.

## Key Challenges

1. **Justifying $A_5$**: Why $A_5$ specifically, and not $S_4$ or $A_4$ (which are also popular in discrete flavor symmetry models)? The framework needs a principled selection mechanism. $A_5$ is distinguished as the largest non-abelian simple finite subgroup of SO(3), but this needs to connect to a physical requirement.
2. **Quantitative predictions**: Discrete flavor models generically predict mixing angles, but the specific values depend on the residual symmetry choice and breaking parameters. The derivation should either predict which channel is realized or explain the selection mechanism.
3. **CP violation**: Predicting the Dirac CP phase $\delta$ is the cutting edge of neutrino physics (DUNE, Hyper-K). A specific prediction would make this derivation immediately testable.
4. **Quark-lepton complementarity**: The vast difference between CKM (small angles) and PMNS (large angles) is unexplained. The framework flags this as an open problem (Three Generations, Open Gaps). The breaking amplitude $\kappa$ must differ between sectors, and this difference needs explanation.

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Three Generations](/derivations/particles/three-generations) | Three winding axes, dim SO(3) = 3 |
| [Weak Interaction](/derivations/gauge/weak-interaction) | SU(2) gauge structure, weak eigenstates |
| [Mass Hierarchy](/derivations/particles/mass-hierarchy) | Exponential tunneling creating anisotropy |
| [Spin and Statistics](/derivations/particles/spin-statistics) | $\mathbb{Z}_2$ winding classes in SO(3) |

## Success Criteria

1. Derive the PMNS matrix structure (or at least the mixing angle hierarchy: $\theta_{13} \ll \theta_{12} \sim \theta_{23}$)
2. Predict or constrain the Dirac CP phase $\delta$
3. Explain why CKM mixing is small while PMNS mixing is large
4. Require at most one structural postulate
5. Make at least one testable prediction distinguishable from other flavor models
