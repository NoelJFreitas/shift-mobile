import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { isLoggingIn, isAuthenticating } from "../../store/reducers/authSlice";

interface IChildren {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const dispath = useAppDispatch();

  async function handleSignIn() {
    dispath(isAuthenticating());
    setTimeout(async () => {
      const { data, status } = await new Promise<{
        data: string;
        status: number;
      }>((resolve, reject) =>
        resolve({ data: "sa212asd2as1das", status: 200 })
      );
      if (status === 200) {
        dispath(isLoggingIn(data));
      }
    }, 3000);
  }

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
