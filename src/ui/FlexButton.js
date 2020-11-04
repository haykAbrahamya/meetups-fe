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
  width: 374px;
  padding: 20px 0px;
  color: #fff;
  font-family: sans-serif;
  background: #7A4BFF;
  cursor: pointer;
  border-radius: 5px;
`
