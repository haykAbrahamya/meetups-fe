import React from 'react'


import * as S from './RegistrationPage.styles'
import { RegistrationForm } from './components/RegistrationForm'

export const RegistrationPage = () => {
  return (
    <S.RegistrationPageContainer>
      <S.RegistrationPageTitle>
        Գրանցվել
      </S.RegistrationPageTitle>
      <RegistrationForm />
    </S.RegistrationPageContainer>  
  )
}
