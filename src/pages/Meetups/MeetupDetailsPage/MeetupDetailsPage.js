import React, { useEffect } from 'react'
import moment from 'moment'


import * as S from './MeetupDetailsPage.styles'
import { LayoutStandard } from '../../../layouts/Standard'


export const MeetupDetailsPage = ({
  match,
  meetup,
  loadMeetupById
}) => {
  const meetupId = match.params.meetupId

  useEffect(() => {
    loadMeetupById(meetupId)
  }, [
    loadMeetupById,
    meetupId
  ])

  if (!meetup.creator) return null

  const {
    id,
    name,
    creator,
    startDate,
    description
  } = meetup

  const [firstName = '', lastname = ' '] = creator.fullname.split(' ')

  return (
    <LayoutStandard>
      <S.MeetupDetailsPageContainer>
        <S.MeetupCard to={`/meetups/${id}`}>
          <S.MeetupInfo>
            <S.Label>
             Անվանում։ <span>{ name }</span>
            </S.Label>
            <S.Label>
             Նկարագրություն։ <span>{ description }</span>
            </S.Label>
            <S.Label>
             Սկսվում է։ <span>{ moment(startDate).format('DD/MM/YYYY HH:MM') }</span>
            </S.Label>
          </S.MeetupInfo>
           <S.UserCard to={`/profile/${creator.username}`}>
              <S.Avatar path={creator.avatarSrc}>
                { `${firstName[0]} ${lastname[0]}`}
              </S.Avatar>
              <span>
                { creator.fullname }
              </span>
            </S.UserCard>  
        </S.MeetupCard>
      </S.MeetupDetailsPageContainer>
    </LayoutStandard>
  )
}