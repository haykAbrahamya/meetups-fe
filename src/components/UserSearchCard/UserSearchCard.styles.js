import styled from 'styled-components'
import { Link } from 'react-router-dom'


import { FlexButton } from '../../ui'
import { Icon } from '../Icon'

export const UserSearchCardContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  padding: 30px 20px 20px;
  border-radius: 20px;
  background: #E9E9E9;
  max-width: 176px;
  min-width: 210px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  background: url('${p => p.src}') no-repeat;
  background-position: top center;
  background-size: 160px;
  border-radius: 50%;
  background-position-x: -40px;
`

export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 86px;
`

export const FullName = styled.div`
  font-weight: bold;
  color: #000;
  font-size: 20px;
  margin-top: 15px;
  text-align: center;
`

export const UserName = styled.div`
  color: #B5B2BD;
  font-size: 15px;
  margin-top: 5px;
`

export const CountsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

export const RectangleBackground = styled(Icon)`
  position: absolute;
`

export const CountItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  color: #000;
  justify-content: center;
  align-items: center;

  &:first-of-type {
    margin: 0px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Count = styled.div`
  font-size: 13px;
  margin-top: 10px;
`

export const FollowButton = styled(FlexButton)`
  width: 100%;
  padding: 12px 0px;
  font-size: 13px;
  margin-top: 32px;
  border-radius: 7px;
  min-height: 16px;

  &.follow {
    background: #64C5B4;

    &:hover {
      background: #70D7C5;
    }
  }
`
