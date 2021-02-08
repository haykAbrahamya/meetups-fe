import { USER_TYPES } from './user.types'

const initialState = {
  isAuth: false,
  userData: {}
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES.STORE_USER_DATA:
      return {
        ...state,
        isAuth: true,
        userData: action.userData
      }
    case USER_TYPES.LOAD_PROFILE:
      return {
        ...state,
        profileData: action.userData
      }
    case USER_TYPES.LOGOUT:
      return {
        ...state,
        isAuth: false,
        userData: {}
      }
    default:
      return state
  }
}