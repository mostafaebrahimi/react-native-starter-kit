import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import style from "./style";
import CourseRow from "./CourseRow";
import NavigationService from "../../../navigation/NavigationService";
const data = [
  {
    courseName: "Tarrahi Algorithem",
    startDate: "19/10/2018",
    teacher: "Ali Ebrahimi"
  },
  {
    courseName: "Tarrahi Algorithem",
    startDate: "19/10/2018",
    teacher: "Ali Ebrahimi"
  },
  {
    courseName: "Tarrahi Algorithem",
    startDate: "19/10/2018",
    teacher: "Ali Ebrahimi"
  },
  {
    courseName: "Tarrahi Algorithem",
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

  _onCardPress() {
    NavigationService.navigateTopStack("Course");
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
              onPress={this._onCardPress}
            />
          )}
        />
      </View>
      // <ScrollView>
      //   <List>
      //     <FlatList
      //       data={[1, 2, 34, 4, 5, 6]}
      //       renderItem={({ item }) => <CourseRow />}
      //     />
      //   </List>
      // </ScrollView>
    );
  }
}

export default Courses;
