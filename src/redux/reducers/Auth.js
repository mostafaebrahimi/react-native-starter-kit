import { createAction, handleActions } from "redux-actions";
const initialState = {
  username: undefined,
  password: undefined,
  isFetching: false,
  counter: 0
};

export const increamentCounter = createAction("COUNTER_INCREAMENT");
export const decreamentCounter = createAction("COUNTER_DECREAMENT");
export const login = createAction("LOGIN");

export default (AuthActions = handleActions(
  {
    [increamentCounter](state) {
      return { ...state, counter: state.counter + 1 };
    },
    [decreamentCounter](state) {
      return { ...state, counter: state.counter - 1 };
    },
    [login](state, payload) {
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
