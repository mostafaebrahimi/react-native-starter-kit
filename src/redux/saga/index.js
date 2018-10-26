import { all } from "redux-saga/effects";
import {
  registerStudentWatcher,
  registerTeacherWatcher,
  loginWatcher
} from "./Auth";

export default function* rootWatcher() {
  console.log("root watcher");
  yield all([registerStudentWatcher(), registerTeacherWatcher(), loginWatcher()]);
}
