import React, { Component } from "react";
import { View, Text } from "react-native";
import style from "./style";
import ImageLoad from "react-native-image-placeholder";
import { connect } from "react-redux";
import _ from "lodash";
import EmptyView from "./EmptyView";
import SingleCourse from "./SingleCourse";
const mapStateToProps = state => {
  return {
    courses: state.profile.courses.response
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { courses } = this.props;
    // if (!_.isUndefined(courses) && courses.length > 0) {
    return (
      <View style={style.tabsScreen}>
        <SingleCourse courseName={"More than vver course"} />
      </View>
    );
    // }
    return (
      <View style={style.tabsScreen}>
        <EmptyView msg={"not registered in any courses"} />
      </View>
    );
  }
}

const MyCoursesConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCourses);
export default MyCoursesConnect;
