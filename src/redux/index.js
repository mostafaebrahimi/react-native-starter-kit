import auth  from './reducers/Auth'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const reducer = combineReducers({ auth })
const store = createStore(reducer, applyMiddleware(logger))

export default store;