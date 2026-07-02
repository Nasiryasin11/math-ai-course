---
name: lecture-video
description: Generates a narrated Remotion video for a math lecture using text-to-speech narration. Use when asked to create a lecture video, narrated video, or animated math video with synced audio.
tags:
  - video
  - remotion
  - narration
  - math
  - tts
applyTo:
  - "**Create** a narrated video"
  - "**Make** a lecture video"
  - "**Generate** an animated video"
  - "**Build** a video with audio"
---

## Overview

Create a narrated math lecture video using Remotion (a React-based video framework) with programmatically generated text-to-speech audio using **edge-tts**. The video renders at 1920×1080, 30 fps, with clean academic typography, LaTeX math rendering, and fade transitions.

**Key workflow:**
1. Define video scenes (title, content slides, summary) with exact frame durations
2. Generate narration script aligned to scene timing
3. Create audio narration using **edge-tts** with the `en-US-AriaNeural` voice
4. Build React components for each slide with KaTeX math rendering
5. Sync audio and visuals using Remotion's `Audio` and `Sequence` components
6. Preview locally and verify timing

## What You Provide

- **Topic:** The lecture subject (e.g., "Newton's Method", "Fundamental Theorem of Calculus")
- **Scene outline:** Number of scenes, content for each, and desired duration (e.g., Scene 1: 5s title, Scene 2: 15s content, Scene 3: 10s summary)
- **Narration approach:** Either provide full script text, or describe key points and let the tool generate narration

## What Gets Generated

### 1. Remotion Project Structure
```
week5/newton-video/
├── src/
│   ├── HelloWorld.tsx      # Main video component (scenes, durations, styling)
│   ├── Root.tsx            # Composition entry point
│   └── HelloWorld/constants.ts
├── public/
│   ├── narration.txt       # Plain-text narration script (one paragraph per scene)
│   └── narration.wav       # Audio asset (TTS-generated)
├── package.json
└── tsconfig.json
```

### 2. Video Component (`HelloWorld.tsx`)
- **Slide array** with heading, bullet lines, optional LaTeX equations
- **Scene durations** array (frames: `[150, 450, 300]` = 5s, 15s, 10s @ 30 fps)
- **Opacity fade logic** (fade in first 10 frames, fade out last 10 frames of each scene)
- **KaTeX rendering** for all math text
- **Audio component** that plays narration.wav throughout

### 3. Narration Script (`public/narration.txt`)
- One paragraph per scene
- ~30 words per 5 seconds of video (~150 words per scene, roughly)
- Written for natural speech cadence
- Scene boundaries clearly marked

### 4. Audio Asset (`public/narration.mp3`)
- Generated using **edge-tts** with voice `en-US-AriaNeural`
- MP3 format, mono, synced to scene timing (Remotion auto-handles playback)

## Example Output

For "Newton's Method" topic with three scenes:

**Video composition:** 900 frames total (30 seconds)
- Scene 1 (frames 0–149): Title + learning objectives
- Scene 2 (frames 150–599): Iteration formula derivation + LaTeX
- Scene 3 (frames 600–899): Summary + convergence example

**Narration:** Three paragraphs matching scene timing and content

**Preview:** Run `npm run dev` to open local Remotion studio at `http://localhost:3000/HelloWorld`

## Implementation Steps

### Step 1: Set Up Remotion
```bash
# If not already created:
npx create-video@latest week5/newton-video
cd week5/newton-video
npm install
```

### Step 2: Define Scenes
- Decide number of scenes and exact frame count for each
- Calculate total video duration
- List content (heading, bullet points, LaTeX equations) for each slide

### Step 3: Generate Narration
- Write script (~30–50 words per scene, matching pacing of visuals)
- Save to `public/narration.txt`

### Step 4: Create Audio with edge-tts
```bash
# Install edge-tts (one-time setup)
pip install edge-tts

# Generate narration MP3 from script
edge-tts \
  --voice en-US-AriaNeural \
  --text "$(cat public/narration.txt)" \
  --write-media public/narration.mp3
```

To see all available US English voices:
```bash
edge-tts --list-voices | grep en-US
```

### Step 5: Build React Component
Create `src/HelloWorld.tsx` with:
- Type definitions for slides (heading, lines, optional equation)
- `SCENE_DURATIONS` array and frame calculation
- Slide data array with content for each scene
- `Slide` component with opacity fade logic
- `HelloWorld` component rendering all scenes as `<Sequence>` blocks
- Audio import: `<Audio src={staticFile("narration.mp3")} />`

### Step 6: Update Root Composition
Modify `src/Root.tsx`:
- Import `VIDEO_DURATION_FRAMES` from HelloWorld
- Set composition duration to `VIDEO_DURATION_FRAMES`
- Add required `defaultProps` object (Remotion v4 requirement)

### Step 7: Verify
```bash
npm run dev
# Open http://localhost:3000/HelloWorld in browser
# Scrub timeline, check audio sync, verify math rendering
```

## Styling Guidelines

| Property | Value |
|----------|-------|
| **Background** | White (`#FFFFFF`) |
| **Text Color** | Dark blue (`#002957`) |
| **Heading Font Size** | 72px, bold |
| **Body Font Size** | 40px, regular |
| **Math Font Size** | 52px |
| **Math Background** | Light blue (`#F3F7FF`) |
| **Line Height** | 1.5 |
| **Padding** | 120px (top/bottom), 140px (left/right) |
| **Fade Duration** | First/last 10 frames of each scene |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Math not rendering | Verify KaTeX LaTeX syntax; check `renderToString` error handling |
| Audio cuts off | Ensure narration duration ≤ video duration; test with `ffmpeg -i public/narration.mp3` |
| edge-tts not found | Install: `pip install edge-tts` |
| Blank scenes | Check opacity interpolation logic; verify frame timing in `slideStartFrames` |
| Port 3000 in use | Kill existing process: `lsof -ti tcp:3000 \| xargs kill -9` |
| Dependencies missing | Run `npm install katex react react-dom remotion zod` |

## Integration with Copilot

**Prompt for Copilot in Plan mode:**

```
Use the lecture-video skill to create a narrated Remotion video on [TOPIC].
Scenes:
- Scene 1 (5s): [content]
- Scene 2 (15s): [content]
- Scene 3 (10s): [content]

Narration: [script or key points]
```

Copilot will generate all files, then instruct you to run `npm run dev` to preview.

## Notes

- **LaTeX equations:** Use double backslashes in TypeScript strings (`\\frac`, `\\sqrt`, etc.)
- **Frame math:** Durations in frames at 30 fps: `5s = 150 frames`, `1s = 30 frames`
- **Audio sync:** Remotion plays audio in real time; manual sync not needed if narration matches visual pacing
- **Reuse:** After first successful video, copy the project folder and modify slides and narration for new topics
