import { combineReducers } from 'redux'
import { registrationForm } from '../pages/RegistrationPage/components/RegistrationForm/RegistrationForm.reducer'
import { loginForm } from '../pages/LoginPage/components/LoginForm/LoginForm.reducer'

export const rootReducer = combineReducers({
  registrationForm,
  loginForm,
})
