import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CourseActionsGenerator } from "../reducers/Course";
import CoursesApi from "../api/CoursesApi";

function* getCoursesWorker(action) {
  try {
    const res = yield call(CoursesApi.getCourses);
    yield put(CourseActionsGenerator.course.addcourses(res));
  } catch (e) {
    console.log(e);
    yield put(CourseActionsGenerator.course.errorFetchig(e));
  }
}

export function* getCoursesWatcher() {
  yield takeEvery(CourseActionsGenerator.course.isFetching, getCoursesWorker);
}

function* registerStudentWorker(action) {
  try {
    console.log(action);
    const res = yield call(AuthApi.registerStudent, action.payload);
    yield put(AuthActionsGenerator.auth.register.student.response(user));
  } catch (e) {
    yield put(AuthActionsGenerator.auth.register.student.error(e));
  }
}

export function* registerStudentWatcher() {
  yield takeLatest(
    AuthActionsGenerator.auth.register.student.call,
    registerStudentWorker
  );
}
