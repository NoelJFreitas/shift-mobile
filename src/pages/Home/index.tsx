import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const user = require(".././../../assets/images/user.png");
const sabin = require(".././../../assets/images/sabin.png");
const tommasi = require(".././../../assets/images/tommasi.png");
const cda = require(".././../../assets/images/cda.png");

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userContainer}>
          <Text style={styles.textUser}>Olá, paciente!</Text>
          <Image source={user} style={styles.image} />
        </View>
        <View style={styles.labList}>
          <Text style={styles.title}>
            Onde gostaria de realizar seus exames?
          </Text>
          <TouchableOpacity
            style={styles.itemList}
            onPress={() => navigate("Exames")}
          >
            <Image source={sabin} style={styles.labImages} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemList}>
            <Image source={tommasi} style={styles.labImages} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemList}>
            <Image source={cda} style={styles.labImages} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
