import React from 'react'
import { useHistory } from 'react-router-dom'


import * as S from './HeaderAuth.styles'
import { GLYPHS, Icon } from '../../../components/Icon'
import { UsersSearchInput } from '../../../components/UsersSearchInput'


export const HeaderAuth = ({
  sidebarOpened,
  updateFilter,
  toggleFilter,
  loadUsers,
  filters,
  isMobile,
  isDesktop
 }) => {
  const history = useHistory()
  const isSearchPage = history.location.pathname === '/search'
  const showLogoContainer = !sidebarOpened

  return (
    <S.HeaderAuthContainer>
      {
        showLogoContainer &&
          <>
            <S.Logo />
            <S.ProjectName>
              MEET UP
            </S.ProjectName>
          </>
      }
      <UsersSearchInput />
      {
        !isDesktop && isSearchPage &&
          <S.ToggleFilterButton onClick={toggleFilter}>
            <Icon
              glyph={GLYPHS.filter}
            />
          </S.ToggleFilterButton>
      }
    </S.HeaderAuthContainer>  
  )
}