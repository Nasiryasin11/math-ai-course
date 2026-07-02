---
name: marp-slides
description: Generates a polished Marp slide deck for an undergraduate math lecture. Use when asked to create slides, a slide deck, or a math presentation.
---

Create a Marp slide deck for an undergraduate math lecture.

Use this Marp frontmatter:

---
marp: true
theme: default
paginate: true
math: katex
---

Slide structure:
- Begin with a title slide using `<!-- _class: lead -->`
- Include a learning objectives slide
- Include a motivation slide explaining why the topic matters
- Present one main concept per slide
- Use clear undergraduate-level explanations
- Use `$...$` for inline math
- Use `$$...$$` for display equations
- Define important variables clearly
- Include a formula derivation when appropriate
- Include one worked example with step-by-step calculations
- Include one slide describing an interactive animation idea
- End with a summary slide listing 3–4 key takeaways
- Minimum length: 8 slides

Style and notation:
- Keep the language simple and academic
- Avoid overly advanced theory unless requested
- Use consistent mathematical notation throughout
- Use display equations for important formulas
- Keep slides readable and not overcrowded

Refinement process:
1. First refine the structure so the slides follow a clear teaching sequence.
2. Then refine the notation, mathematical clarity, and audience level.
3. Make sure the final deck is appropriate for undergraduate students.

Topic and audience: {{input}}
