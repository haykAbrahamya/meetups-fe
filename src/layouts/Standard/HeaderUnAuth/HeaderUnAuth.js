import React from 'react'
import { useHistory } from 'react-router-dom'


import * as S from './HeaderUnAuth.styles'


export const HeaderUnAuth = (props) => {
  const history = useHistory()

  const isRegistrationPage = history.location.pathname === '/register'
  const isLoginPage = history.location.pathname === '/login'

  const showAllButtons = !isRegistrationPage && !isLoginPage

  return (
    <S.HeaderUnAuthContainer>
      <S.HeaderUnAuthWrapper>
        <S.LogoContainer>
          <S.Logo />
          <S.ProjectName>
            HAY RUS GAZAN
          </S.ProjectName>
        </S.LogoContainer>
        <S.LinksContainer>
          <S.PageLink to='/'>
            Մեր մասին
          </S.PageLink>
          <S.PageLink to='/'>
            Մեր մասին
          </S.PageLink>
          <S.PageLink to='/'>
            Մեր մասին
          </S.PageLink>
        </S.LinksContainer>
        <S.ButtonsContainer showAllButtons={showAllButtons}>
          {
            !showAllButtons &&
              <S.HelperText>
                {
                  isRegistrationPage
                    ? 'Արդեն գրանցվե՞լ ես'
                    : 'Գրանցված չե՞ս'
                }
              </S.HelperText>
          }
          {
            (isLoginPage || showAllButtons) &&
              <S.Button to='/register'>
                Գրանցվել
              </S.Button>
          }
          {
            (isRegistrationPage || showAllButtons) &&
              <S.Button to='/login'>
                Մուտք գործել
              </S.Button>
          }
        </S.ButtonsContainer>
        <S.MenuToggler />
      </S.HeaderUnAuthWrapper>
    </S.HeaderUnAuthContainer>
  )
}
