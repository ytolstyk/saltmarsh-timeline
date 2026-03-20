import styled, { keyframes } from "styled-components";
import { media } from "../media";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ListPage = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 2rem;

  ${media.xs} {
    padding: 1rem;
  }
`;

export const ListHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ListTitle = styled.h1`
  font-family: "Cinzel Decorative", serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #f5e6c8;
  margin: 0 0 0.5rem 0;
`;

export const ListSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin: 0;
`;

export const SearchBar = styled.div`
  max-width: 400px;
  margin: 0 auto 2rem auto;

  input {
    width: 100%;
    padding: 0.6rem 1rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    color: white;
    font-size: 0.9rem;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.12);
    }
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardThumbnail = styled.div<{
  $gradient: string;
  $bookmarked: boolean;
}>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 16 / 10;
  background: ${(p) => p.$gradient};
  transition: transform 0.2s, box-shadow 0.2s;
  animation: ${fadeIn} 0.4s ease-out both;
  border: ${(p) =>
    p.$bookmarked
      ? "2px solid rgba(255, 217, 61, 0.6)"
      : "2px solid transparent"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ThumbnailOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
`;

export const ThumbnailSession = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`;

export const ThumbnailTitle = styled.span`
  font-family: "Cinzel Decorative", serif;
  color: white;
  font-size: 1.1rem;
`;

export const ThumbnailBookmark = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.6rem;
  font-size: 1.1rem;
  color: #ffd93d;
`;

export const BackLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.85rem;
  display: inline-block;
  margin-bottom: 1rem;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
