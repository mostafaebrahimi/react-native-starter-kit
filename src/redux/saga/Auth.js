import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Auth, { AuthActionsGenerator } from "../reducers/Auth";
import AuthApi from "../api/AuthApi";
import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

var storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null
});
//fillInfo: payload => dispatch(AuthActionsGenerator.auth.fillInfo(payload)),
function* loginWorker(action) {
  try {
    yield put(AuthActionsGenerator.auth.login.isfetching());
    const res = yield call(AuthApi.login, action.payload);
    storage.save({
      key: "token",
      data: { token: res.token }
    });
    storage.save({
      key: "user",
      data: { user: res.user }
    });
    yield put(AuthActionsGenerator.auth.login.response(res));
    yield put(AuthActionsGenerator.auth.fillInfo(res));
    if (res.user.role === "teacher")
      yield put(AuthActionsGenerator.auth.isTeacher());
    else yield put(AuthActionsGenerator.auth.isNotTeacher());
  } catch (e) {
    yield put(AuthActionsGenerator.auth.login.error(e));
  }
}

export function* loginWatcher() {
  // console.error("this is sample demo");
  yield takeEvery(AuthActionsGenerator.auth.login.call, loginWorker);
}

function* registerTeacherWorker(action) {
  try {
    yield put(AuthActionsGenerator.auth.register.teacher.isfetching());
    const res = yield call(AuthApi.registerTeacher, action.payload);
    storage.save({
      key: "token",
      data: { token: res.token }
    });
    storage.save({
      key: "user",
      data: { user: res.teacher }
    });
    yield put(AuthActionsGenerator.auth.register.teacher.response(res));
    yield put(
      AuthActionsGenerator.auth.fillInfo({ ...res, user: res.teacher })
    );
    yield put(AuthActionsGenerator.auth.isTeacher());
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
    yield put(AuthActionsGenerator.auth.register.student.isfetching());
    const res = yield call(AuthApi.registerStudent, action.payload);

    storage.save({
      key: "token",
      data: { token: res.token }
    });
    storage.save({
      key: "user",
      data: { user: res.student }
    });
    yield put(AuthActionsGenerator.auth.register.student.response(res));
    yield put(
      AuthActionsGenerator.auth.fillInfo({ ...res, user: res.student })
    );
    yield put(AuthActionsGenerator.auth.isNotTeacher());
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

function* getUserWorker(action) {
  try {
    const res = yield call(AuthApi.getUser, action.payload);
    yield put(AuthActionsGenerator.auth.user.response(res));
  } catch (e) {
    yield put(AuthActionsGenerator.auth.user.error(e));
  }
}

export function* getUserWatcher() {
  yield takeLatest(AuthActionsGenerator.auth.user.fetching, getUserWorker);
}
