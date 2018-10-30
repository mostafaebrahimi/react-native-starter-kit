import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../config";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    alignSelf: "center",
    width: 150,
    height: 150
  },
  topHalf: {
    flex: 0.35,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  bottomHalf: {
    flex: 0.65,
    backgroundColor: "#4286f4"
  },
  initialLayout: {
    flex: 1,
    width: width
  },
  tabbar: {
    backgroundColor: "#fff",
    color: "#000"
  },
  tab: {
    color: "#000"
  },
  indicator: {
    backgroundColor: "#000"
  },
  label: {
    color: "#000",
    fontWeight: "200"
  }
});

export default style;
