import React from 'react'
import styled from 'styled-components'
import cx from '../helpers/cx'


export const RadioButton = ({ selected }) => {
  return (
    <RadioButtonContainer className={cx({ selected })}>
      {
        selected &&
          <RadioButtonCircle />  
      }
    </RadioButtonContainer>  
  )
}

const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 26px;
  min-height: 26px;
  border: 2px solid #B5B2BD;
  border-radius: 50%;
  cursor: pointer;

  &.selected {
    border-color: #64C4B3;
  }
`

const RadioButtonCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #64C4B3;
  box-shadow: 0px 5px 10px rgba(100, 196, 179, 0.5);
`