import { LOGIN_TYPES } from './LoginForm.types'

const initialState = {
  error: null,
  loading: false,
}

export const loginForm = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOGIN_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case LOGIN_TYPES.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}  