import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route
} from 'react-router-dom'


import { TestPage } from '../pages/TestPage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { LoginPage } from '../pages/LoginPage'
import { SearchUsersPage } from '../pages/SearchUsersPage'
import { ProtectedRoute } from './ProtectedRoute'
import { NotFoundPage } from '../pages/NotFoundPage'
import { MeetupsPage } from '../pages/MeetupsPage'


export const Routes = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path='/test' component={TestPage} />
        <ProtectedRoute exact path='/last-meetups' component={TestPage} />
        <ProtectedRoute exact path='/notifications' component={TestPage} />
        <ProtectedRoute exact path='/profile' component={TestPage} />
        <ProtectedRoute exact path='/search' component={SearchUsersPage} />
        <ProtectedRoute exact path='/settings' component={TestPage} />
        <ProtectedRoute path='/meetups/:meetupId' component={MeetupsPage} />
        <ProtectedRoute path='/meetups' component={MeetupsPage} />
        {
          isAuth &&
            <Redirect from='/login' to='/' />
        }
        {
          isAuth &&
            <Redirect from='/register' to='/' />
        }
        <Redirect exact from='/' to='/profile' />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}