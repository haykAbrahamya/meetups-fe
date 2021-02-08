import { APP_TYPES } from './app.types'
import { storeUserData } from '../user/user.actions.js'
import { FetchApi } from '../../helpers/FetchApi'
import { initSocket, closeSocket } from '../../socket'


export const initApp = () => async dispatch => {
  const isAuth = !!FetchApi.getToken()

  if (isAuth) {
    const userData = FetchApi.getStorageData('userData')
    dispatch(storeUserData(userData))
  }

  dispatch({
    type: APP_TYPES.APP_INITIALIZED
  })
}

export const toggleSidebar = () => ({
  type: APP_TYPES.TOGGLE_SIDEBAR
})

export const setWindowDimensions = (dimensions) => ({
  type: APP_TYPES.SET_WINDOW_DIMENSIONS,
  dimensions
})

export const setLoading = (loading) => ({
  type: APP_TYPES.SET_LOADING,
  loading
})

export const initSockets = (userId) => dispatch => {
  initSocket(userId)
  dispatch({
    type: APP_TYPES.SOCKET_INITIALIZED
  })
}

export const closeSockets = (userId) => dispatch => {
  closeSocket(userId)
  dispatch({
    type: APP_TYPES.SOCKET_INITIALIZED
  })
}