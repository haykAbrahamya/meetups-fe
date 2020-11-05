import { USER_TYPES } from './user.types'
import { FetchApi } from '../../helpers/FetchApi'


export const storeUserData = (userData, token) => async dispatch => {
  dispatch({
    type: USER_TYPES.STORE_USER_DATA,
    userData
  })

  FetchApi.setStorageData('userData', userData)
  FetchApi.setToken(token)
}

export const logout = (cb) => async dispatch => {
  dispatch({
    type: USER_TYPES.LOGOUT
  })

  FetchApi.removeToken()
  if (typeof cb === 'function') cb()
}