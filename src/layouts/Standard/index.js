import { connect } from 'react-redux'


import { LayoutStandard as Self } from './LayoutStandard'

const mapStateToProps = ({ user, app }) => ({
  isAuth: user.isAuth,
  isMobile: app.dimensions.width < 768,
  loading: app.loading
})

export const LayoutStandard = connect(mapStateToProps)(Self)
