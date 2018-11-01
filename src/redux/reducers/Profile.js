import { createActions, handleActions } from "redux-actions";
const initialState = {
  user: undefined,
  courses_list: [],
  isTeacher: true,
  courses: {
    isFetching: false,
    error: undefined,
    response: undefined
  }
};

export const ProfileActionsGenerator = createActions({
  COURSES: {
    res: payload => ({ payload }),
    isFetching: () => {},
    err: payload => ({ payload })
  },
  SAVE_USER: payload => ({ payload })
});

export default (ProfileActions = handleActions(
  {
    [ProfileActionsGenerator.save_user](state, action) {
      return { ...state, user: action.payoad };
    },
    [ProfileActionsGenerator.courses.isfetching](state) {
      return {
        ...state,
        login: {
          isFetching: true,
          error: undefined,
          response: undefined
        }
      };
    },
    [ProfileActionsGenerator.courses.error](state, action) {
      return {
        ...state,
        login: {
          isFetching: false,
          error: action.payload,
          response: undefined
        }
      };
    },
    [ProfileActionsGenerator.courses.response](state, action) {
      return {
        ...state,
        login: {
          isFetching: false,
          error: undefined,
          response: action.payload
        }
      };
    }
  },
  initialState
));
