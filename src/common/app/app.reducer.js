import { APP_TYPES } from './app.types'

const initialState = {
  sidebarOpened: true,
  initialized: false,
  socketInitialized: false,
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  loading: false
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case APP_TYPES.APP_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    case APP_TYPES.SOCKET_INITIALIZED:
      return {
        ...state,
        socketInitialized: !state.socketInitialized
      }
    case APP_TYPES.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpened: !state.sidebarOpened
      }
    case APP_TYPES.SET_WINDOW_DIMENSIONS:
      return {
        ...state,
        dimensions: action.dimensions
      }
    case APP_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}
