---
title: "From Observation to Axioms"
status: "stub"
dependsOn: []
enablesDerivation: ["axioms/coherence-conservation", "axioms/observer-definition", "axioms/loop-closure"]
tags: ["foundation", "axioms"]
summary: "Bridge page from the operational definition of observation to the formal mathematical structure of the three axioms — operational starting points, the bridge program, and the postulate classification scheme"
rigorLevel: "informal"
lastUpdated: 2026-04-11
---

## Overview

This page sits upstream of the three axiom derivations and answers a question the axiom pages do not currently answer on their own: **how do we get from the operational definition of observation in the [Motivation](/motivation) to the formal mathematical apparatus the axioms introduce?**

The Motivation page describes the project's starting point:

> Observation is the residue of interaction, remembered. An observer is a system that has an identity, participates in interactions, and maintains its identity through those interactions.

The three axiom pages, in their current form, present formal objects — σ-algebras, Hausdorff topologies, smooth one-parameter dynamics, U(1) symmetry — without showing how those formal objects are forced (or merely permitted) by the operational definition. A reader who wants to verify that "the framework follows from three axioms about observers" rather than "the framework follows from a richly structured mathematical setting that happens to be motivated by observerhood" cannot reconstruct the bridge from the existing pages alone.

This page exists to make the bridge explicit. It does three things:

1. **Sharpens the operational definitions** from the Motivation page into stipulative definitions a mathematician can act on.
2. **Maps each operational requirement to its formal target** in the three axiom pages — a bridge program, not a proof.
3. **Declares a postulate classification scheme** that the axiom pages then apply to their own formal apparatus: bucket A (forced once the operational requirement is stated precisely) vs. bucket B (genuinely additional content with irreducible physical input).

The actual derivations — the proofs that a given formal element is forced or the honest statements that it is additional — live in the axiom pages themselves. This page is the dictionary and the program statement; the axiom pages are the work.

**Discipline.** The bridge program is built bottom-up: the axiom pages do their derivations first, and this page is then synthesized from what they actually achieved. The bucket-A/bucket-B classification at the end of this page is the *empirical result* of the per-axiom work, not a top-down declaration. This sequencing prevents the bridge page from over-promising what the axiom pages can deliver.

