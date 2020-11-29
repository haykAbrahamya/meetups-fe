import React from 'react'
import styled from 'styled-components'
import ReactTimePicker from 'react-times';
import 'react-times/css/material/default.css';


export const TimePicker = (props) => {
  const {
    time
  } = props

  return (
    <TimePickerContainer>
      <TimePickerComponent 
        { ...props } 
        withoutIcon
        time={time && `${time.hour}:${time.minute}`}
      />
    </TimePickerContainer>
  )
}

const TimePickerContainer = styled.div`
  .time_picker_container {
    width: 300px;
    > div {
      box-shadow: none;
      background: #e7e7e7;
      border-radius: 5px;
    }
  }
`

const TimePickerComponent = styled(ReactTimePicker)`
`