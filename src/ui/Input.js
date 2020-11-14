import React from 'react'
import styled from 'styled-components'


export const Input = (props) => {
  const {
    children,
    rightPart,
    leftPart,
    containerClassname
  } = props

  return (
    <InputContainer className={containerClassname}>
      {
        leftPart
      }
      <InputStyled { ...props } spellcheck='false' autofill='false'>
        { children }
      </InputStyled>
      {
        rightPart
      }
    </InputContainer>
  )
}


const InputContainer = styled.div`
  position: relative;
`

const InputStyled = styled.input`
  width: calc(100% - ${p => p.rightPart ? '55px' : '20px'});
  padding: 14px ${p => p.rightPart ? '45px' : '14px'} 14px 10px;
  background: #e7e7e7;
  border-radius: 5px;
  border: 2px solid ${p => p.error ? '#FF364E' : 'transparent'};
  outline: none;
  font-family: sans-serif;
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px #e7e7e7 inset !important;
  }

  ::placeholder {
    color: #7D7A86;
  }
  &:focus {
    border: 2px solid #5E36FF;
  }
  transition: all 0.3s ease;

  &:focus {
    border-color: #5E36FF;
  }
`
