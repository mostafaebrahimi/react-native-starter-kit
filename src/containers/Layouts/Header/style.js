import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: Colors.titleColor
  },
  textCenter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  }
});

export default style;
