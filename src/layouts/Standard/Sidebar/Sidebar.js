import React from 'react'
import { useHistory } from 'react-router-dom'



import * as S from './Sidebar.styles'


export const Sidebar = () => {
  const history = useHistory()
  const pathname = history.location.pathname

  const items = [
    {
      title: 'Գլխավոր',
      icon: 'main',
      path: '/main'
    },
    {
      title: 'Ծանուցումներ',
      icon: 'notification',
      path: '/notifications'
    },
    {
      title: 'Միթինգներ',
      icon: 'meetups',
      path: '/meetups'
    },
    {
      title: 'Վերջին միթինգները',
      icon: 'lastMeetups',
      path: '/last-meetups',
    }
  ]

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        
      </S.SidebarHeader>
      <S.SidebarContent>
        <S.SidebarItems>
          {
            items.map(item => {
              return (
                <S.SidebarItem 
                  className={pathname === item.path ? 'active' : ''} 
                  to={item.path}
                >
                  <S.SidebarItemIcon icon={item.icon}/>
                  <S.SidebarItemTitle>
                    { item.title }
                  </S.SidebarItemTitle>
                </S.SidebarItem>
              )
            })  
          }
        </S.SidebarItems>
      </S.SidebarContent>
    </S.SidebarContainer>
  )
}