> **Status: stub.** This page is currently a planning skeleton. Its operational definitions are extracted from the Motivation page but not yet sharpened to mathematical-stipulation form. Its bridge-program table and postulate classification are placeholders to be filled in once the three axiom pages have completed their bridge-work surgery. See [issue tracking](https://github.com/tpresley/observer-centrism/issues) for the in-progress status.

## Operational Starting Points

<!-- TODO Stage 4: replace this section with sharpened, mathematician-actionable stipulative definitions. The placeholders below are extracted from the Motivation page and are not yet in the form the axiom pages should cite. -->

The operational definitions below are the canonical starting points that the three axiom pages will cite as the source of their formal targets. They are extracted from the [Motivation](/motivation) page and stated here in a form that strips colloquial framing and isolates the operational content.

### Definition 1 (Observation)

**To observe is to interact with a separate system in a way that updates the observing system's state without destroying it in the process.** Observation is the residue of interaction, remembered.

Operational content:
- There are at least two systems involved (the observer and the observed) that are operationally distinguishable from each other.
- The interaction modifies the observer's internal state.
- The modification persists after the interaction ends — observation produces a *residue*.
- The observer survives the interaction — its identity is preserved across the modification.

### Definition 2 (Observer)

**An observer is a system that has an identity, participates in interactions, and maintains its identity through those interactions.**

Operational content:
- An observer has an *identity* — something that distinguishes it from non-observer systems and from other observers.
- An observer has *internal states* — configurations that can be modified by interactions while the identity persists.
- An observer participates in interactions of the kind described in Definition 1.
- The identity is *maintained through* (not destroyed by) those interactions.

### Definition 3 (Persistence)

**An observer persists if it continues to satisfy Definition 2 over the course of repeated interactions.**

Operational content:
- Persistence is defined relative to repeated interaction, not relative to a clock or time parameter.
- Persistence requires that the observer remain in a configuration that still satisfies Definition 2 after each interaction.
- An observer that loses its identity in any interaction has not persisted.

### Definition 4 (Closed ontology)

**The universe of all observers and observed systems is closed: there is no external reservoir from which new content can flow in or to which content can leak out.**

Operational content:
- The total "stuff" of reality is bounded.
- Operationally, this means any interaction is *between* systems that are already part of the universe — interactions do not create new ontology.

<!-- TODO Stage 4: confirm whether Definition 4 is genuinely operational or whether it should be folded into the closure assumption of Axiom 1. The current draft treats it as operational because the Motivation page implies it via "the world is explicable" framing, but it may be a stipulation rather than a definition. -->

### Definition 5 (Composition)

**Given two observers, their composite — the system consisting of both, together with any relational structure between them — is itself a system capable of observation.**

Operational content:
- If two systems can each observe, their combination can also observe.
- The composite *contains* its sub-observers: any information a sub-observer has about an external system, the composite also has, because the sub-observer is a part of it.
- Widening the observer boundary (including additional sub-observers in the composite) is not an interaction — it does not create or destroy residue (Definition 1). The existing relational coherence between a sub-observer and an external system persists when the boundary is widened.
- Composition is the operational basis of the bootstrap mechanism (derived later): observers can build hierarchies of composite observers through repeated interaction.

## The Bridge Program

<!-- TODO Stage 4: replace placeholder rows with concrete results from each axiom page's Step 0. Each row should point to the specific theorem/proposition/lemma in the relevant axiom page that does the bridge work. -->

The table below maps each operational requirement to the formal target in the axiom pages that derives it. This is the **program** — an assertion of what the axiom pages will show, not a proof that they have shown it.

| Operational requirement (from above) | Formal target | Where derived | Bucket (A/B) |
|---|---|---|---|
| Definition 1 + 2: systems are operationally distinguishable | σ-algebra of admissible subsystems | [Coherence Conservation](/derivations/axioms/coherence-conservation), Step 0 | TBD |
| Definition 4: closed ontology | Conserved measure with `C(H) = C_0` | Coherence Conservation, Step 0 | TBD |
| Definition 1: interaction does not create currency | Subadditivity (C4) | Coherence Conservation, Step 0 | TBD |
| Definition 5 + 1: composites contain sub-observers, widening boundary is not an interaction | Strong subadditivity (C5) | Coherence Conservation, Step 0 | TBD |
| Persistence over repeated interaction (no clock) | Conservation across DAG Cauchy slices | Coherence Conservation, Step 0 | TBD |
| Definition 2: identity-through-change | Triple `(Σ, I, B)` — state space + invariant + boundary | [Observer Definition](/derivations/axioms/observer-definition), Step 0 | TBD |
| Definition 2: operational distinguishability of configurations | Hausdorff topology on `H` | Observer Definition, Step 0 | TBD |
| Definition 2: admissible transformations preserve identity | Automorphism group of homeomorphisms preserving `A` and `C` | Observer Definition, Step 0 | TBD |
| Definition 3: persistence under repeated interaction | Self-referential one-parameter dynamics | [Loop Closure](/derivations/axioms/loop-closure), Step 0 | TBD |
| Definition 3 + finite resources: dynamics must close | Exact periodicity and U(1) symmetry | Loop Closure, Step 0 | TBD |

## Postulate Classification Scheme

<!-- TODO Stage 4: replace this section with the empirical aggregation of bucket-A and bucket-B classifications from the three axiom pages. Include a list of which postulates are genuinely irreducible after the bridge work. -->

The framework's structural postulates fall into two categories:

**Bucket A — Forced once the operational requirement is stated precisely.** A formal element is in bucket A if, given a precise operational definition, the formal element is a logical consequence (not a chosen package). For example, "subsystems are closed under operational composition" forces the σ-algebra closure properties; no choice is involved once the operational requirement is granted.

**Bucket B — Genuinely additional content with irreducible physical input.** A formal element is in bucket B if it requires content beyond what the operational definition entails. Bucket B postulates are honest additions: smooth dynamics, the exclusion of quasi-periodicity in favor of exact closure, and similar choices that go beyond pure operational observerhood.

The key methodological commitment is that **each formal element introduced in any axiom page must carry an explicit bucket label**, with the operational requirement that forces it (bucket A) or the additional physical input it requires (bucket B). This makes the framework's actual content visible: the project's claim is not "physics from operational observerhood alone" but "physics from operational observerhood + a small, honest, declared set of additional inputs."

The bucket-A/bucket-B aggregation across all three axiom pages is the **empirical result** of the bridge work, summarized below once Stages 1–3 are complete.

<!-- TODO Stage 4: replace placeholder with actual aggregate. -->

| Axiom page | Bucket A items | Bucket B items |
|---|---|---|
| Coherence Conservation | TBD | TBD |
| Observer Definition | TBD | TBD |
| Loop Closure | TBD | TBD |
| **Total** | **TBD** | **TBD** |

## What This Page Does Not Do

This page does *not* prove anything. The proofs live in the axiom pages. This page:

- States the operational definitions in a form the axiom pages can cite
- Asserts the bridge program (the table above) as a target
- Declares the classification scheme

If the axiom pages fail to deliver on a bridge-program row, the row is updated to reflect what they actually achieved — the program is honest about its results, not aspirational.

## Open Gaps

<!-- TODO Stage 4: list any operational requirements that no axiom page successfully bridges, and any bucket-B items that the project would like to eventually move to bucket A but currently cannot. -->

To be filled in after Stages 1–3 are complete.

## Provenance

This page was created in response to an external critique (2026-04-11) that traced the foundational chain backward and correctly identified that the axiom pages skip the bridge from operational definitions to formal mathematical structure. The hybrid approach — one upstream bridge page plus per-axiom Step 0 surgery, sequenced bottom-up — is the agreed fix. See the project's planning notes and the related Born rule audit ([issue #2](https://github.com/tpresley/observer-centrism/issues/2)) for the parallel work on a different instance of the same pattern.
