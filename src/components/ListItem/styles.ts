import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 5,
  },
  wrapper: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  dropDownBox: {
    width: "100%",
    marginTop: 5,

    borderRadius: 5,
    // top: 70,
    // position: "absolute",
    backgroundColor: "#fff",
  },
  item: {
    paddingVertical: 10,
    marginLeft: 5,
  },
});

export default styles;
