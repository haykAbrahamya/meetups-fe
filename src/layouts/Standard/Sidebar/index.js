import { connect } from 'react-redux'


import { Sidebar as Self } from './Sidebar'
import { toggleSidebar } from '../../../common/app/app.actions'

const mapStateToProps = ({ app }) => ({
  sidebarOpened: app.sidebarOpened
})

const mapDispatchToProps = {
  toggleSidebar
}

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Self)
