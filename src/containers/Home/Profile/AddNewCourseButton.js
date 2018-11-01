import React from "react";
import { Text, View } from "react-native";
import style from "./Tabs/style";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    isTeacher: state.profile.isTeacher
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const AddNewCourseButton = props => {
  if (props.isTeacher) {
    return (
      <View>
        <Text style={style.addNewCourseButton}>New Course</Text>
      </View>
    );
  } else {
    return <View />;
  }
};

const AddNewCourseButtonConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewCourseButton);
export default AddNewCourseButtonConnect;
