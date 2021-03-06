import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route
} from 'react-router-dom'


import { TestPage } from '../../pages/TestPage'
import { RegistrationPage } from '../../pages/RegistrationPage'
import { LoginPage } from '../../pages/LoginPage'
import { SearchUsersPage } from '../../pages/SearchUsersPage'
import { ProtectedRoute } from './ProtectedRoute'
import { NotFoundPage } from '../../pages/NotFoundPage'
import { ProfilePage } from '../../pages/ProfilePage'
import { MeetupPage } from '../../pages/Meetups/MeetupPage'
import { MeetupsListPage } from '../../pages/Meetups/MeetupsListPage'
import { MeetupDetailsPage } from '../../pages/Meetups/MeetupDetailsPage'


export const Routes = ({ isAuth, username }) => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path='/test' component={TestPage} />
        <ProtectedRoute exact path='/meetups/:meetupId/edit' component={MeetupPage} />
        <ProtectedRoute exact path='/meetups/create' component={MeetupPage} />
        <ProtectedRoute exact path='/meetups/:meetupId' component={MeetupDetailsPage} />
        <ProtectedRoute exact path='/meetups' component={MeetupsListPage} />
        <ProtectedRoute exact path='/last-meetups' component={TestPage} />
        <ProtectedRoute exact path='/notifications' component={TestPage} />
        <ProtectedRoute exact path='/profile/:username' component={ProfilePage} />
        <ProtectedRoute exact path='/search' component={SearchUsersPage} />
        <ProtectedRoute exact path='/settings' component={TestPage} />

        {
          isAuth &&
            <Redirect from='/login' to='/' />
        }
        {
          isAuth &&
            <Redirect from='/register' to='/' />
        }
        <Redirect exact from='/' to={`/profile/${username}`} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}