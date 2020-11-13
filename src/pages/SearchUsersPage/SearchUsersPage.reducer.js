import { SEARCH_USERS_TYPES } from './SearchUsersPage.types'

const initialState = {
  filterOpened: false,
  results: [],
  filters: {}
}

export const searchUsersPage = (state = initialState, action) => {
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