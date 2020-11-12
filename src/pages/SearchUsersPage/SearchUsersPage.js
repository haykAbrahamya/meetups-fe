import React, { useEffect, useCallback, useState } from 'react'
import qs  from 'qs'


import * as S from './SearchUsersPage.styles'
import { UserSearchCard } from '../../components/UserSearchCard'
import { Filters } from './components/Filters'
import { Icon, GLYPHS } from '../../components/Icon'
import cx from '../../helpers/cx'


export const SearchUsersPage = ({
  match,
  results,
  location,
  filterOpened,
  clearFilters,
  loadUsers,
  toggleFilter,
  updateFilterFromQuery,
  updateQueryFromFilter,
  filters
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

  return (
    <S.Layout className={cx({ filterOpened })}>
      <S.ShadowBackground 
        onClick={filterOpened ? toggleFilter : null}
        className={cx({ filterOpened })}
      />
      <S.FiltersContainer className={cx({ filterOpened })}>
        <Filters />
      </S.FiltersContainer>
      <S.SearchUsersPageContainer className='PageContainer'>
        {
          results.map((user, ind) => {
            return (
              <S.SearchCardContainer key={ind}>
                <UserSearchCard user={user}/>
              </S.SearchCardContainer>
            )
          })
        }
        <S.ToggleFilterButton onClick={toggleFilter}>
          <Icon
            glyph={GLYPHS.settings}
            width={40}
            height={40}
          />
        </S.ToggleFilterButton>
      </S.SearchUsersPageContainer>
    </S.Layout>
  )
}