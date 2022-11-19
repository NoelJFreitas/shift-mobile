import { createContext } from "react";

interface IAuthContext {
  handleSignIn: (user: string, password: string) => void;
  resetStoreState: () => void;
}

export const AuthContext = createContext<IAuthContext>(null!);
