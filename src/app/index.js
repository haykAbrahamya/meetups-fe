import { connect } from 'react-redux'


import { App as Self } from './App'
import {
  initApp,
  setWindowDimensions
} from '../common/app/app.actions'

const mapStateToProps = ({ user, app }) => ({
  isAuth: user.isAuth,
  userId: user.userData.id,
  initialized: app.initialized
})

const mapDispatchToProps = {
  initApp,
  setWindowDimensions
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Self)