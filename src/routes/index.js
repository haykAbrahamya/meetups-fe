import { connect } from 'react-redux'


import { Routes as Self } from './Routes'

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth
})

export const Routes = connect(mapStateToProps)(Self)