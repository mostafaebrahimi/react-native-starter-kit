import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import style from "./style";
import ImageLoad from "react-native-image-placeholder";
import { connect } from "react-redux";
import _ from "lodash";
import EmptyView from "./EmptyView";
import SingleCourse from "./SingleCourse";
import { AuthActionsGenerator } from "../../../../redux/reducers/Auth";
import NavigationService from "../../../../navigation/NavigationService";

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCourse: payload =>
      dispatch(AuthActionsGenerator.auth.selectccourse(payload))
  };
};

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._changeToDetailsRoute = this._changeToDetailsRoute.bind(this);
  }

  _changeToDetailsRoute(item) {
    this.props.selectCourse(item);
    NavigationService.navigateTopStack("Course");
  }

  render() {
    let { courses } = this.props.user;
    if (!_.isUndefined(courses) && courses.length > 0) {
      return (
        <View style={style.tabsScreen}>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <CourseRow
                teacher={item.teacher || "Not Teacher Yet"}
                courseName={item.name}
                startDate={item.start_date}
                onPress={this._changeToDetailsRoute(item)}
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
