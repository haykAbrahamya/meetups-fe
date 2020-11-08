import React from 'react'


import * as S from './HeaderAuth.styles'


export const HeaderAuth = ({ sidebarOpened, isMobile }) => {
  const showLogoContainer = !sidebarOpened || isMobile
  
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
    </S.HeaderAuthContainer>  
  )
}