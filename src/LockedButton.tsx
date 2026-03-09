import { Button, Tooltip, type ButtonProps } from "@mantine/core";
import type { ReactNode } from "react";

type Props = ButtonProps & {
  locked: boolean;
  lockedReason: string;
  onClick?: () => void;
  children: ReactNode;
};

export function LockedButton({ locked, lockedReason, children, onClick, ...buttonProps }: Props) {
  if (!locked) {
    return (
      <Button onClick={onClick} {...buttonProps}>
        {children}
      </Button>
    );
  }

  return (
    <Tooltip label={lockedReason}>
      <span style={{ display: "contents" }}>
        <Button disabled {...buttonProps}>
          {children}
        </Button>
      </span>
    </Tooltip>
  );
}
