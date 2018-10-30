import React, { Component } from "react";
import { View, Text } from "react-native";
import style from "./style";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {};
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
    return (
      <View style={style.tabsScreen}>
        <Text>First Tab</Text>
      </View>
    );
  }
}

const MyCoursesConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCourses);
export default MyCoursesConnect;
