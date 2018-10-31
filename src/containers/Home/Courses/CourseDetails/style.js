import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../../config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  courseViewContainer: {
    height: 150,
    flexDirection: "row",
    margin: 6,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.0,
    borderRadius: 4,
    elevation: 1,
    backgroundColor: "#fff",
    borderColor: "#000",
    alignContent: "center"
    // alignItems: "center"
  },
  courseDetails: {
    padding: 10,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  detailsTextContainer: {
    backgroundColor: "#fff",
    fontSize: 16,
    padding: 10
  },
  infoFontSize: {
    fontSize: 18
  },
  flatList: {
    padding: 10,
    backgroundColor: "#f5f5f0"
  },
  singleLesson: {
    flexDirection: "row",
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 0.3
  },
  nameOfLesson: {
    fontSize: 16,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  timeOfLesson: {
    fontSize: 14
  },
  registerButton: {
    backgroundColor: Colors.borderColor,
    borderRadius: 8,
    padding: 10,
    color: "#fff",
    marginRight: 10
  }
});

export default style;
