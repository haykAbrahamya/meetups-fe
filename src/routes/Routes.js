import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'


import { TestPage } from '../pages/TestPage'
import { RegistrationPage } from '../pages/RegistrationPage'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/test' component={TestPage} />
        <Route exact path='/register' component={RegistrationPage} />
      </Switch>
    </BrowserRouter>
  )
}