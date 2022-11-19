import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const itens = ["T4 LIVRE - T4L", "TGP", "TESTOSTERONA LIVRE"];

const ListItem: React.FC = () => {
  const [selectItem, setSelectItem] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione o exame</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button} onPress={() => setOpen(!open)}>
          <Text style={styles.text}>
            {selectItem === "" ? " Selecione o exame" : selectItem}
          </Text>
        </TouchableOpacity>
      </View>
      {open && (
        <View style={styles.dropDownBox}>
          {itens.map((item, i) => {
            {
              return (
                <TouchableOpacity
                  key={i.toString()}
                  style={styles.item}
                  onPress={() => {
                    setSelectItem(item);
                    setOpen(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      )}
    </View>
  );
};

export default ListItem;
