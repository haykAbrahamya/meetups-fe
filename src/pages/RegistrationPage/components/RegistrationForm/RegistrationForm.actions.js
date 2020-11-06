import { FetchApi } from '../../../../helpers/FetchApi'
import { REGISTRATION_TYPES } from './RegistrationForm.types'

export const register = (form, onSuccess) => async dispatch => {
  try {
    dispatch({
      type: REGISTRATION_TYPES.REGISTRATION_REQUEST
    })

    await FetchApi.post('user', form)

    //call login function after registration

    dispatch({
      type: REGISTRATION_TYPES.REGISTRATION_SUCCESS
    })

    alert('Success')

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