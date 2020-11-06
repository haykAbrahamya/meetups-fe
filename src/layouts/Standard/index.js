import { connect } from 'react-redux'


import { LayoutStandard as Self } from './LayoutStandard'

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth
})

export const LayoutStandard = connect(mapStateToProps)(Self)
