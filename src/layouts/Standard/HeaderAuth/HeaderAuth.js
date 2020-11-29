import React from 'react'


import * as S from './HeaderAuth.styles'

export const HeaderAuth = ({
  sidebarOpened,
  updateFilter,
  toggleFilter,
  loadUsers,
  filters,
  isMobile,
  isDesktop
 }) => {
  const showLogoContainer = !sidebarOpened

  return (
    <S.HeaderAuthContainer>
      {
        showLogoContainer &&
          <S.LogoContainer>
            <S.Logo />
            <S.ProjectName>
              MEET UP
            </S.ProjectName>
          </S.LogoContainer>
      }
    </S.HeaderAuthContainer>  
  )
}