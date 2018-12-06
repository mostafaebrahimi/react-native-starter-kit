import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import style from "./Tabs/style";
import { connect } from "react-redux";
import NavigationService from "../../../navigation/NavigationService";

const mapStateToProps = state => {
  return {
    isTeacher: state.auth.isTeacher
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class AddNewCourseButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPress() {
    NavigationService.navigateTopStack("NewCourse");
  }

  render() {
    if (this.props.isTeacher) {
      return (
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View>
            <Text style={style.addNewCourseButton}>New Course</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return <View />;
    }
  }
}

const AddNewCourseButtonConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewCourseButton);
export default AddNewCourseButtonConnect;
