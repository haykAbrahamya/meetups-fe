import styled from 'styled-components'


import { FlexButton } from '../../../ui'
import { Icon } from '../../../components/Icon'

export const BottomNavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px 30px;
  height: 20px;
  position: fixed;
  bottom: 0;
  width: calc(100% - 60px);
`

export const CreateMeetupButton = styled(FlexButton)`
  width: 40px;
  height: 40px;
  padding: 0px;
  border-radius: 17px;
  margin-left: 20px;
  margin-top: -7px
`

export const PlusIcon = styled(Icon)`
  width: 14px;
  height: 14px;
`

export const BottomNavBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
  flex: 2;

  &:first-of-type {
    margin: 0px;
    flex: 1;
  }
  &:last-child {
    flex: 1;
  }
`

export const BottomNavBarItemIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`
