import { SEARCH_USERS_TYPES } from './SearchUsersPage.types'
import { NETWORK_TYPES } from '../../common/network/network.types'

const initialState = {
  filterOpened: false,
  results: [],
  filters: {}
}

export const searchUsersPage = (state = initialState, action) => {
  let userIndex, user

  switch (action.type) {
    case SEARCH_USERS_TYPES.TOGGLE_FILTER:
      return {
        ...state,
        filterOpened: !state.filterOpened
      }
    case SEARCH_USERS_TYPES.LOAD_USERS:
      return {
        ...state,
        results: action.users
      }
    case SEARCH_USERS_TYPES.CLEAR_FILTERS:
      return {
        ...state,
        filters: {}
      }
    case NETWORK_TYPES.FOLLOW_USER:
      userIndex = state.results.findIndex(_ => _.id === action.following.user.id)
      user = state.results[userIndex]

      return {
        ...state,
        results: [
          ...state.results.slice(0, userIndex),
          {
            ...user,
            followersCount: user.followersCount + 1
          },
          ...state.results.slice(userIndex + 1)
        ]
      }
    case NETWORK_TYPES.UNFOLLOW_USER:
      userIndex = state.results.findIndex(_ => _.id === action.userId)
      user = state.results[userIndex]

      return {
        ...state,
        results: [
          ...state.results.slice(0, userIndex),
          {
            ...user,
            followersCount: user.followersCount - 1
          },
          ...state.results.slice(userIndex + 1)
        ]
      }
    case NETWORK_TYPES.SOCKET_FOLLOW_USER:
      userIndex = state.results.findIndex(_ => _.id === action.myId)
      user = state.results[userIndex]

      return {
        ...state,
        results: !!user
          ? [
              ...state.results.slice(0, userIndex),
              {
                ...user,
                followersCount: user.followersCount + 1
              },
              ...state.results.slice(userIndex + 1)
            ]
          : state.results
      }
    case NETWORK_TYPES.SOCKET_UNFOLLOW_USER:
      userIndex = state.results.findIndex(_ => _.id === action.myId)
      user = state.results[userIndex]

      return {
        ...state,
        results: !!user
          ? [
              ...state.results.slice(0, userIndex),
              {
                ...user,
                followersCount: user.followersCount - 1
              },
              ...state.results.slice(userIndex + 1)
            ]
          : state.results
      }
    case SEARCH_USERS_TYPES.UPDATE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.filters
        }
      }
    default:
      return state
  }
}
