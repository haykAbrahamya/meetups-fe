import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

export const ProtectedRouteComponent = (props)  => {
  const { 
    isAuth
 } = props

  return (
    isAuth
      ? <Route { ...props }  />
      : <Redirect to='/login' />
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth
})

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent)
