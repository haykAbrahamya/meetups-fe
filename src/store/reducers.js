import { combineReducers } from 'redux'


import { registrationForm } from '../pages/RegistrationPage/components/RegistrationForm/RegistrationForm.reducer'
import { searchUsersPage } from '../pages/SearchUsersPage/SearchUsersPage.reducer'
import { meetups } from '../pages/Meetups/Meetups.reducer'
import { loginForm } from '../pages/LoginPage/components/LoginForm/LoginForm.reducer'
import { profile } from '../pages/ProfilePage/ProfilePage.reducer'
import { network } from '../common/network/network.reducer'
import { user } from '../common/user/user.reducer'
import { app } from '../common/app/app.reducer'

export const rootReducer = combineReducers({
  registrationForm,
  searchUsersPage,
  meetups,
  loginForm,
  profile,
  network,
  user,
  app
})
