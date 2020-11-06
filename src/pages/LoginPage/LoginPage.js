import React from 'react'


import * as S from './LoginPage.styles'
import { LoginForm } from './components/LoginForm'
import { LayoutStandard } from '../../layouts/Standard'

export const LoginPage = () => {
  return (
    <LayoutStandard>
      <S.LoginPageContainer>
        <S.LoginPageTitle>
          Մուտք գործել
        </S.LoginPageTitle>
        <LoginForm />
      </S.LoginPageContainer>  
    </LayoutStandard>
  )
}
