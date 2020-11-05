import { connect } from 'react-redux'


import { RegistrationForm as Self } from './RegistrationForm'
import { register } from './RegistrationForm.actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  register
}

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(Self)