import React, { useState, useEffect } from 'react'


import * as S from './MeetupForm.styles'
import {
  Input,
  DatePicker,
  TimePicker
} from '../../../../../ui'


export const MeetupForm = ({
  meetupForm,
  meetupForm: {
    error,
    loading,
    editMode
  },
  createMeetup,
  updateMeetup,
  clearFormData
}) => {
  const [formData, setFormData] = useState(meetupForm.initialData)

  useEffect(() => () => {
    clearFormData()
  }, [
    clearFormData
  ])

  useEffect(() => {
    if (meetupForm.initialData) {
      const date = new Date(meetupForm.initialData.startDate)

      setFormData({
        ...meetupForm.initialData,
        startDate: date,
        time: {
          hour: date.getHours(),
          minute: date.getMinutes()
        }
      })
    }
  }, [
    setFormData,
    meetupForm
  ])

  const submitForm = () => {
    const formDataToSend = formData
    console.log('formData', formData)
    if (typeof formData.startDate === 'string') {
      const [day, month, year] = formData.startDate.split("/")
      formDataToSend.startDate = new Date(year, month - 1, day)
    }

    formDataToSend.startDate.setHours(formData.time.hour)
    formDataToSend.startDate.setMinutes(formData.time.minute)
    
    if (editMode) {
      updateMeetup(formDataToSend)
    }
    else {
      createMeetup(formDataToSend)
    }
  }

  const updateForm = (obj) => {
    setFormData({
      ...formData,
      ...obj
    })
  }

  return (
    <S.MeetupFormContainer>
      {
        error &&
          <S.ResponseError>
            { error }
          </S.ResponseError>
      }
      <S.FormItem>
        <S.Label>
          Անվանում
        </S.Label>
        <Input
          value={formData.name}
          onChange={(e) => updateForm({ name: e.target.value})}
        />
      </S.FormItem>
      <S.FormItem>
        <S.Label>
          Նկարագրություն
        </S.Label>
        <S.DescriptionInput
          value={formData.description}
          onChange={(e) => updateForm({ description: e.target.value})}
        />
      </S.FormItem>
      <S.FormItem>
        <S.Label>
          Ամսաթիվ
        </S.Label>
        <S.DatesContainer>
          <DatePicker
            date={new Date(formData.startDate)}
            onChange={(startDate) => updateForm({ startDate })}
          />
          <TimePicker
            onTimeChange={time => updateForm({ time })}
            time={formData.time}
          />
        </S.DatesContainer>
      </S.FormItem>
      <S.SubmitButton onClick={submitForm} loading={loading} disabled={loading}>
        {
          editMode ? 'Փոփոխել' : 'Ստեղծել'
        }
      </S.SubmitButton>
    </S.MeetupFormContainer>
  )
}