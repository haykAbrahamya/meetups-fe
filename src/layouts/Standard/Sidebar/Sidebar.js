import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'



import * as S from './Sidebar.styles'
import { GLYPHS } from '../../../components/Icon'
import cx from '../../../helpers/cx'


export const Sidebar = ({
  sidebarOpened,
  toggleSidebar,
  username,
  isDesktop
}) => {
  const [pathname, setPathname] = useState('')
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    setPathname(location.pathname)
  }, [
    setPathname,
    location.pathname
  ])

  const items = [
    {
      id: 1,
      title: 'Գլխավոր',
      icon: GLYPHS.profile,
      path: `/profile/${username}`
    },
    {
      id: 2,
      title: 'Միթինգներ',
      icon: GLYPHS.meetups,
      path: '/meetups'
    },
    {
      id: 3,
      title: 'Փնտրում',
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
    setPathname(location.pathname)
  }

  const isSidebarOpened = sidebarOpened && isDesktop

  return (
    <S.SidebarContainer className={cx({ opened: isSidebarOpened})}>
      <S.SidebarWrapper>
        <S.SidebarHeader>
          {
            isDesktop &&  
              <S.SidebarToggler onClick={toggleSidebar} />
          }
          {
            !isDesktop &&
              <S.Logo />
          }
          {
            isSidebarOpened &&
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
                    menuOpened={isSidebarOpened}
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
                      isSidebarOpened &&
                        <S.SidebarItemTitle>
                          { item.title }
                        </S.SidebarItemTitle>
                    }
                  </S.SidebarItem>
                )
              })  
            }
          <S.CreateMeetupButton
            onClick={() => history.push('/meetups/create')}
            className='CreateMeetupButton'
          >
            {
              isSidebarOpened
                ? 'Ստեղծել'
                : <S.PlusIcon />
            }
          </S.CreateMeetupButton>
          </S.SidebarItems>
        </S.SidebarContent>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  )
}