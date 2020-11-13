import { connect } from 'react-redux'


import { UsersSearchInput as Self } from './UsersSearchInput'
import {
  updateFilter,
  loadUsers
} from '../../pages/SearchUsersPage/SearchUsersPage.actions'


const mapStateToProps = ({ searchUsersPage }) => ({
  filters: searchUsersPage.filters
})

const mapDispatchToProps = {
  updateFilter,
  loadUsers
}

export const UsersSearchInput = connect(mapStateToProps, mapDispatchToProps)(Self)