import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const sabin = require(".././../../assets/images/sabin.png");
const exames = require(".././../../assets/images/exames.png");
const vacina = require(".././../../assets/images/vacina.png");
const Exames: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.ImageWrapper}>
          <Image source={sabin} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.item}>
            <Image source={vacina} style={styles.imageItem} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigate("ExamesLab")}
          >
            <Image source={exames} style={styles.imageItem} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Exames;
