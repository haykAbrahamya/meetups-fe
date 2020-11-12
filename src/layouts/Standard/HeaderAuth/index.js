import { connect } from 'react-redux'


import { HeaderAuth as Self } from './HeaderAuth'
import {
  updateFilter,
  loadUsers
} from '../../../pages/SearchUsersPage/SearchUsersPage.actions'

const mapStateToProps = ({ app, searchUsersPage }) => ({
  sidebarOpened: app.sidebarOpened,
  isMobile: app.dimensions.width < 768,
  filters: searchUsersPage.filters
})

const mapDispatchToProps = {
  updateFilter,
  loadUsers
}

export const HeaderAuth = connect(mapStateToProps, mapDispatchToProps)(Self)
