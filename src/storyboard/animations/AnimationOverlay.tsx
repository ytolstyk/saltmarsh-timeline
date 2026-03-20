import { AnimationType } from "../storyboardTypes";
import { FireworksEffect } from "./FireworksEffect";
import { RainEffect } from "./RainEffect";
import { FireEffect } from "./FireEffect";
import { CelebrationEffect } from "./CelebrationEffect";
import { UnderwaterEffect } from "./UnderwaterEffect";
import { ShipRocking } from "./ShipRocking";
import { BattleShake } from "./BattleShake";
import { LightningFlash } from "./LightningFlash";
import { FogEffect } from "./FogEffect";
import { FlyingEffect } from "./FlyingEffect";

interface AnimationOverlayProps {
  animation: AnimationType;
  isActive: boolean;
}

export const AnimationOverlay = ({
  animation,
  isActive,
}: AnimationOverlayProps) => {
  switch (animation) {
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
      return <ShipRocking isActive={isActive} />;
    case "battle-shake":
      return <BattleShake isActive={isActive} />;
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
    case "none":
      return null;
  }
};
