import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from "expo-constants";
const width = Dimensions.get("screen").width;

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
  ImageWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "60%",
  },
  itemContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  item: {
    height: 120,
    width: 120,
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  imageItem: {
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
  },
});

export default styles;
