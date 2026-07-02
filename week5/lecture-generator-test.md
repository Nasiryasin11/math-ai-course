# Lecture Generator Skill Test

## Skill Tested
`/lecture-generator`

## Test Topic
Taylor Series Approximation

## Audience
Undergraduate Calculus II students

## Test Prompt
/lecture-generator Create a complete lecture package for Taylor Series Approximation for undergraduate Calculus II students. The package should include Marp slides, a narrated Remotion video with edge-tts narration, and a self-contained HTML animation showing how Taylor polynomials approximate \(e^x\) as the degree increases.

## Coordinated Outputs

1. The `marp-slides` skill generates a 10–12 slide Marp deck explaining Taylor polynomials, Maclaurin series, notation, worked examples, and a summary.

2. The `lecture-video` skill generates a narrated Remotion video based on the slide structure, with one narration paragraph per scene and edge-tts voice `en-US-AriaNeural`.

3. The `html-animation` skill generates a self-contained HTML animation with a slider controlling the Taylor polynomial degree and a graph comparing \(e^x\) with its Taylor approximation.

## Integration Note
The slides introduce the mathematical ideas and notation, the narrated video explains the lecture step by step, and the interactive animation allows students to visually explore how Taylor polynomial approximations improve as the degree increases.

## Reflection
This test used a topic different from the Week 5 Newton’s Method lecture. The hierarchical skill structure shows how one input can coordinate slides, video narration, and an interactive animation into a complete teaching package.
