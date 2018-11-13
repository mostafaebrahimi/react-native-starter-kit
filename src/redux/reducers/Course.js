import { createActions, handleActions } from "redux-actions";
const initialState = {
  courses: [],
  selectedCourse: undefined,
  selectedLesson: undefined
};

export const CourseActionsGenerator = createActions({
  Course: {
    selectCourse: payload => ({ payload }),
    selectLesson: payload => ({ payload }),
    addcourses: payload => ({ payload })
  }
});

export default (CourseActions = handleActions(
  {
    [CourseActionsGenerator.selectCourse](state, action) {
      return { ...state, selectedCourse: action.payload };
    },
    [CourseActionsGenerator.selectLesson](state, action) {
      return { ...state, selectedLesson: action.payload };
    },
    [CourseActionsGenerator.addcourses](state, action) {
      return {
        ...state,
        courses: action.payload
      };
    }
  },
  initialState
));
