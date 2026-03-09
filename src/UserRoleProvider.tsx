import { useEffect, useState, type ReactNode } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { UserRoleContext, type UserRole } from "./UserRoleContext";

type Props = {
  isGuest: boolean;
  children: ReactNode;
};

export function UserRoleProvider({ isGuest, children }: Props) {
  const [role, setRole] = useState<UserRole>(isGuest ? "guest" : "user");

  useEffect(() => {
    if (isGuest) {
      setRole("guest");
      return;
    }

    fetchAuthSession()
      .then((session) => {
        const groups = session.tokens?.accessToken?.payload[
          "cognito:groups"
        ] as string[] | undefined;
        setRole(groups?.includes("saltmarsh-admin") ? "admin" : "user");
      })
      .catch(() => {
        setRole("user");
      });
  }, [isGuest]);

  const value = {
    role,
    isGuest: role === "guest",
    isAdmin: role === "admin",
    isAuthenticated: role !== "guest",
  };

  return (
    <UserRoleContext.Provider value={value}>
      {children}
    </UserRoleContext.Provider>
  );
}
