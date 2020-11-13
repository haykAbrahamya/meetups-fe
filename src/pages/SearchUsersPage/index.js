import { connect } from 'react-redux'


import  { SearchUsersPage as Self } from './SearchUsersPage'
import {
  loadUsers,
  toggleFilter,
  clearFilters,
  updateFilterFromQuery
} from './SearchUsersPage.actions'

const mapStateToProps = ({ searchUsersPage, results, app }) => ({
  filterOpened: searchUsersPage.filterOpened,
  results: searchUsersPage.results,
  isDesktop: app.dimensions.width >= 1280
})

const mapDispatchToProp = {
  loadUsers,
  toggleFilter,
  clearFilters,
  updateFilterFromQuery
}

export const SearchUsersPage = connect(mapStateToProps, mapDispatchToProp)(Self)
