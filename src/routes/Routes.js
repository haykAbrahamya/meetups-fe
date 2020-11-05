import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'


import { TestPage } from '../pages/TestPage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { LoginPage } from '../pages/LoginPage'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/test' component={TestPage} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}