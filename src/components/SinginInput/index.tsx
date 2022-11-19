import styles from "./styles";
import { View, TextInput, Text } from "react-native";

type ISinginInput = {
  title: string;
  password?: boolean;
};

const SinginInput: React.FC<ISinginInput> = ({ title, password }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input} secureTextEntry={password} />
    </View>
  );
};

export default SinginInput;
