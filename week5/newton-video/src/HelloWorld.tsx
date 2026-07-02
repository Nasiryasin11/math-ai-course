import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { renderToString } from "katex";
import { z } from "zod";
import { FONT_FAMILY } from "./HelloWorld/constants";
import "katex/dist/katex.min.css";

export const myCompSchema = z.object({});

type SlideLine = {
  text: string;
  math?: boolean;
  bold?: boolean;
};

type SlideData = {
  heading: string;
  lines: SlideLine[];
  equation?: string;
};

const SCENE_DURATIONS = [150, 450, 300];

export const VIDEO_DURATION_FRAMES = SCENE_DURATIONS.reduce((sum, duration) => sum + duration, 0);

const slideStartFrames = SCENE_DURATIONS.reduce<number[]>((acc, duration, index) => {
  if (index === 0) {
    return [0];
  }

  return [...acc, acc[index - 1] + SCENE_DURATIONS[index - 1]];
}, []);

const slides: SlideData[] = [
  {
    heading: "Newton’s Method",
    lines: [
      { text: "Finding roots using tangent lines" },
      { text: "Explain the geometric intuition behind the method" },
      { text: "Derive the iteration formula from the tangent line" },
      { text: "Apply it to approximate a root" },
      { text: "Note when the method can fail" },
    ],
  },
  {
    heading: "Newton’s Iteration Formula",
    lines: [
      { text: "Start with x_n on the curve y = f(x)." },
      { text: "Draw the tangent line at (x_n, f(x_n))." },
      { text: "Set the tangent line equal to zero." },
      { text: "Solve for x_{n+1} to update the estimate." },
      { text: "The formula is", bold: false },
      { text: "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}", math: true },
      { text: "For f(x) = x^2 - 2, the iterates approach √2." },
    ],
  },
  {
    heading: "Summary",
    lines: [
      { text: "Newton’s Method approximates roots of", bold: false },
      { text: "f(x) = 0", math: true },
      { text: "It updates x_n to x_{n+1} using the derivative f'(x_n)." },
      { text: "A good initial guess and a smooth function help convergence." },
      { text: "With x₀ = 1 and f(x) = x² - 2, the iterates approach √2." },
    ],
  },
];

const slideContainer: React.CSSProperties = {
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  color: "#002957",
  fontFamily: FONT_FAMILY,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "120px 140px",
  boxSizing: "border-box",
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: 1400,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};

const headingStyle: React.CSSProperties = {
  fontSize: 72,
  fontWeight: 700,
  margin: 0,
  marginBottom: 30,
  lineHeight: 1.05,
};

const lineStyle: React.CSSProperties = {
  fontSize: 40,
  lineHeight: 1.5,
  marginBottom: 18,
};

const equationStyle: React.CSSProperties = {
  fontSize: 52,
  backgroundColor: "#F3F7FF",
  padding: "22px 28px",
  borderRadius: 18,
  marginTop: 20,
  color: "#0F1F47",
  whiteSpace: "nowrap",
};

const bulletStyle: React.CSSProperties = {
  marginBottom: 12,
};

const Slide: React.FC<SlideData & { duration: number }> = ({ heading, lines, equation, duration }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 10, duration - 10, duration],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill style={{ ...slideContainer, opacity }}>
      <div style={card}>
        <h1 style={headingStyle}>{heading}</h1>
        {lines.map((line, index) => (
          <div key={`${line.text}-${index}`} style={{ ...lineStyle, ...bulletStyle }}>
            {line.math ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: renderToString(line.text, {
                    throwOnError: false,
                  }),
                }}
              />
            ) : line.bold ? (
              <strong>{line.text}</strong>
            ) : (
              line.text
            )}
          </div>
        ))}
        {equation ? (
          <div
            style={equationStyle}
            dangerouslySetInnerHTML={{
              __html: renderToString(equation, {
                throwOnError: false,
              }),
            }}
          />
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

export const HelloWorld: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <Audio src={staticFile("narration.mp3")} />
      {slides.map((slide, index) => (
        <Sequence key={index} from={slideStartFrames[index]} durationInFrames={SCENE_DURATIONS[index]}>
          <Slide {...slide} duration={SCENE_DURATIONS[index]} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
