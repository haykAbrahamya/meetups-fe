import { SEARCH_USERS_TYPES, sortFields } from './SearchUsersPage.types'
import { getQueryString } from '../../lib/getQueryString'
import { browserHistory } from '../../system/history'
import { FetchApi } from '../../helpers/FetchApi'
import { setLoading } from '../../common/app/app.actions'


export const toggleFilter = () => ({
  type: SEARCH_USERS_TYPES.TOGGLE_FILTER
})

export const updateFilter = (filters, updateQuery = true) => (dispatch, getState) => {
  dispatch({
    type: SEARCH_USERS_TYPES.UPDATE_FILTER,
    filters
  })

  if (updateQuery) {
    dispatch(updateQueryFromFilter({
      ...filters,
      ...getState().searchUsersPage.filters
    }))
  }
}

export const updateQueryFromFilter = (filters) => async (dispatch, getState) => {
  let searchFilters = filters || getState().searchUsersPage.filter
  const queryString = getQueryString(searchFilters)
  const pathname = `/search${queryString}`

  browserHistory.push({ pathname })
}

export const loadUsers = (filters) => async (dispatch, getState) => {
  const searchFilters = filters || getState().searchUsersPage.filters
  const filtersString = getQueryString(searchFilters)

  try {
    dispatch(setLoading(true))
    const { data } = await FetchApi.get(`user/search${filtersString}`)

    dispatch({
      type: SEARCH_USERS_TYPES.LOAD_USERS,
      users: data
    })
  } catch (e) {
    alert('error')
    console.log('error', e)
  } finally {
    dispatch(setLoading(false))
  }
}

export const updateFilterFromQuery = (query, match) => async (dispatch, getState) => {
  let filters = {}

  Object.keys(query).forEach(key => {
    if (key === 'sortField') {
      filters.sortField = sortFields[query[key]]
    } else {
      filters[key] = query[key]
    }
  })

  dispatch(updateFilter(filters))
  dispatch(loadUsers(filters))
}

export const clearFilters = () => ({
  type: SEARCH_USERS_TYPES.CLEAR_FILTERS
})