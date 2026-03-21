import styled, { css, keyframes } from "styled-components";
import { media } from "../media";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rock = keyframes`
  0%, 100% { transform: rotate(-1.5deg); }
  50% { transform: rotate(1.5deg); }
`;

const shake = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-1px, 0.5px); }
  30% { transform: translate(1px, -0.5px); }
  50% { transform: translate(-0.5px, 1px); }
  70% { transform: translate(0.5px, -1px); }
  90% { transform: translate(-1px, -0.5px); }
`;

const FALLBACK_GRADIENTS: Record<string, string> = {
  fog: "linear-gradient(135deg, #2c3e50, #4ca1af)",
  "ship-rocking": "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  storm: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
  "battle-shake": "linear-gradient(135deg, #1a1a1a, #4a0000, #1a1a1a)",
  fire: "linear-gradient(135deg, #1a0a00, #4a1500, #8b2500)",
  celebration: "linear-gradient(135deg, #1a0033, #2d0066, #4a0099)",
  lightning: "linear-gradient(135deg, #0a0a2e, #1a1a4e, #0a0a2e)",
  underwater: "linear-gradient(135deg, #001a33, #003366, #004080)",
  flying: "linear-gradient(135deg, #1a3a5c, #2980b9, #6dd5fa)",
  fireworks: "linear-gradient(135deg, #0a0a1a, #1a1a3a, #0a0a1a)",
  "flickering-fire": "linear-gradient(135deg, #1a0800, #3d1400, #6b2800)",
  waves: "linear-gradient(135deg, #001533, #003366, #005080)",
  smoke: "linear-gradient(135deg, #0d0d0d, #1a1a1a, #0d0d0d)",
  none: "linear-gradient(135deg, #1a1a2e, #2d2d44, #1a1a2e)",
};

export const getFallbackGradient = (animation: string) =>
  FALLBACK_GRADIENTS[animation] || FALLBACK_GRADIENTS.none;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  scroll-snap-align: start;
  flex-shrink: 0;
`;

export const BackgroundImage = styled.div<{ $gradient: string; $rocking: boolean; $shaking: boolean }>`
  position: absolute;
  inset: -5%;
  background: ${(p) => p.$gradient};
  z-index: 0;
  transform-origin: center bottom;
  ${(p) => p.$rocking && css`animation: ${rock} 5.2s ease-in-out infinite;`}
  ${(p) => p.$shaking && css`animation: ${shake} 3s ease-in-out infinite; animation-delay: 2s;`}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ContentOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  padding-bottom: 4rem;
  overflow-y: auto;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.85) 100%
  );

  ${media.xs} {
    padding: 1rem;
    padding-bottom: 3rem;
  }

  ${media.lg} {
    overflow-y: visible;
  }
`;

export const SessionBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  backdrop-filter: blur(4px);
  z-index: 3;
`;

export const BookmarkButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: ${(p) => (p.$active ? "#ffd93d" : "rgba(255, 255, 255, 0.7)")};
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  z-index: 3;
  transition:
    color 0.2s,
    transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardTitle = styled.h2`
  font-family: "Cinzel Decorative", serif;
  color: #fff;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin: 0 0 0.75rem 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  animation: ${fadeUp} 0.6s ease-out;
`;

export const StoryText = styled.div`
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.7;
  max-width: 680px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  backdrop-filter: blur(4px);
  animation: ${fadeUp} 0.6s ease-out 0.1s both;

  ${media.xs} {
    font-size: 0.85rem;
    line-height: 1.6;
  }

  ${media.lg} {
    max-width: min(900px, 65vw);
    max-height: 40vh;
    overflow-y: auto;
  }
`;

export const FunFactsRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.6s ease-out 0.2s both;

  ${media.xs} {
    flex-direction: column;
  }
`;

export const ChapterNumber = styled.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: ${fadeUp} 0.6s ease-out;
`;

export const ToggleTextButton = styled.button`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  z-index: 3;
  transition:
    color 0.2s,
    transform 0.2s;

  &:hover {
    transform: scale(1.1);
    color: rgba(255, 255, 255, 0.95);
  }
`;
