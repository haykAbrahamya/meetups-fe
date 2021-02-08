import React, { useState } from 'react'
import moment from 'moment'


import * as S from './MeetupCard.styles'
import { AvatarCard } from '../AvatarCard'
import { Icon, GLYPHS } from '../Icon'
import cx from '../../helpers/cx'

export const MeetupCard = ({
  userId,
  meetup,
  history,
  joinMeetup,
  deleteMeetup,
  setFormInitialData
}) => {
  const {
    id,
    name,
    joined,
    creator,
    startDate,
    description,
    participantsCount
  } = meetup
  const [loading, setLoading] = useState(false)

  const startTime = moment(startDate).format('DD/MM/YYYY HH:MM')

  const handleDeleteMeetup = (e) => {
    e.preventDefault()
    deleteMeetup(id)
  }

  const handleEditMeetup = (e) => {
    e.preventDefault()
    const date = new Date(startDate)
    setFormInitialData({
      id,
      name,
      time: {
        minute: date.getMinutes(),
        hour: date.getHours()
      },
      startDate: new Date(startDate),
      description
    })

    history.push(`/meetups/${id}/edit`)
  }

  const onJoinMeetup = async (e) => {
    e.preventDefault()
    setLoading(true)
    await joinMeetup(id, !joined)
    setLoading(false)
  }

  const amICreator = creator.id === userId

  return (
    <S.MeetupCard to={`/meetups/${id}`}>
      <S.MeetupImage path={'/images/background.jpg'}/>
      <S.MeetupInfo>
        <S.MeetupHeader>
          <AvatarCard user={creator}/>
          {
            amICreator &&
              <S.ButtonsContainer>
                <S.HeaderIcon onClick={(e) => handleEditMeetup(e)}>
                  <Icon
                    glyph={GLYPHS.edit}
                    width='17'
                    height='17'
                    fill='#555'
                  />
                </S.HeaderIcon>
                <S.HeaderIcon onClick={(e) => handleDeleteMeetup(e)}>
                  <Icon 
                    glyph={GLYPHS.delete}
                    width='17'
                    height='17'
                    fill='#555'
                  />
                </S.HeaderIcon>
              </S.ButtonsContainer>
          }
        </S.MeetupHeader>
        <S.MeetupInfoWrapper>
          <S.InfoRow>
            { name }
          </S.InfoRow>
          <S.InfoRow className='description'>
            { description }
          </S.InfoRow>
          <S.InfoRow>
            <Icon 
              glyph={GLYPHS.followers}
              width='20'
              height='20'
              fill='#5E36FF'
            />
            <S.ParticipantsCount>
              { participantsCount } մասնակից
            </S.ParticipantsCount>
          </S.InfoRow>
          <S.InfoRow>
              <Icon 
                glyph={GLYPHS.calendar}
                width='20'
                height='20'
                fill='#5E36FF'
              />
              <S.MeetupStartTime>
                { startTime }
              </S.MeetupStartTime>
          </S.InfoRow>
        </S.MeetupInfoWrapper>
        <S.MeetupFooter>
          <S.JoinButton
            onClick={(e) => onJoinMeetup(e)}
            className={cx({ joined })}
            loading={loading}
          >
            {
              joined
                ? 'Մասնակից'
                : 'Մասնակցել'
            }
          </S.JoinButton>
        </S.MeetupFooter>
      </S.MeetupInfo>
    </S.MeetupCard>  
  )
}
