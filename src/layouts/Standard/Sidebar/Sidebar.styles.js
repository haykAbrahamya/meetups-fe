import styled from 'styled-components'


import { Icon } from '../../../components/Icon'
import { FlexButton } from '../../../ui'


export const ProjectName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 12px;
  margin-top: 3px;
`

export const Logo = styled.div`
  width: 30px;
  height: 25px;
  margin-left: 50px;
  background: url('/images/icons/logo.svg');
`

export const SidebarItemTitle = styled.div`
  margin-left: 20px;
`

export const SidebarItem = styled.div`
  display: flex;
  color: #B5B2BD;
  width: ${p => p.menuOpened ? '230px' : '30px'};
  padding: 15px 35px;
  cursor: pointer;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
  transition: background 0.3s ease;

  &.active {
    color: #12131D;
    padding-left: 33px;
    border-left: 2px solid #12131D;
  }

  &:last-child {
    margin: 0px;
  }

  &:hover {
    background: #E0E0E0;
  }
`

export const SidebarHeader = styled.div`
  align-items: center;
  width: calc(100% - 80px);
  min-height: 80px;
  max-height: 80px;
  padding: 0px 40px;
  display: flex;
`

export const SidebarContent = styled.div`
  height: 100%;
  display: flex;
`

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 0px 160px;
  align-items: center;
`

export const SidebarItemIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`

export const SidebarToggler = styled.div`
  width: 18px;
  height: 14px;
  cursor: pointer;
  background: url('/images/icons/toggler.svg');
`

export const CreateMeetupButton = styled(FlexButton)`
  width: 205px;
  padding: 24px 0px;
  font-size: 14px;
  border-radius: 5px;
  margin-top: auto;
`

export const PlusIcon = styled.div`
  width: 12px;
  height: 12px;
  background: url('/images/icons/plus.svg')
`

export const SidebarContainer = styled.div`
  display: flex;
  background: #E9E9E9;
  width: 100px;
  height: 100%;
  flex-direction: column;

  &.opened {
    width: 300px;
  }

  &:not(.opened) {
    ${CreateMeetupButton} {
      width: 26px;
      height: 26px;
      padding: 0px;
      border-radius: 8px;
    }
  }

`
