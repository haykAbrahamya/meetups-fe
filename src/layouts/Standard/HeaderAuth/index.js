import { connect } from 'react-redux'


import { HeaderAuth as Self } from './HeaderAuth'

const mapStateToProps = ({ app }) => ({
  sidebarOpened: app.sidebarOpened,
  isMobile: app.dimensions.width < 768
})

export const HeaderAuth = connect(mapStateToProps)(Self)
