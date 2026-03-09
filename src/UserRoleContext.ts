import { createContext, useContext } from "react";

export type UserRole = "guest" | "user" | "admin";

export type UserRoleContextType = {
  role: UserRole;
  isGuest: boolean;
  isAdmin: boolean;
  isAuthenticated: boolean;
};

export const UserRoleContext = createContext<UserRoleContextType>({
  role: "guest",
  isGuest: true,
  isAdmin: false,
  isAuthenticated: false,
});

export function useUserRole() {
  return useContext(UserRoleContext);
}
