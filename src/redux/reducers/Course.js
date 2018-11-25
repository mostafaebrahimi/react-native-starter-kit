import { createActions, handleActions } from "redux-actions";
const initialState = {
  courses: [],
  selectedCourse: undefined,
  selectedLesson: undefined,
  fetching: false,
  register: {
    fetching: false,
    error: undefined,
    res: undefined
  },
  error: undefined
};

export const CourseActionsGenerator = createActions({
  Course: {
    selectCourse: payload => payload,
    selectLesson: payload => payload,
    addcourses: payload => payload,
    isFetching: () => {},
    errorFetchig: payload => payload,
    registerCall: payload => payload,
    registerError: payload => payload,
    registerResult: payload => payload
  }
});

export default (CourseActions = handleActions(
  {
    [CourseActionsGenerator.course.selectCourse](state, action) {
      return { ...state, selectedCourse: action.payload };
    },
    [CourseActionsGenerator.course.selectLesson](state, action) {
      return { ...state, selectedLesson: action.payload };
    },
    [CourseActionsGenerator.course.addcourses](state, action) {
      return {
        ...state,
        courses: action.payload
      };
    },
    [CourseActionsGenerator.course.isfetching](state) {
      return { ...state, isfetching: true };
    },
    [CourseActionsGenerator.course.errorfetchig](state, action) {
      return { ...state, isfetching: false, error: action.payload.error };
    },
    [CourseActionsGenerator.course.registerCall](state) {
      return {
        ...state,
        register: { err: undefined, res: undefined, fetching: true }
      };
    },
    [CourseActionsGenerator.course.registerResult](state, action) {
      return {
        ...state,
        register: { err: undefined, res: action.res, fetching: false }
      };
    },
    [CourseActionsGenerator.course.registerError](state, action) {
      return {
        ...state,
        register: { err: action.err, res: undefined, fetching: false }
      };
    }
  },
  initialState
));
