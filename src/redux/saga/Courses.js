import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { CourseActionsGenerator } from "../reducers/Course";
import CoursesApi from "../api/CoursesApi";

export const getToken = state => state.auth.token;

function* getCoursesWorker(action) {
  try {
    const res = yield call(CoursesApi.getCourses);
    yield put(CourseActionsGenerator.course.addcourses(res));
  } catch (e) {
    console.log(e);
    yield put(CourseActionsGenerator.course.errorFetchig(e));
  }
}

function* registerOnCourseWorker(action) {
  try {
    const token = yield select(getToken);
    console.log(token);
    action.payload.token = token.token;
    const res = yield call(CoursesApi.registerOnCourse, action.payload);
    yield put(CourseActionsGenerator.course.registerResult(res));
  } catch (e) {
    console.log(e);
    yield put(CourseActionsGenerator.course.registerError(e));
  }
}

export function* getCoursesWatcher() {
  yield takeEvery(CourseActionsGenerator.course.isFetching, getCoursesWorker);
}

export function* registerCourseCallWatcher() {
  yield takeEvery(
    CourseActionsGenerator.course.registerCall,
    registerOnCourseWorker
  );
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
