import { PROFILE_TYPES } from './ProfilePage.types'

const initialState = {
  profileData: {}
}


export const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.SET_KEYS:
      return {
        ...state,
        ...action.obj
      }
    default:
      return state
  }
}