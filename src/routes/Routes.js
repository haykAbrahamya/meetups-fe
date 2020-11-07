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
import { ProtectedRoute } from './ProtectedRoute'
import { NotFoundPage } from '../pages/NotFoundPage'


export const Routes = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path='/test' component={TestPage} />
        <ProtectedRoute exact path='/meetups' component={TestPage} />
        <ProtectedRoute exact path='/last-meetups' component={TestPage} />
        <ProtectedRoute exact path='/notifications' component={TestPage} />
        <ProtectedRoute exact path='/main' component={TestPage} />

        {
          isAuth &&
            <Redirect from='/login' to='/test' />
        }
        {
          isAuth &&
            <Redirect from='/register' to='/test' />
        }
        <Redirect exact from='/' to='/test' />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}