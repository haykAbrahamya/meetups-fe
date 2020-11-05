import { connect } from 'react-redux'


import { App as Self } from './App'
import {
  initApp
} from '../common/app/app.actions'

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth
})

const mapDispatchToProps = {
  initApp
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Self)