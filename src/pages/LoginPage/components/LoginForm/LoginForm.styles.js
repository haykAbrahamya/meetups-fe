import styled from 'styled-components'

import { FlexButton, Input as InputComponent } from '../../../../ui'

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);

  @media (min-width: 768px) {
    width: 370px
  }
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`

export const ErrorText = styled.div`
  color: #FF3642;
  font-size: 11px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 10px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`

export const ShowPasswordIcon = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 20px;
  background: url('/images/icons/${p => p.passwordVisible ? 'hide' : 'show'}Password.svg');
  cursor: pointer;
  top: calc(50% - ${p => p.passwordVisible ? '5px' : '6.5px'});
  background-size: contain;
  background-repeat: no-repeat;
`

export const LoginButton = styled(FlexButton)`
  margin-top: 30px;
  width: 100%;

  @media (min-width: 768px) {
    width: 374px;
    margin-top: 40px;
  }
`

export const ForgotPassword = styled.div`
  color: #7D7A86;
  letter-spacing: 0.1em;
  font-size: 11px;
  font-weight: bold;
  margin-top: 40px;
  text-align: center;

  > span {
    cursor: pointer;
    color: #FF993C;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }
`

export const ResponseError = styled(ErrorText)`
  margin-bottom: 40px;
`