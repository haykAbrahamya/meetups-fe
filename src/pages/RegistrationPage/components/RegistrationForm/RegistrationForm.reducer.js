import { REGISTRATION_TYPES } from './RegistrationForm.types'

const initialState = {
  loading: false,
  error: null
}

export const registrationForm = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_TYPES.REGISTRATION_REQUEST:
      return {
        ...state,
        loading: true
      }
    case REGISTRATION_TYPES.REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      }
    case REGISTRATION_TYPES.REGISTRATION_FAIL:
      return {
        ...state,
        loading: false,
        error: null
      }
    default:
      return state
  }
}