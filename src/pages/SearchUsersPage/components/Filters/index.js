import { connect } from 'react-redux'


import { Filters as Self } from './Filters'
import {
  toggleFilter,
  updateFilter
} from '../../SearchUsersPage.actions'


const mapStateToProps = ({ searchUsersPage, app }) => ({
  filters: searchUsersPage.filters,
  viewportWidth: app.dimensions.width
})

const mapDispatchToProps = {
  toggleFilter,
  updateFilter
}

export const Filters = connect(mapStateToProps, mapDispatchToProps)(Self)
