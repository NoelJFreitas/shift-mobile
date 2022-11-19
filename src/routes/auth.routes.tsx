import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "../infrastructure/contexts/Auth/AuthProvider";
import SignIn from "../pages/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();
const AuthRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Preload"
      >
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </AuthProvider>
  );
};

export default AuthRoutes;
