import { connect } from 'react-redux'


import { Sidebar as Self } from './Sidebar'
import { toggleSidebar } from '../../../common/app/app.actions'

const mapStateToProps = ({ app, user }) => ({
  sidebarOpened: app.sidebarOpened,
  isDesktop: app.dimensions.width >= 1436,
  username: user.userData.username
})

const mapDispatchToProps = {
  toggleSidebar
}

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Self)
