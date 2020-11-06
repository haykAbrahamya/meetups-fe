import { connect } from 'react-redux'


import { LoginForm as Self } from './LoginForm';
import { login } from './LoginForm.actions';

const mapStateToProps = ({ loginForm }) => ({
  error: loginForm.error
})

const mapDispatchToProps = {
  login
}

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(Self)