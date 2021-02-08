import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


import * as S from './BottomNavBar.styles'
import { GLYPHS } from '../../../components/Icon'


export const BottomNavBar = ({ isAuth, username }) => {
  const history = useHistory()
  const [pathname, setPathname] = useState('')

  const items = [
    {
      id: 1,
      icon: GLYPHS.profile,
      path: `/profile/${username}`,
      visible: true
    },
    {
      id: 2,
      icon: GLYPHS.meetups,
      path: '/meetups',
      visible: true
    },
    {
      id: 3,
      visible: true
    },
    {
      id: 4,
      icon: GLYPHS.search,
      path: '/search',
      visible: true
    },
    {
      id: 5,
      icon: GLYPHS.notification,
      path: '/notifications',
      visible: true
    },
  ]


  useEffect(() => {
    setPathname(history.location.pathname)
  }, [history.location.pathname])


  const changeMenu = (path) => {
    history.push(path)
    setPathname(history.location.pathname)
  }

  return (
    <S.BottomNavBarContainer>
      {
        items.map((item, ind) => {
          const isItemActive = pathname === item.path
          return (
            item.visible
              ? ind === parseInt(items.length / 2)
                  ? <S.CreateMeetupButton key={item.id}>
                      <S.PlusIcon
                        glyph={GLYPHS.plus}
                        fill='#fff'
                        width={14}
                        height={14}
                      />
                    </S.CreateMeetupButton>
                  : <S.BottomNavBarItem 
                      className={isItemActive ? 'active' : ''} 
                      onClick={() => changeMenu(item.path)}
                      key={item.id}
                    >
                      <S.BottomNavBarItemIcon 
                        glyph={item.icon}
                        fill={isItemActive ? '#12131D' : '#B5B2BD'}
                        width={24}
                        height={24}
                      />
                    </S.BottomNavBarItem>
              : null
          )
        })  
      }
    </S.BottomNavBarContainer>
  )
}