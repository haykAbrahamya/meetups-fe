import { NETWORK_TYPES } from './network.types'

const initialState = {
  followers: [],
  following: [],
  loaded: false
}

export const network = (state = initialState, action) => {
  switch (action.type) {
    case NETWORK_TYPES.LOAD_FOLLOWING:
      return {
        ...state,
        loaded: true,
        followers: action.followers,
        following: action.following
      }
    case NETWORK_TYPES.FOLLOW_USER:
      return {
        ...state,
        following: state.following.concat(action.following)
      }
    case NETWORK_TYPES.UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(_ => _.user.id !== action.userId)
      }
    default:
      return state
  }
}