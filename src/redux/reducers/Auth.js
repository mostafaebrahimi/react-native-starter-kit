import { createAction, createActions, handleActions } from "redux-actions";
const initialState = {
  username: undefined,
  password: undefined,
  isFetching: false,
  counter: 0,
  courses: [],
  isTeacher: false,
  selectedCourse: undefined,
  user: undefined,
  token: undefined,
  getUser: {
    fetching: false,
    err: undefined,
    response: undefined
  },
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
    selectCourse: payload => payload,
    fillInfo: payload => payload,
    isTeacher: () => {},
    isNotTeacher: () => {},
    USER: {
      error: payload => payload,
      fetching: payload => payload,
      response: payload => payload
    },
    REGISTER: {
      STUDENT: {
        call: payload => payload,
        isfetching: () => {},
        error: payload => payload,
        response: payload => payload
      },
      TEACHER: {
        call: payload => payload,
        isfetching: () => {},
        error: payload => payload,
        response: payload => payload
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
    [AuthActionsGenerator.auth.isTeacher](state) {
      return { ...state, isTeacher: true };
    },
    [AuthActionsGenerator.auth.isNotTeacher](state) {
      return { ...state, isTeacher: false };
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
    [AuthActionsGenerator.auth.fillInfo](state, action) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    },
    [AuthActionsGenerator.auth.selectCourse](state, action) {
      return {
        ...state,
        selectedCourse: action.payload.course
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
    [AuthActionsGenerator.auth.user.fetching](state) {
      return {
        ...state,
        getUser: {
          fetching: true,
          response: undefined,
          error: undefined
        }
      };
    },
    [AuthActionsGenerator.auth.user.response](state, action) {
      return {
        ...state,
        user: action.payload,
        courses: action.payload.courses,
        getUser: {
          fetching: false,
          response: action.payload,
          error: undefined
        }
      };
    },
    [AuthActionsGenerator.auth.user.error](state, action) {
      return {
        ...state,
        getUser: {
          fetching: false,
          response: undefined,
          error: action.payload
        }
      };
    },
    [AuthActionsGenerator.auth.register.student.isfetching](state) {
      return {
        ...state,
        registerStudent: {
          ...state.registerStudent,
          isFetching: true,
          response: undefined,
          error: undefined
        }
      };
    },
    [AuthActionsGenerator.auth.register.student.response](state, action) {
      return {
        ...state,
        registerStudent: {
          isFetching: false,
          error: undefined,
          response: action.payload
        }
      };
    },
    [AuthActionsGenerator.auth.register.student.error](state, action) {
      return {
        ...state,
        registerStudent: {
          isFetching: false,
          error: action.payload,
          response: undefined
        }
      };
    },
    [AuthActionsGenerator.auth.register.teacher.isfetching](state) {
      return {
        ...state,
        registerTeacher: {
          ...state.registerStudent,
          isFetching: true,
          response: undefined,
          error: undefined
        }
      };
    },
    [AuthActionsGenerator.auth.register.teacher.response](state, action) {
      return {
        ...state,
        registerTeacher: {
          isFetching: false,
          error: undefined,
          response: action.payload
        }
      };
    },
    [AuthActionsGenerator.auth.register.teacher.error](state, action) {
      return {
        ...state,
        registerTeacher: {
          isFetching: false,
          error: action.payload,
          response: undefined
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
