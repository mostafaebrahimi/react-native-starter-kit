import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  background: {
    width: width,
    backgroundColor: "#fff"
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10%"
  },
  classImage: {
    width: 150,
    height: 150
  },
  textInput: {
    marginTop: 10,
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    flex: 1

    // alignItems: "center"
  },
  inputContainer: {
    padding: 25,
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "100%"
  },
  imageContainer: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
  },
  saveBtn: {
    padding: 10,
    backgroundColor: Colors.primary,
    paddingRight: 25,
    paddingLeft: 25,
    color: "#fff",
    borderRadius: 8
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  mainContainer: {
    paddingBottom: 20,
    flexGrow: 1,
    backgroundColor: "#fff"
  }
});

export default style;
