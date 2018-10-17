import { LOGIN } from "../types/Auth"

export const doLogin = (payload) => {
    return { type: LOGIN, payload: payload }
}

