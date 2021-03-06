import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, USER_LOGIN, SELECT_APP } from '../constants';

let nextTodoId = 0
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const loginUserAction = email => ({
  type: USER_LOGIN,
  email
})

export const selectAppAction = bool => ({
  type: SELECT_APP,
  bool
})