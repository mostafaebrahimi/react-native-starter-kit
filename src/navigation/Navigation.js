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
import Course from "../containers/Home/Courses/CourseDetails";
import NewCourse from "../containers/Home/NewCourse";
import SingleLesson from "../containers/Home/Courses/CourseDetails/SingleLesson";
import Splash from "../containers/Splash";

const RootNavigator = createStackNavigator(
  {
    Splash,
    Login: LoginScreen,
    RegisterStudent: StudentComponent,
    RegisterTeacher: TeacherComponent,
    Home,
    Course,
    NewCourse,
    SingleLesson
  },
  {
    headerMode: "screen",
    initialRouteName: "Splash"
  }
);

export default RootNavigator;
