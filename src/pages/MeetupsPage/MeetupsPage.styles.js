import styled from 'styled-components'


import { FlexButton } from '../../ui'

export const MeetupsPageContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`

export const CreateMeetupButton = styled(FlexButton)`
  
`

export const Participants = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`

export const Participant = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;

  &:first-of-type {
    margin-top: 0px;
  }
`