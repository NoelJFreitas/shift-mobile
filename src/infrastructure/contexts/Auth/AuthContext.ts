import { createContext } from "react";

interface IAuthContext {
  handleSignIn: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>(null!);
