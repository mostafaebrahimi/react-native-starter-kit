import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";
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

/* StackNavigator.__proto__.replaceWithAnimation = function(route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(
    0,
    activeLength
  );
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([
    nextSceneConfig
  ]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState(
    {
      routeStack: nextStack,
      sceneConfigStack: nextAnimationConfigStack
    },
    () => {
      this._enableScene(destIndex);
      this._transitionTo(
        destIndex,
        nextSceneConfig.defaultTransitionVelocity,
        null,
        () => {
          this.immediatelyResetRouteStack(replacedStack);
        }
      );
    }
  );
}; */

const RootNavigator = StackNavigator(
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
    initialRouteName: "Splash",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
        timing: Animated.timing,
        easing: Easing.step0
      }
    })
  }
);

export default RootNavigator;
