import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ProfileActionsGenerator } from "../reducers/Profile";
import ProfileApi from "../api/ProfileApi";
import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

var storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null
});

function* loginWorker(action) {
  try {
    yield put(AuthActionsGenerator.auth.login.isfetching());
    const res = yield call(AuthApi.login, action.payload);
    storage.save({
      key: "token",
      data: { token: res.token }
    });
    yield put(AuthActionsGenerator.auth.login.response(res));
  } catch (e) {
    yield put(AuthActionsGenerator.auth.login.error(e));
  }
}

export function* loginWatcher(action) {
  // console.error("this is sample demo");
  yield takeEvery(AuthActionsGenerator.auth.login.call, loginWorker);
}

function* registerTeacherWorker(action) {
  try {
    yield put(AuthActionsGenerator.auth.register.isfetching());
    const res = yield call(AuthApi.registerTeacher, action.payload);
    storage.save({
      key: "token",
      data: { token: res.token }
    });
    yield put(AuthActionsGenerator.auth.register.teacher.response(res));
  } catch (e) {
    yield put(AuthActionsGenerator.auth.register.teacher.error(e));
  }
}

export function* registerTeacherWatcher() {
  yield takeLatest(
    AuthActionsGenerator.auth.register.teacher.call,
    registerTeacherWorker
  );
}

function* registerStudentWorker(action) {
  try {
    console.log(action);
    const res = yield call(AuthApi.registerStudent, action.payload);
    storage.save({
      key: "token",
      data: { token: res.token }
    });
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
