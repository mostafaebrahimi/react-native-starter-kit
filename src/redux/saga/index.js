import { all } from "redux-saga/effects";
import {
  registerStudentWatcher,
  registerTeacherWatcher,
  loginWatcher,
  getUserWatcher
} from "./Auth";

import { getCoursesWatcher, registerCourseCallWatcher } from "./Courses";

export default function* rootWatcher() {
  console.log("root watcher");
  yield all([
    registerStudentWatcher(),
    registerTeacherWatcher(),
    loginWatcher(),
    getCoursesWatcher(),
    registerCourseCallWatcher(),
    getUserWatcher()
  ]);
}
