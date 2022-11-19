import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "../infrastructure/contexts/Auth/AuthProvider";
import Home from "../pages/Home";
import Exames from "../pages/Exames";
import ExamesLab from "../pages/ExamesLab";

const { Navigator, Screen } = createNativeStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Exames" component={Exames} />
        <Screen name="ExamesLab" component={ExamesLab} />
      </Navigator>
    </AuthProvider>
  );
};

export default AppRoutes;
