import { USER_LOGIN } from '../constants'

const userLogin = (state = '', action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.email
    default:
      return state
  }
}

export default userLogin