import { connect } from 'react-redux'


import { TestPage as Self } from './TestPage'
import { logout } from '../../common/user/user.actions'


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  logout
}

export const TestPage = connect(mapStateToProps, mapDispatchToProps)(Self)
