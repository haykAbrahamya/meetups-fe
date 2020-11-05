import { LOGIN_TYPES } from './LoginForm.types'
import { FetchApi } from '../../../../helpers/FetchApi'
import { storeUserData } from '../../../../common/user/user.actions'


export const login = (form, onSuccess) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_TYPES.LOGIN_REQUEST
    })

    const req = await FetchApi.post('user/login', form)

    const {
      data: {
        userData,
        token
      }
    } = req

    dispatch(storeUserData(userData, token))

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