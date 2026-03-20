import styled from "styled-components";

export const FlipContainer = styled.div<{ $flipped: boolean }>`
  perspective: 800px;
  cursor: pointer;
  width: 100%;
  max-width: 280px;

  .flip-inner {
    position: relative;
    width: 100%;
    min-height: 120px;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    transform: ${(p) => (p.$flipped ? "rotateY(180deg)" : "rotateY(0)")};
  }

  .flip-front,
  .flip-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .flip-front {
    justify-content: center;
  }

  .flip-front {
    background: linear-gradient(135deg, #f5e6c8 0%, #e8d5a3 100%);
    color: #3d2b1f;
    border: 1px solid #c9a96e;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }

  .flip-front-icon {
    font-size: 1.5rem;
  }

  .flip-front-title {
    font-family: "Cinzel Decorative", serif;
    font-size: 1rem;
    font-weight: 600;
  }

  .flip-front-hint {
    font-size: 0.7rem;
    opacity: 0.6;
  }

  .flip-back {
    background: linear-gradient(135deg, #2a1f14 0%, #3d2b1f 100%);
    color: #f5e6c8;
    border: 1px solid #c9a96e;
    transform: rotateY(180deg);
    font-size: 0.85rem;
    line-height: 1.5;
    justify-content: flex-start;
    overflow-y: auto;
  }

  .flip-back-title {
    font-family: "Cinzel Decorative", serif;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #c9a96e;
  }
`;
