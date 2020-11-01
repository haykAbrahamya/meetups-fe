import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'


import { TestPage } from '../pages/TestPage'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/test' component={TestPage} />
      </Switch>
    </BrowserRouter>
  )
}