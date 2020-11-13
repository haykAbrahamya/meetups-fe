import { APP_TYPES } from './app.types'
import { storeUserData } from '../user/user.actions.js'
import { FetchApi } from '../../helpers/FetchApi'


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

export const toggleSidebar = () => async dispatch => {
  dispatch({
    type: APP_TYPES.TOGGLE_SIDEBAR
  })
}

export const setWindowDimensions = (dimensions) => async dispatch => {
  dispatch({
    type: APP_TYPES.SET_WINDOW_DIMENSIONS,
    dimensions
  })
}