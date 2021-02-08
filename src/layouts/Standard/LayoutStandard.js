import React from 'react'


import * as S from './LayoutStandard.styles'
import { HeaderUnAuth } from './HeaderUnAuth'
import { Sidebar } from './Sidebar'
import { BottomNavBar } from './BottomNavBar'
import { AppLoader } from '../../ui'
import cx from '../../helpers/cx'


export const LayoutStandard = ({
  isAuth ,
  children,
  isMobile,
  className = '',
  RightPart,
  match,
  loading
}) => {

  return (
    <>
    {
      loading &&  
        <S.LoaderContainer>
          <AppLoader />
        </S.LoaderContainer>
    }
    <S.LayoutStandard
      isAuth={isAuth}
      className={cx({ StandardLayout: true, [className]: true, loading })}
    >
      {
        isAuth && !isMobile &&
          <Sidebar />
      }
      <S.LayoutContent className='LayoutContent'>
        {
          isAuth
            ? <div className='StandardLayoutHeader'>
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
    </>
  )
}
