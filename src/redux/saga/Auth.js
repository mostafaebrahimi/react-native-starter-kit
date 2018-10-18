import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* login(action) {
  try {
    const user = yield call(
      Api.fetchUser,
      action.payload
    );
    yield put();
  } catch (e) {
    yield put();
  }
}


function* registerStudentWorker(action){
    try{
        const user = yield call(AuthApi.registerStudent,action.payload)
        yield put()
    }
    catch(e){
        console.log(e)
    }
}


function* registerStudentWatcher(){
   yield takeLatest() 
}