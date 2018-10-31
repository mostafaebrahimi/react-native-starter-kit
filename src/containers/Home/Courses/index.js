import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import style from "./style";
import CourseRow from "./CourseRow";
import NavigationService from "../../../navigation/NavigationService";
const data = [
  {
    courseName: "Tarrahi Algo",
    startDate: "19/10/2018",
    teacher: "Ali Ebrahimi"
  },
  {
    courseName: "Tarrahi Arithem",
    startDate: "19/10/2018",
    teacher: "Ali Ebrahimi"
  },
  {
    courseName: "Tarrahi Algorithem",
    startDate: "19/10/2018",
    teacher: "Ali Ebrahimi"
  },
  {
    courseName: "Tarrahi   Algorithem",
    startDate: "19/10/2018",
    teacher: "Ali Ebrahimi"
  }
];
class Courses extends Component {
  static navigationOptions = {
    title: "course name"
  };

  constructor(props) {
    super(props);
    this.state = {};
    this._onCardPress = this._onCardPress.bind(this);
  }

  _onCardPress(item) {
    return function() {
      NavigationService.navigateTopStack("Course", { title: item.courseName });
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CourseRow
              teacher={item.teacher}
              courseName={item.courseName}
              startDate={item.startDate}
              onPress={this._onCardPress(item)}
            />
          )}
        />
      </View>
    );
  }
}

export default Courses;
