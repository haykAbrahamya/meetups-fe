import styled from 'styled-components'


import { FlexButton } from '../../ui'

export const UserSearchCardContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 730px;
`

export const AvatarContainer = styled.div`
  min-width: 210px;
  height: 310px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    .AvatarImage {
      transform: scale(1.1);
    }
  }
`

export const AvatarWrapper = styled.div`
  position: relative;
`

export const AvatarImage = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/images/${p => p.path}') no-repeat center center;
  background-size: 250px;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:before {
    content: '';
    width: 250px;
    height: 310px;
    bottom: 0;
    border-radius: 20px;
    position: absolute;
    left: 0;
    background-image: linear-gradient(180deg, rgba(18, 19, 29, 0) 0%, #12131D 100%);
  }
`

export const AvatarContainerContent = styled.div`
  z-index: 2;
  padding-bottom: ${p => p.setPadding ? '30px' : '0px'};
`

export const Fullname = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
`

export const Username = styled.div`
  color: #B5B2BD;
  font-size: 15px;
  margin-top: 5px;
`

export const FollowButton = styled(FlexButton)`
  background: #fff;
  color: #000;
  font-size: 15px;
  border-radius: 30px;
  margin-top: 20px;
  width: 115px;
  padding: 10px 0px;

  &:hover {
    box-shadow: 5px 5px 25px rgba(255, 255, 255, 0.25);
    background: #fff;
  }
`

export const CountsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`

export const CountItem = styled.div`
  display: flex;
  color: #fff;
  align-items: center;

  span {
    margin-left: 5px
  }
`

export const FollowButtonContainer = styled.div`
  &.black {
    position: absolute;
    left: calc(50% - 64px);
    bottom: -26px;
    width:  128px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    padding: 0px;
    background: #EEE;
    cursor: unset;

    > div {
      background: #000;
      color: #fff;
      margin-top: 0px;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`

export const Specialization = styled.div`
  font-size: 20px;
  color: #000;
  margin-top: 12px;
  font-weight: bold;
`

export const About = styled.div`
  color: #B5B2BD;
  font-size: 15px;
  margin-top: 5px;
  line-height: 17.25px;
`

export const CountsFullContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

export const CountFullItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #B5B2BD;
  margin-left: 20px;

  span {
    margin-bottom: 3px;
    color: #000;
    font-weight: bold;
    font-size: 18px;
  }

  &:first-of-type {
    margin-left: 0px;
  }
`