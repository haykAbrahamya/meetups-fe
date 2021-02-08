import { connect } from 'react-redux'


import { LoginForm as Self } from './LoginForm';
import { login } from './LoginForm.actions';

const mapStateToProps = ({ loginForm }) => ({
  error: loginForm.error,
  loading: loginForm.loading
})

const mapDispatchToProps = {
  login
}

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(Self)