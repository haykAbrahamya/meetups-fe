import React from 'react'


import * as S from './LoginPage.styles'
import { LoginForm } from './components/LoginForm'

export const LoginPage = () => {
  return (
    <S.LoginPageContainer>
      <S.LoginPageTitle>
        Մուտք գործել
      </S.LoginPageTitle>
      <LoginForm />
    </S.LoginPageContainer>  
  )
}
