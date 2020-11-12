import { SEARCH_USERS_TYPES } from './SearchUsersPage.types'

const userObj = {
  fullname: 'Hayk Abrahamyan',
  username: 'hayk.abrahamyan',
  rating: 3.5,
  followersCount: 153,
  meetupsCount: 32,
  specialization: 'Front-end Developer',
  about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

const initialState = {
  filterOpened: false,
  results: [
    userObj,
    userObj,
    userObj,
    userObj,
    userObj
  ],
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