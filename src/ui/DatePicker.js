import React from 'react'
import styled from 'styled-components'
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment'


export const DatePicker = (props) => {
  const {
    error,
    date
  } = props
  
  return (
    <DatePickerContainer>
      <DatePickerComponent 
        { ...props } 
        className='DatePicker'
        format={'DD/MM/YYYY'}
        value={moment(date).format('DD/MM/YYYY')}
      />
      {
        error &&
          <ErrorText>
            { error }
          </ErrorText>
      }
    </DatePickerContainer>
  )
}
const DatePickerComponent = styled(ModernDatepicker)`
  border: 1.5px solid #E4E3E8;
  border-radius: 5px;
  outline: none;
  padding: 0px 10px;
  background: #e7e7e7;
  font-family: sans-serif;
  text-align: center;
  &.DatePicker {
    background: #e7e7e7;
    padding: 14px 10px;
  }
  &.DatePicker + div {
    z-index: 100;
  }

`

const DatePickerContainer = styled.div`
  display: flex;
  position: relative;
`

const ErrorText = styled.div`
  font-size: 11px;
  font-family: sans-serif;
  color: red;
  margin-top: 5px;
`