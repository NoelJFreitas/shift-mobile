import styles from "./styles";
import { View, TextInput, Text } from "react-native";

type ISinginInput = {
  title: string;
  password?: boolean;
  value: string;
  onChengeText: (t: string) => void;
};

const SinginInput: React.FC<ISinginInput> = ({
  title,
  password,
  value,
  onChengeText,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={password}
        value={value}
        onChangeText={(t) => onChengeText(t)}
      />
    </View>
  );
};

export default SinginInput;
