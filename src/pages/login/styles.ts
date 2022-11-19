import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperInput: {
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    height: 40,
    width: "80%",
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
  image: {
    width: "50%",
    height: (384 / 553) * (width / 2),
    marginBottom: 20,
  },
});

export default styles;
