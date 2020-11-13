import { connect } from 'react-redux'


import { HeaderAuth as Self } from './HeaderAuth'
import {
  updateFilter,
  toggleFilter,
  loadUsers
} from '../../../pages/SearchUsersPage/SearchUsersPage.actions'

const mapStateToProps = ({ app, searchUsersPage }) => ({
  sidebarOpened: app.sidebarOpened,
  isMobile: app.dimensions.width < 768,
  isDesktop: app.dimensions.width >= 1280,
  filters: searchUsersPage.filters
})

const mapDispatchToProps = {
  updateFilter,
  toggleFilter,
  loadUsers
}

export const HeaderAuth = connect(mapStateToProps, mapDispatchToProps)(Self)
