import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/infrastructure/store";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
