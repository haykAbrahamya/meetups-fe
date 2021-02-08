import React, { useEffect } from 'react'


import * as S from './MeetupsListPage.styles'
import { LayoutStandard } from '../../../layouts/Standard'
import { MeetupCard } from '../../../components/MeetupCard'
import cx from '../../../helpers/cx'


export const MeetupsListPage = ({
  loadMeetups,
  results
}) => {
  useEffect(() => {
    loadMeetups()
  }, [loadMeetups])

  const RightPart = () => {
    return (
      <S.FiltersContainer className={cx({ filterOpened: true })}>
      </S.FiltersContainer>
    )
  }

  return (
    <LayoutStandard RightPart={RightPart}>
      <S.MeetupsListPageContainer>
        { !!results.length && results.map(meetup => {
            return (
              <MeetupCard
                meetup={meetup}
                key={meetup.id}
              />
            )
          })
        }
      </S.MeetupsListPageContainer>
    </LayoutStandard>
  )
}