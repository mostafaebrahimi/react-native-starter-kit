import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../../config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  tabsScreen: {
    flex: 1,
    color: "#000",
    backgroundColor: "#fff"
  }
});

export default style;
