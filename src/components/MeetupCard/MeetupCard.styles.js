import styled from 'styled-components'
import { Link } from 'react-router-dom'


import { FlexButton } from '../../ui'

export const MeetupCard = styled(Link)`
  text-decoration: none;
  outline: none;
  display: flex;
  border-radius: 7px;
  margin-bottom: 10px;
  background: #fff;
  height: 300px;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 1280px) {
    margin: 10px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderIcon = styled.div`
  width: 17px;
  height: 17px;

  &:last-child {
    margin-left: 15px;
  }

  &:hover {
    .svg-icon {
      > div {
        display: flex;

        * {
          fill: #5E36FF !important;
        }
      }
    }
  }
`

export const MeetupImage = styled.div`
  flex: 1;
  background: url(${p => p.path});
  background-size: cover;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, rgba(18, 19, 29, 0) 0%, #12131D 100%);
  }
`

export const MeetupInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  position: relative;
`

export const MeetupInfoWrapper = styled.div`
  padding: 15px;
`

export const MeetupHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
  justify-content: space-between;
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  color: #555;
  margin-top: 10px;
  font-size: 15px;
  line-height: 19px;

  &.description {
    font-size: 13px;
  }

  &:first-of-type {
    margin: 0px;
  }
`

export const MeetupFooter = styled.div`
  display: flex;
  /*border-top: 1px solid #dbdbdb;*/
  height: 50px;
  margin-top: auto;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center;
`

export const JoinButton = styled(FlexButton)`
  width: 100%;
  height: 40px;
  padding: 0px;
  border-radius: 7px;
  font-size: 14px;

  &.joined {
    background: #64C5B4;

    &:hover {
      background: #70D7C5;
    }
  }
`

export const MeetupStartTime = styled.div`
  color: #555;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 1.5px;
`

export const ParticipantsCount = styled.div`
  margin-left: 10px;
  margin-top: 3px;
`

export const MeetupStartTimeContainer = styled.div`
  display: flex;
  align-items: center;
`