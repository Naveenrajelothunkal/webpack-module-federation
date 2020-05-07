import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import userLogin from './userLogin'
import selectApp from './selectApp'



export default combineReducers({
  todos,
  visibilityFilter,
  userLogin,
  selectApp
})