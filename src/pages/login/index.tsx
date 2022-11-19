import SinginInput from "../../components/SinginInput";
import LoadingIndicator from "../../components/loadingIndicator";
import { useAuthContext } from "../../infrastructure/contexts/Auth/AuthProvider";
import { useAppSelector } from "../../infrastructure/store/hooks/useAppSelector";
import styles from "./styles";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const shiftLogo = require("../../../assets/images/shitf.png");

const Login: React.FC = () => {
  const { handleSignIn } = useAuthContext();
  const { isLoading } = useAppSelector((state) => state.Auth);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={shiftLogo} style={styles.image} />
      <View style={styles.wrapperInput}>
        <SinginInput title="Usuário" />
        <SinginInput title="Senha" password />
        <TouchableOpacity style={styles.button} onPress={() => handleSignIn()}>
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity>
      </View>
      <LoadingIndicator visible={isLoading} />
    </SafeAreaView>
  );
};

export default Login;
