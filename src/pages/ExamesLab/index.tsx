import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import ListItem from "../../components/ListItem";
import SinginInput from "../../components/SinginInput";
import TextInputComponent from "../../components/TextInput";

const sabin = require(".././../../assets/images/sabin.png");
const listaExames = ["T4 LIVRE - T4L", "TGP", "TESTOSTERONA LIVRE"];
const listaUnidades = ["Unidade 1", "Unidade 2", "Unidade 3"];

const ExamesLab: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.ImageWrapper}>
          <Image source={sabin} style={styles.image} resizeMode="contain" />
        </View>
        <Text style={styles.title}>Selecione o exame desejado</Text>
        <ListItem itens={listaExames} />
        <ListItem itens={listaUnidades} />
        <TextInputComponent title="insira a data" numeric />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Sucesso!", "Agendado com sucesso!")}
          >
            <Text style={{ color: "#fff" }}>Agendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExamesLab;
