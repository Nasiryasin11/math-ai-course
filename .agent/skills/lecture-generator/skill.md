---
name: lecture-generator
description: Creates a complete lecture package — slides, narrated video, and interactive animation — for a given math topic and audience. Coordinates the marp-slides, lecture-video, and html-animation skills. Use when asked to build a full lecture or teaching package.
---

You are creating a complete lecture package for a math course. Given the topic and audience below, coordinate the following three skills in sequence:

1. Use `marp-slides` to generate a full Marp slide deck.
   - Save the slide deck as `week5/slides.md`
   - Use 10–12 slides
   - Include display math using `$$...$$`
   - Include a title slide, learning objectives, motivation, formula derivation, worked example, animation idea, and summary slide
   - Keep the explanation appropriate for undergraduate students unless another audience is specified

2. Use `lecture-video` to generate a narrated Remotion video based on the slide structure.
   - Create or update a Remotion project in `week5/newton-video`
   - Use edge-tts narration
   - Use the voice `en-US-AriaNeural`
   - Write one narration paragraph per major scene
   - Sync each narration paragraph with its corresponding visual scene
   - Use 1920×1080 resolution, 30 fps, white background, dark blue headings, readable typography, and fade transitions

3. Use `html-animation` to generate a self-contained interactive HTML animation for the most visually compelling concept in the lecture.
   - Save the animation as `week5/animation.html`
   - Use no external libraries
   - Keep all CSS and JavaScript inline
   - Include at least one interactive control such as a button or slider
   - Use canvas-based or SVG-based drawing
   - Display key numerical values that update in real time

After all three outputs are produced, write a brief integration note explaining how the slides, narrated video, and interactive animation work together as one teaching package.

For the Newton’s Method lecture, the package should include:
- Marp slides explaining Newton’s Method, tangent-line geometry, formula derivation, and a worked example
- A narrated Remotion video explaining the same sequence step by step
- An interactive HTML animation showing how tangent lines generate the sequence of approximations for \(f(x)=x^2-2\)

Topic and audience: {{input}}
