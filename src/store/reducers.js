import { combineReducers } from 'redux'
import { registrationForm } from '../pages/RegistrationPage/components/RegistrationForm/RegistrationForm.reducer'
import { loginForm } from '../pages/LoginPage/components/LoginForm/LoginForm.reducer'
import { user } from '../common/user/user.reducer'
import { app } from '../common/app/app.reducer'

export const rootReducer = combineReducers({
  registrationForm,
  loginForm,
  user,
  app
})
