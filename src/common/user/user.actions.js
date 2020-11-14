import { USER_TYPES } from './user.types'
import { FetchApi } from '../../helpers/FetchApi'
import { loadFollowing } from '../network/network.actions'


export const storeUserData = (userData, token) => async dispatch => {
  dispatch({
    type: USER_TYPES.STORE_USER_DATA,
    userData
  })

  FetchApi.setStorageData('userData', userData)
  if (token) {
    FetchApi.setToken(token)
  }

  dispatch(loadFollowing())
}

export const logout = (cb) => async dispatch => {
  dispatch({
    type: USER_TYPES.LOGOUT
  })

  FetchApi.removeToken()
  if (typeof cb === 'function') cb()
}

export const loadUserProfile = (userId) => async dispatch => {
  try {
    const { data } = FetchApi.get(`user/get-by-id?userId=${userId}`)

    dispatch({
      type: USER_TYPES.LOAD_PROFILE,
      userData: data
    })
  } catch (e) {
    console.log('err', e)
  }
}
