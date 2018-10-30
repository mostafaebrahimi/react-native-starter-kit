import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
    // fontStyle: "italic",
    color: Colors.home.titleColor
  },
  textCenter: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 5,
    // justifyContent: "center"
    alignContent: "center"
  }
});

export default style;
