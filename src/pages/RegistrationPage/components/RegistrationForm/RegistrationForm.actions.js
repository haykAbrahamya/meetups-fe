import { FetchApi } from '../../../../helpers/FetchApi'
import { REGISTRATION_TYPES } from './RegistrationForm.types'
import { login } from '../../../LoginPage/components/LoginForm/LoginForm.actions'


export const register = (form, onSuccess) => async dispatch => {
  try {
    dispatch({
      type: REGISTRATION_TYPES.REGISTRATION_REQUEST
    })

    await FetchApi.post('user', form)

    dispatch(login({
      username: form.username,
      password: form.password
    }))

    dispatch({
      type: REGISTRATION_TYPES.REGISTRATION_SUCCESS
    })

    if (typeof onSuccess === 'function') onSuccess()
  } catch (e) {
    alert('Error')

    dispatch({
      type: REGISTRATION_TYPES.REGISTRATION_FAIL,
      error: e.data 
        ? e.data.message
        : e.message
    })
  }
}