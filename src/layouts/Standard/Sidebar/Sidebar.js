import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'



import * as S from './Sidebar.styles'
import { GLYPHS } from '../../../components/Icon'


export const Sidebar = ({ sidebarOpened, toggleSidebar }) => {
  const history = useHistory()
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(history.location.pathname)
  }, [history.location.pathname])

  const items = [
    {
      id: 1,
      title: 'Գլխավոր',
      icon: GLYPHS.profile,
      path: '/profile'
    },
    {
      id: 2,
      title: 'Միթինգներ',
      icon: GLYPHS.meetups,
      path: '/meetups'
    },
    {
      id: 3,
      title: 'Փնտրել',
      icon: GLYPHS.search,
      path: '/search'
    },
    {
      id: 4,
      title: 'Ծանուցումներ',
      icon: GLYPHS.notification,
      path: '/notifications'
    },
    {
      id: 5,
      title: 'Կարգավորումներ',
      icon: GLYPHS.settings,
      path: '/settings',
    }
  ]

  const changeMenu = (path) => {
    history.push(path)
    setPathname(history.location.pathname)
  }

  return (
    <S.SidebarContainer className={sidebarOpened ? 'opened' : ''}>
      <S.SidebarHeader>
        <S.SidebarToggler onClick={toggleSidebar}/>
        {
          sidebarOpened &&
            <>
              <S.Logo />
              <S.ProjectName>
                MEET UP
              </S.ProjectName>
            </>
        }
      </S.SidebarHeader>
      <S.SidebarContent>
        <S.SidebarItems>
          {
            items.map(item => {
              const isItemActive = pathname === item.path

              return (
                <S.SidebarItem 
                  className={isItemActive ? 'active' : ''} 
                  menuOpened={sidebarOpened}
                  onClick={() => changeMenu(item.path)}
                  key={item.id}
                >
                  <S.SidebarItemIcon 
                    glyph={item.icon}
                    fill={isItemActive ? '#12131D' : '#B5B2BD'}
                    width={24}
                    height={24}
                  />
                  {
                    sidebarOpened &&
                      <S.SidebarItemTitle>
                        { item.title }
                      </S.SidebarItemTitle>
                  }
                </S.SidebarItem>
              )
            })  
          }
        <S.CreateMeetupButton>
          {
            sidebarOpened
              ? 'Ստեղծել'
              : <S.PlusIcon />
          }
        </S.CreateMeetupButton>
        </S.SidebarItems>
      </S.SidebarContent>
    </S.SidebarContainer>
  )
}