import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
import style from "./style";
import ImageLoad from "react-native-image-placeholder";
import { connect } from "react-redux";
import _ from "lodash";
import EmptyView from "./EmptyView";
import SingleCourse from "./SingleCourse";
import { AuthActionsGenerator } from "../../../../redux/reducers/Auth";
import { CourseActionsGenerator } from "../../../../redux/reducers/Course";
import NavigationService from "../../../../navigation/NavigationService";
import CourseRow from "../../Courses/CourseRow";

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    courses: state.auth.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCourseAuth: payload =>
      dispatch(AuthActionsGenerator.auth.selectCourse(payload)),
    selectCourseCourse: course =>
      dispatch(CourseActionsGenerator.course.selectCourse(course))
  };
};

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onCardPress = this._onCardPress.bind(this);
  }

  _onCardPress(item) {
    let that = this;
    return function() {
      that.props.selectCourseAuth(item);
      that.props.selectCourseCourse(item);
      NavigationService.navigateTopStack("Course", { title: item.courseName });
    };
  }

  _onScrollEndDrag() {
    console.log("dragging 1");
  }

  _onScrollBeginDrag() {
    console.log("dragging 2");
  }

  render() {
    let { courses } = this.props.user;
    if (!_.isUndefined(courses) && courses.length > 0) {
      return (
        <View style={style.tabsScreen}>
          <FlatList
            onScrollEndDrag={this._onScrollEndDrag}
            onScrollBeginDrag={this._onScrollBeginDrag}
            data={courses}
            renderItem={({ item }) => (
              <CourseRow
                image={item.course.image}
                teacher={item.course.teacher}
                courseName={item.course.name}
                studentNumber={
                  (item.course.students && item.course.students.length) || 0
                }
                cost={item.course.cost}
                startDate={new Date(item.course.start_time).toString()}
                onPress={this._onCardPress(item.course)}
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

const MyCoursesConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCourses);
export default MyCoursesConnect;
