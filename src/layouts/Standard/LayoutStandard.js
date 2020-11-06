import React from 'react'


import * as S from './LayoutStandard.styles'
import { HeaderUnAuth } from './HeaderUnAuth'


export const LayoutStandard = ({ children, className, isAuth }) => {
  return (
    <S.LayoutStandard className={`StandardLayout ${className}`}>
      <div className='StandardLayoutHeader'>
        <HeaderUnAuth />
      </div>
      <div className='StandardLayoutContent'>
        {
          children  
        }
      </div>
    </S.LayoutStandard>
  )
}