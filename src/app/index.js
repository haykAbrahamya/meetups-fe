import { connect } from 'react-redux'


import { App as Self } from './App'
import {
  initApp,
  initSockets,
  closeSockets,
  setWindowDimensions
} from '../common/app/app.actions'

const mapStateToProps = ({ user, app }) => ({
  isAuth: user.isAuth,
  userId: user.userData.id,
  initialized: app.initialized,
  socketInitialized: app.socketInitialized
})

const mapDispatchToProps = {
  initApp,
  initSockets,
  closeSockets,
  setWindowDimensions
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Self)