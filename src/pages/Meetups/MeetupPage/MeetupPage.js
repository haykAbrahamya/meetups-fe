import React, { useEffect, useCallback, useState } from 'react'


import * as S from './MeetupPage.styles'
import { MeetupForm } from './components/MeetupForm'


export const MeetupPage = ({
  match,
  userId,
  history,
  meetupForm,
  loadMeetupById
}) => {
  const [init, setInit] = useState(false)

  const { meetupId } = match.params

  const loadMeetup = useCallback(async () => {
    const meetup = await loadMeetupById(meetupId)

    if (meetup.creator.id !== userId) 
      history.push(`/meetups/${meetupId}`)
  }, [
    loadMeetupById,
    meetupId,
    history,
    userId
  ])

  useEffect(() => {
    if (!init) {
      if (meetupForm.id !== meetupId) {
        loadMeetup()
      }

      setInit(true)
    }
  }, [
    loadMeetup,
    meetupForm,
    meetupId,
    setInit,
    init
  ])

  return (
    <S.Layout>
      <S.MeetupPageContainer>
        <S.PageTitle>
          Ստեղծիր նոր MEET UP
        </S.PageTitle>
        <MeetupForm />
      </S.MeetupPageContainer>
    </S.Layout>  
  )
}