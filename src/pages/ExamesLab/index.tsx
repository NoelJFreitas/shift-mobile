import { View, SafeAreaView, Image, Text } from "react-native";
import styles from "./styles";
import ListItem from "../../components/ListItem";

const sabin = require(".././../../assets/images/sabin.png");
const exames = require(".././../../assets/images/exames.png");
const vacina = require(".././../../assets/images/vacina.png");
const ExamesLab: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.ImageWrapper}>
          <Image source={sabin} style={styles.image} resizeMode="contain" />
        </View>
        <Text style={styles.title}>Selecione o exame desejado</Text>
        <ListItem />
      </View>
    </SafeAreaView>
  );
};

export default ExamesLab;
