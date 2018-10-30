import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import {
  LoginScreen,
  StudentComponent,
  TeacherComponent
} from "../containers/Auth";
import Home from "../containers/Home";

const RootNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    RegisterStudent: StudentComponent,
    RegisterTeacher: TeacherComponent,
    Home
  },
  {
    initialRouteName: "Login"
  }
);

export default RootNavigator;
