import { LOGIN_TYPES } from './LoginForm.types'
import { FetchApi } from '../../../../helpers/FetchApi'

export const login = (form, onSuccess) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_TYPES.LOGIN_REQUEST
    })

    const req = await FetchApi.post('user/login', form)

    const {
      reqData: {
        userData,
        token
      }
    } = req

    //dispatch(storeUserData(userData))

    FetchApi.setToken(token)

    dispatch({
      type: LOGIN_TYPES.LOGIN_SUCCESS
    })

    if (typeof onSuccess === 'function')
      onSuccess()

  } catch (e) {
    dispatch({
      type: LOGIN_TYPES.LOGIN_FAIL,
      error: e.data 
        ? e.data.message
        : e.message 
    })
  }
}