import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const SidebarContainer = styled.div`
  display: flex;
  background: #E9E9E9;
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  flex-direction: column;
`

export const SidebarHeader = styled.div`
  width: 100%;
  height: 80px;
`

export const SidebarContent = styled.div`
  height: 100%;
  display: flex;
`

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const SidebarItem = styled(Link)`
  display: flex;
  color: #B5B2BD;
  text-decoration: none;
  outline: none;
  width: 230px;
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

export const SidebarItemIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url('/images/icons/${p => p.icon}.svg')
`

export const SidebarItemTitle = styled.div`
  margin-left: 20px;
`