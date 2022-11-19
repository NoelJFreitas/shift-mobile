import { useState } from "react";
import SinginInput from "../../components/SinginInput";
import { useAuthContext } from "../../infrastructure/contexts/Auth/AuthProvider";
import { useAppSelector } from "../../infrastructure/store/hooks/useAppSelector";
import LoadingIndicator from "../../components/loadingIndicator";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";

const shiftLogo = require("../../../assets/images/shitf.png");

const SignIn: React.FC = () => {
  const { handleSignIn } = useAuthContext();
  const { isLoading } = useAppSelector((state) => state.Auth);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image source={shiftLogo} style={styles.image} />
      <View style={styles.wrapperInput}>
        <SinginInput
          title="Usuário"
          value={user}
          onChengeText={(t) => setUser(t)}
        />
        <SinginInput
          title="Senha"
          password
          value={password}
          onChengeText={(t) => setPassword(t)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSignIn(user, password)}
        >
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity>
      </View>
      <LoadingIndicator visible={isLoading} />
    </SafeAreaView>
  );
};

export default SignIn;
