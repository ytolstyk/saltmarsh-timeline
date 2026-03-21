export type AnimationType =
  | "fireworks"
  | "ship-rocking"
  | "rain"
  | "lightning"
  | "battle-shake"
  | "fog"
  | "fire"
  | "celebration"
  | "underwater"
  | "flying"
  | "storm"
  | "flickering-fire"
  | "waves"
  | "smoke"
  | "none";

export interface FunFact {
  title: string;
  content: string;
}

export interface StoryCardData {
  id: string;
  session: number;
  chapter: number;
  title: string;
  story: string;
  imagePrompt: string;
  backgroundImage: string;
  animation: AnimationType[];
  funFacts: FunFact[];
}
