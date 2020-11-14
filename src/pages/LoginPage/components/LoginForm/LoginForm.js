import React, { useState } from 'react'

import * as S from './LoginForm.styles'
import { Input, Loader } from '../../../../ui'

export const LoginForm = ({ login, error, loading }) => {
  const [formData, setFormData] = useState({
    username:"", 
    password:""
  })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const validateForm = () => {
    const {
      username,
      password,
    } = formData
    
    const errors = {}
    const emptyFieldError = '* Լրացրեք դաշտը'

    if (!username) {
      errors.username = emptyFieldError
    }
    if (!password) {
      errors.password = emptyFieldError
    }
    setFormErrors(errors)
    return !Object.keys(errors).length
  }
  
  const submitForm = () => {
    if (validateForm()) {
      login(formData)
    }
  }
  
  const updateForm = (obj) => {
    setFormData({
      ...formData,
      ...obj
    })
  }

  const PasswordIcon = () => {
    return (
      <S.ShowPasswordIcon
        passwordVisible={passwordVisible} 
        onClick={() => setPasswordVisible(!passwordVisible)} 
      />
    )
  }

  return (
    <S.LoginForm>
      {
        error &&
          <S.ResponseError>
            { error }
          </S.ResponseError>
      }
      <S.FormItem>
        <Input 
          placeholder='Մուտքանուն'
          value={formData.username}
          onChange={(e) => updateForm({ username: e.target.value})}
          error={!!formErrors.username}
        />
        {
          formErrors.username &&
            <S.ErrorText>
              { formErrors.username }
            </S.ErrorText>
        }
      </S.FormItem>
      <S.FormItem>
        <Input 
          placeholder='Գաղտնաբառ'
          rightPart={<PasswordIcon/>}
          type={passwordVisible ? 'text' : 'password'}
          value={formData.password}
          onChange={(e) => updateForm({ password: e.target.value})}
          error={!!formErrors.password}
        />
        {
          formErrors.password &&
            <S.ErrorText>
              { formErrors.password }
            </S.ErrorText>
        }
      </S.FormItem>
      <S.LoginButton onClick={submitForm} loading={loading} disabled={loading}>
        Մուտք գործել
      </S.LoginButton>
      <S.ForgotPassword>
        Մոռացե՞լ ես <span onClick={() => alert('Հա ինչ անենք, նոր ակաունտ սարքի')}>գաղտնաբառը</span>
    </S.ForgotPassword>
  </S.LoginForm>
  )
}
