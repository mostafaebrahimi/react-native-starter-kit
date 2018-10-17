import { LOGIN } from '../types/Auth'

const initialState = {

}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return state
        default:
            return state;
    }
}
