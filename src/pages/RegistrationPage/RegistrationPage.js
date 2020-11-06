import React from 'react'


import * as S from './RegistrationPage.styles'
import { RegistrationForm } from './components/RegistrationForm'
import { LayoutStandard } from '../../layouts/Standard'

export const RegistrationPage = () => {
  return (
    <LayoutStandard>
      <S.RegistrationPageContainer>
        <S.RegistrationPageTitle>
          Գրանցվել
        </S.RegistrationPageTitle>
        <RegistrationForm />
      </S.RegistrationPageContainer>  
    </LayoutStandard>
  )
}
