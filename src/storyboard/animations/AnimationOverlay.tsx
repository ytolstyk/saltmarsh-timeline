import { AnimationType } from "../storyboardTypes";
import { FireworksEffect } from "./FireworksEffect";
import { RainEffect } from "./RainEffect";
import { FireEffect } from "./FireEffect";
import { CelebrationEffect } from "./CelebrationEffect";
import { UnderwaterEffect } from "./UnderwaterEffect";
import { LightningFlash } from "./LightningFlash";
import { FogEffect } from "./FogEffect";
import { FlyingEffect } from "./FlyingEffect";
import { FlickeringFireEffect } from "./FlickeringFireEffect";
import { WavesEffect } from "./WavesEffect";
import { SmokeEffect } from "./SmokeEffect";

interface AnimationOverlayProps {
  animation: AnimationType[];
  isActive: boolean;
}

const SingleAnimation = ({
  type,
  isActive,
}: {
  type: AnimationType;
  isActive: boolean;
}) => {
  switch (type) {
    case "fireworks":
      return <FireworksEffect isActive={isActive} />;
    case "rain":
      return <RainEffect isActive={isActive} />;
    case "fire":
      return <FireEffect isActive={isActive} />;
    case "celebration":
      return <CelebrationEffect isActive={isActive} />;
    case "underwater":
      return (
        <>
          <UnderwaterEffect isActive={isActive} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 80, 120, 0.15)",
              pointerEvents: "none",
            }}
          />
        </>
      );
    case "ship-rocking":
      return null;
    case "battle-shake":
      return null;
    case "lightning":
      return <LightningFlash isActive={isActive} />;
    case "fog":
      return <FogEffect isActive={isActive} />;
    case "flying":
      return <FlyingEffect isActive={isActive} />;
    case "storm":
      return (
        <>
          <RainEffect isActive={isActive} />
          <LightningFlash isActive={isActive} />
        </>
      );
    case "flickering-fire":
      return <FlickeringFireEffect isActive={isActive} />;
    case "waves":
      return <WavesEffect isActive={isActive} />;
    case "smoke":
      return <SmokeEffect isActive={isActive} />;
    case "none":
      return null;
  }
};

export const AnimationOverlay = ({
  animation,
  isActive,
}: AnimationOverlayProps) => {
  return (
    <>
      {animation.map((type, i) => (
        <SingleAnimation key={i} type={type} isActive={isActive} />
      ))}
    </>
  );
};
