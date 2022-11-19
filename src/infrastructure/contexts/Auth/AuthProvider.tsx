import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Alert } from "react-native";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import {
  isLoggingIn,
  isAuthenticating,
  authenticationError,
  resetState,
} from "../../store/reducers/authSlice";

interface IChildren {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const dispath = useAppDispatch();

  function handleSignIn(user: string, password: string) {
    if (user === "" && password === "") {
      Alert.alert("Preencha os campos", "os campos não podem estar em branco");
    } else {
      dispath(isAuthenticating());
      setTimeout(() => {
        if (user === "shift" && password === "shift") {
          dispath(isLoggingIn());
        } else {
          Alert.alert("Erro", "Usuário ou senha incoretos");
          dispath(resetState());
        }
      }, 2000);
    }
  }

  function resetStoreState() {
    dispath(resetState());
  }

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        resetStoreState,
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
