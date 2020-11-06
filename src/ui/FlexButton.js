import React from 'react'
import styled from 'styled-components'


export const FlexButton = (props) => {
  const {
    children
  } = props

  return (
    <Button { ...props }>
      { children }
    </Button>
  )
}


const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  width: 374px;
  color: #fff;
  background: #5E36FF;
  cursor: pointer;
  border-radius: 7px;
  transition: background 0.3s ease;

  &:hover {
    background: #7E5EFD;
  }
`
