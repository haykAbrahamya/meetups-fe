import { connect } from 'react-redux'


import { Routes as Self } from './Routes'

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth,
  username: user.userData.username
})

export const Routes = connect(mapStateToProps)(Self)