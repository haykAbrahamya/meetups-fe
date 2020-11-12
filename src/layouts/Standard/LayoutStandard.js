import React from 'react'


import * as S from './LayoutStandard.styles'
import { HeaderUnAuth } from './HeaderUnAuth'
import { HeaderAuth } from './HeaderAuth'
import { Sidebar } from './Sidebar'
import { BottomNavBar } from './BottomNavBar'


export const LayoutStandard = ({
  isAuth ,
  children,
  isMobile,
  className = '',
  RightPart,
  match
}) => {

  return (
    <S.LayoutStandard isAuth={isAuth} className={`StandardLayout ${className}`}>
      {
        isAuth && !isMobile &&
          <Sidebar />
      }
      <S.LayoutContent className='LayoutContent'>
        {
          isAuth
            ? <div className='StandardLayoutHeader'>
                <HeaderAuth />
              </div>
            : <div className='StandardLayoutHeader'>
                <HeaderUnAuth />
              </div>
        }
        <div className='StandardLayoutContent'>
          {
            children  
          }
        </div>
      </S.LayoutContent>
      {
        RightPart &&
          <div className='StandardLayoutRightPart'>
            <RightPart />  
          </div>
      }
      {
        isMobile && isAuth &&
          <BottomNavBar />
      }
    </S.LayoutStandard>
  )
}