import { SELECT_APP } from '../constants'

const selectApp = (state = false, action) => {
  switch (action.type) {
    case SELECT_APP:
      return action.bool
    default:
      return state
  }
}

export default selectApp