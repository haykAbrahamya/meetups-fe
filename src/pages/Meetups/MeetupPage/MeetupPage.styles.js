import styled from 'styled-components'


import { LayoutStandard } from '../../../layouts/Standard'

export const Layout = styled(LayoutStandard)`
  .CreateMeetupButton {
    display: none;
  }
`

export const MeetupPageContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    padding: 50px;
  }
`

export const PageTitle = styled.div`
  font-size: 20px;
  color: #212121;
  margin-bottom: 80px;
  align-self: flex-start;
`