import { createAction, createActions, handleActions } from "redux-actions";
const initialState = {
  username: undefined,
  password: undefined,
  isFetching: false,
  counter: 0,
  registerStudent: {
    isFetching: false,
    error: undefined,
    response: undefined
  },
  registeTeacher: {
    isFetching: false,
    error: undefined,
    response: undefined
  }
};

export const AuthActionsGenerator = createActions({
  AUTH: {
    REGISTER: {
      STUDENT: {
        isFetching: () => {}
      },
      TEACHER: {}
    },
    LOGIN: {},
    COUNTER: {
      INC: () => {},
      DEC: () => {}
    }
  }
});

export default (AuthActions = handleActions(
  {
    [AuthActionsGenerator.auth.counter.inc](state) {
      return { ...state, counter: state.counter + 1 };
    },
    [AuthActionsGenerator.auth.counter.dec](state) {
      return { ...state, counter: state.counter - 1 };
    },
    [AuthActionsGenerator.auth.login](state, payload) {
      return {
        ...state,
        username: payload.username,
        password: payload.password,
        isFetching: true
      };
    }
  },
  initialState
));





// export const increamentCounter = createAction("COUNTER_INCREAMENT");
// export const decreamentCounter = createAction("COUNTER_DECREAMENT");
// export const login = createAction("LOGIN");
// export const registerStudentStartr = createAction("REGISTER_STUDENT");
// export const registerTeacher = createAction("REGISTER_TEACHER");