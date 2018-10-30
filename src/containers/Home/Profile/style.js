import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../config";
import { bold } from "ansi-colors";

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
  profileName: {
    color: "#808080",
    fontSize: 19,
    marginTop: 8,
    alignSelf: "center",
    fontWeight: "500"
  },
  subTitle: {
    color: "#808080",
    fontSize: 16,
    marginTop: 2,
    alignSelf: "center",
    fontWeight: "300"
  },
  topHalf: {
    flex: 0.4,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  bottomHalf: {
    flex: 0.6,
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
    color: "#000",
    backgroundColor: "#000"
  },
  label: {
    color: "#A9A9A9",
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default style;
