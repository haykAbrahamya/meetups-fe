import React from 'react'


import * as S from './LayoutStandard.styles'
import { HeaderUnAuth } from './HeaderUnAuth'
import { Sidebar } from './Sidebar'


export const LayoutStandard = ({ children, className = '', isAuth }) => {
  return (
    <S.LayoutStandard isAuth={isAuth} className={`StandardLayout ${className}`}>
      {
        !isAuth &&  
          <div className='StandardLayoutHeader'>
            <HeaderUnAuth />
          </div>
      }
      {
        isAuth &&
          <Sidebar />  
      }
      <div className='StandardLayoutContent'>
        {
          children  
        }
      </div>
    </S.LayoutStandard>
  )
}