import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import style from "./style";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isTeacher: state.profile.isTeacher
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Register = props => {
  if (props.isTeacher) {
    return <View />;
  } else {
    return (
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View>
          <Text style={style.registerButton}>Register</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const RegisterConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
export default RegisterConnect;
