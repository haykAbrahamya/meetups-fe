import { connect } from 'react-redux'


import  { SearchUsersPage as Self } from './SearchUsersPage'
import {
  loadUsers,
  toggleFilter,
  clearFilters,
  updateFilterFromQuery
} from './SearchUsersPage.actions'

const mapStateToProps = ({ searchUsersPage, results }) => ({
  filterOpened: searchUsersPage.filterOpened,
  results: searchUsersPage.results
})

const mapDispatchToProp = {
  loadUsers,
  toggleFilter,
  clearFilters,
  updateFilterFromQuery
}

export const SearchUsersPage = connect(mapStateToProps, mapDispatchToProp)(Self)
