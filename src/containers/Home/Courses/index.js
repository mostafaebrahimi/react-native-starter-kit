import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import _ from "lodash";
import style from "./style";
import CourseRow from "./CourseRow";
import NavigationService from "../../../navigation/NavigationService";
import { connect } from "react-redux";
import { CourseActionsGenerator } from "../../../redux/reducers/Course";
import EmptyView from "../Profile/Tabs/EmptyView";

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    courses: state.course.courses
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllCourses: () => dispatch(CourseActionsGenerator.course.isFetching()),
    selectCourse: course =>
      dispatch(CourseActionsGenerator.course.selectCourse(course))
  };
};

class Courses extends Component {
  static navigationOptions = {
    title: "course name"
  };

  constructor(props) {
    super(props);
    this.state = {};
    this._onCardPress = this._onCardPress.bind(this);
    this.props.getAllCourses();
  }

  _onCardPress(item) {
    let that = this;
    return function() {
      that.props.selectCourse(item);
      NavigationService.navigateTopStack("Course", {
        title: item.courseName,
        showRegister: true
      });
    };
  }

  render() {
    let { courses } = this.props;
    if (!_.isUndefined(courses) && courses.length > 0) {
      return (
        <View>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <CourseRow
                image={item.image}
                teacher={item.teacher}
                courseName={item.name}
                studentNumber={item.students.length || 0}
                cost={item.cost}
                startDate={new Date(item.start_time).toString()}
                onPress={this._onCardPress(item)}
              />
            )}
          />
        </View>
      );
    }
    return (
      <View style={style.tabsScreen}>
        <EmptyView msg={"no items here"} />
      </View>
    );
  }
}
const CoursesConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
export default CoursesConnect;
