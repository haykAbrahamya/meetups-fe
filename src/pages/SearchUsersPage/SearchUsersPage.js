import React, { useEffect, useCallback, useState } from 'react'
import qs  from 'qs'


import * as S from './SearchUsersPage.styles'
import { UserSearchCard } from '../../components/UserSearchCard'
import { Filters } from './components/Filters'
import cx from '../../helpers/cx'


export const SearchUsersPage = ({
  match,
  results,
  filters,
  location,
  isDesktop,
  loadUsers,
  filterOpened,
  clearFilters,
  toggleFilter,
  updateFilterFromQuery,
  updateQueryFromFilter,
}) => {
  const [init, setInit] = useState(false)

  const updateFilter = useCallback(() => {
      const query = qs.parse(location.search, { ignoreQueryPrefix: true })
      updateFilterFromQuery(query, match)
  }, [
    updateFilterFromQuery,
    location.search,
    match
  ])

  useEffect(() => {
    if (!init) {
      updateFilter()
      setInit(true)
    }
  }, [
    init,
    setInit,
    loadUsers,
    clearFilters,
    updateFilter,
    updateFilterFromQuery,
  ])

  useEffect(() => {
    return () => {
      clearFilters()
    }
  }, [
    clearFilters
  ])

  const isFiltersOpen = filterOpened || isDesktop

  const RightPart = () => {
    return (
      <S.FiltersContainer className={cx({ filterOpened: isFiltersOpen })}>
        <Filters />
      </S.FiltersContainer>
    )
  }

  return (
    <S.Layout className={cx({ filterOpened: isFiltersOpen })} RightPart={isDesktop ? RightPart : null}>
      <S.ShadowBackground 
        onClick={filterOpened ? toggleFilter : null}
        className={cx({ filterOpened: isFiltersOpen })}
      />
      {
        !isDesktop &&
          <S.FiltersContainer className={cx({ filterOpened: isFiltersOpen })}>
            <Filters />
          </S.FiltersContainer>
      }
      <S.SearchUsersPageContainer className='PageContainer'>
        <S.Results>
          {
            !!results && results.map((user, ind) => {
              return (
                <S.SearchCardContainer key={user.id}>
                  <UserSearchCard user={user}/>
                </S.SearchCardContainer>
              )
            })
          }
        </S.Results>
      </S.SearchUsersPageContainer>
    </S.Layout>
  )
}
