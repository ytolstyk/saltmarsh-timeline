type Props = {
  condition: boolean;
  children: React.ReactNode;
};

export function RenderIf({ condition, children }: Props) {
  if (condition) {
    return children;
  }

  return null;
}
