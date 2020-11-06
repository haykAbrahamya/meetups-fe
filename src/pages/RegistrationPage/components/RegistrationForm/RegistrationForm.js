import React, { useState } from 'react'


import * as S from './RegistrationForm.styles'
import { StrengthChecker } from '../../../../components/StrengthChecker'

export const RegistrationForm = ({ register, error }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    retypePassword: ''
  })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [formErrors, setFormErrors] = useState({})

  const validateForm = () => {
    const {
      fullname,
      username,
      password,
      retypePassword
    } = formData

    const errors = {}
    const emptyFieldError = '* Լրացրեք դաշտը'

    if (!fullname) {
      errors.fullname = emptyFieldError
    }

    if (!username) {
      errors.username = emptyFieldError
    } else if (username.length < 5) {
      errors.username = 'Մուտքանունը պետք է պարունակի 5 կամ ավելի նիշ'
    }

    if (!password) {
      errors.password = emptyFieldError
    } else if (password.length < 5) {
      errors.password = 'Գաղտնաբառը պետք է պարունակի 5 կամ ավելի նիշ'
    }

    if (!retypePassword) {
      errors.retypePassword = emptyFieldError
    } else if (password !== retypePassword) {
      errors.retypePassword = 'Գաղտնաբառերը չեն համընկնում'
    }
    console.log('errors', errors)
    setFormErrors(errors)
    return !Object.keys(errors).length
  }

  const updateForm = (obj) => {
    setFormData({
      ...formData,
      ...obj
    })
  }

  const submitForm = () => {
    if (validateForm()) {
      register(formData)
    }
  }

  const PasswordIcon = () => {
    return (
      <S.ShowPasswordIcon
        passwordVisible={passwordVisible} 
        onClick={() => setPasswordVisible(!passwordVisible)} 
      />
    )
  }

  const updatePasswordStrength = (password) => {
    let strengthType = 0

    if (password.length > 9) {
      strengthType = 3
    } else if (password.length > 7) {
      strengthType = 2
    } else if (password.length > 4) {
      strengthType = 1
    }

    if (strengthType !== passwordStrength)
      setPasswordStrength(strengthType)
  }

  const passwordInputType = passwordVisible ? 'text' : 'password'

  return (
    <S.RegistrationForm>
      {
        error &&      
          <S.ResponseError>
            { error }
          </S.ResponseError>
      }
      <S.FormItem>
        <S.Input
          placeholder='Անուն'
          value={formData.fullname}
          onChange={(e) => updateForm({ fullname: e.target.value})}
          error={!!formErrors.fullname}
        />
        {
          formErrors.fullname &&
            <S.ErrorText>
              { formErrors.fullname }
            </S.ErrorText>
        }
      </S.FormItem>
      <S.FormItem>
        <S.Input
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
      <S.PasswordItem>
        <S.Input
          placeholder='Գաղտնաբառ'
          value={formData.password}
          onChange={(e) => {
            const password = e.target.value
            updateForm({ password })
            updatePasswordStrength(password)
          }}
          rightPart={<PasswordIcon />}
          type={passwordInputType}
          error={!!formErrors.password}
        />
        <S.StrengthCheckerContainer>
          <StrengthChecker 
            strengthType={passwordStrength} 
            linesCount={3}
          />
        </S.StrengthCheckerContainer>
        {
          formErrors.password &&
            <S.ErrorText>
              { formErrors.password }
            </S.ErrorText>
        }
      </S.PasswordItem>
      <S.FormItem>
        <S.Input
          placeholder='Կրկնել գաղտնաբառը'
          value={formData.retypePassword}
          onChange={(e) => updateForm({ retypePassword: e.target.value})}
          type={passwordInputType} 
          error={!!formErrors.retypePassword}
        />
        {
          formErrors.retypePassword &&
            <S.ErrorText>
              { formErrors.retypePassword }
            </S.ErrorText>
        }
      </S.FormItem>
      <S.TermsAndConditions>
        Գրանցվելով համաձայնվում եմ <span>Օրենքներին</span>
      </S.TermsAndConditions>
      <S.RegisterButton onClick={submitForm}>Գրանցվել</S.RegisterButton>
    </S.RegistrationForm>  
  )
}
