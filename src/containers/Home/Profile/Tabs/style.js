import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../../config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  tabsScreen: {
    flex: 1,
    color: "#000",
    backgroundColor: "#fff"
  },
  emptyMessage: {
    marginTop: 5,
    color: Colors.home.titleColor,
    fontWeight: "200",
    fontSize: 14
  },
  emptyViewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  borderedView: {
    margin: 10,
    flexDirection: "column",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.0,
    borderRadius: 4,
    elevation: 1,
    borderColor: "#000"
  },
  cardHeader: {
    padding: 10,
    backgroundColor: Colors.home.titleColor,
    height: 40,
    width: "100%"
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  cardBody: {
    margin: 10,
    padding: 10
  },
  informationRow: {
    flex: 10,
    marginTop: 4,
    flexDirection: "row"
  },
  informationRow_title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  informationRow_info: {
    flex: 1,
    fontSize: 16,
    fontWeight: "normal"
  },
  courseViewContainer: {
    height: 110,
    flexDirection: "row",
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.0,
    borderRadius: 4,
    elevation: 1,
    borderColor: "#000",
    alignContent: "center"
  },
  courseImage: {
    width: 140,
    height: "100%"
  },
  bodyContainer: {
    flexDirection: "column",
    padding: 10
  },
  courseImageStyle: {
    width: 120,
    height: 109,
    marginTop: 1,
    marginBottom: 1,
    borderTopEndRadius: 4,
    borderBottomEndRadius: 4
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "300"
  },
  addNewCourseButton: {
    backgroundColor: Colors.borderColor,
    borderRadius: 8,
    padding: 10,
    color: "#fff",
    marginRight: 10
  }
});

export default style;
