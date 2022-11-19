import Login from "./src/pages/login";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/infrastructure/store";
import { AuthProvider } from "./src/infrastructure/contexts/Auth/AuthProvider";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AuthProvider>
        <Login />
      </AuthProvider>
    </Provider>
  );
}
