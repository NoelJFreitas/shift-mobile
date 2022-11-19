import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from "expo-constants";

const statusBarHeight =
  Platform.OS == "android" ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  userContainer: {
    height: 50,
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
  textUser: {
    fontSize: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    height: 40,
    width: 40,
  },
  labList: {
    alignItems: "center",
    paddingTop: 40,
  },
  itemList: {
    marginTop: 15,
    height: 100,
    width: "100%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labImages: {
    width: "60%",
    height: "80%",
  },
});

export default styles;
