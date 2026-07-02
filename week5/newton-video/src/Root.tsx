import "./index.css";
import { Composition } from "remotion";
import { HelloWorld, myCompSchema, VIDEO_DURATION_FRAMES } from "./HelloWorld";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={VIDEO_DURATION_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{}}
      />
    </>
  );
};
