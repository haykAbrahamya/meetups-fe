import React from 'react'
import styled from 'styled-components'


import TextAreaAutoSize from 'react-textarea-autosize'


export const TextArea = (props) => {
  const {
    children
  } = props

  return (
    <TextAreaContainer { ...props } spellCheck='false'>
      { children }
    </TextAreaContainer>
  )
}


const TextAreaContainer = styled(TextAreaAutoSize)`
  padding: 17px;
  background: #e7e7e7;
  border: 2px solid ${p => p.error ? '#FF364E' : 'transparent'};
  font-family: sans-serif;
  border-radius: 7px;
  outline: none;
  resize: none;
  min-height: 200px;
  transition: border-color 0.3s ease;
  max-height: 300px;

  scrollbar-color: #5E36FF transparent;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
    padding-right: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius: 5px;
    background-color: #5E36FF;
    border-top: 1px solid white;
    background-clip: content-box;
  }

  ::placeholder {
    color: #7D7A86;
  }

  &:focus {
    border-color: #5E36FF;
  }
`
