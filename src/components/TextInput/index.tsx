import styles from "./styles";
import { View, TextInput, Text } from "react-native";

type ISinginInput = {
  title: string;
  numeric: boolean;
};

const TextInputComponent: React.FC<ISinginInput> = ({ title, numeric }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        keyboardType={numeric ? "numeric" : null}
      />
    </View>
  );
};

export default TextInputComponent;
