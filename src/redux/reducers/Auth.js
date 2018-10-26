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
  registerTeacher: {
    isFetching: false,
    error: undefined,
    response: undefined
  },
  login: {
    isFetching: false,
    error: undefined,
    response: undefined
  }
};

export const AuthActionsGenerator = createActions({
  AUTH: {
    REGISTER: {
      STUDENT: {
        call: payload => ({ payload }),
        isfetching: () => {},
        response: payload => ({ payload })
      },
      TEACHER: {
        call: payload => ({ payload }),
        isfetching: () => {},
        response: payload => ({ payload })
      }
    },
    LOGIN: {
      isfetching: () => {},
      error: payload => ({ payload }),
      response: payload => ({ payload }),
      call: payload => ({ payload })
    },
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
    [AuthActionsGenerator.auth.login.isfetching](state) {
      return {
        ...state,
        login: {
          isFetching: true,
          error: undefined,
          response: undefined
        }
      };
    },
    [AuthActionsGenerator.auth.login.error](state, action) {
      return {
        ...state,
        login: {
          isFetching: false,
          error: action.payload,
          response: undefined
        }
      };
    },
    [AuthActionsGenerator.auth.login.response](state, action) {
      return {
        ...state,
        login: {
          isFetching: false,
          error: undefined,
          response: action.payload
        }
      };
    },
    [AuthActionsGenerator.auth.register.student.isfetching](state) {
      return {
        ...state,
        registerStudent: {
          ...state.registerStudent,
          isFetching: true
        }
      };
    },
    [AuthActionsGenerator.auth.register.student.response](state, action) {
      return {
        ...state,
        registerStudent: {
          isFetching: false,
          error: null,
          response: action.response
        }
      };
    },
    [AuthActionsGenerator.auth.register.student.error](state, action) {
      return {
        ...state,
        registerStudent: {
          isFetching: false,
          error: action.error,
          response: null
        }
      };
    },
    [AuthActionsGenerator.auth.register.teacher.isfetching](state) {
      return {
        ...state,
        registerTeacher: {
          ...state.registerStudent,
          isFetching: true
        }
      };
    },
    [AuthActionsGenerator.auth.register.teacher.response](state, action) {
      return {
        ...state,
        registerTeacher: {
          isFetching: false,
          error: null,
          response: action.response
        }
      };
    },
    [AuthActionsGenerator.auth.register.teacher.error](state, action) {
      return {
        ...state,
        registerTeacher: {
          isFetching: false,
          error: action.error,
          response: null
        }
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
