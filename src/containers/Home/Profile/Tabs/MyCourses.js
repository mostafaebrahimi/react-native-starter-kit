import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import style from "./style";
import ImageLoad from "react-native-image-placeholder";
import { connect } from "react-redux";
import _ from "lodash";
import EmptyView from "./EmptyView";
import SingleCourse from "./SingleCourse";
import NavigationService from "../../../../navigation/NavigationService";

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
    this._changeToDetailsRoute = this._changeToDetailsRoute.bind(this);
  }

  _changeToDetailsRoute() {
    NavigationService.navigateTopStack("Course");
  }
  render() {
    let { courses } = this.props;
    // if (!_.isUndefined(courses) && courses.length > 0) {
    return (
      <View style={style.tabsScreen}>
        <TouchableNativeFeedback onPress={this._changeToDetailsRoute}>
          <View>
            <SingleCourse
              courseName={"More than vver course"}
              teacher={"Ali Ebrahimi"}
              startDate={"10/9/2018"}
            />
          </View>
        </TouchableNativeFeedback>
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
