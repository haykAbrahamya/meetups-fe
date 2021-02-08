import React from 'react'


import * as S from './AvatarCard.styles'

export const AvatarCard = ({
  user: {
    avatarPath,
    fullname,
    username    
  }
}) => {
  const [firstName = '', lastname = ' '] = fullname.split(' ')

  return (
    <S.AvatarCard to={`/profile/${username}`}>
      <S.AvatarImage path={avatarPath}>
        { `${firstName[0]} ${lastname[0]}`}
      </S.AvatarImage>
      <S.UserInfo>
        <S.Fullname>
          { fullname }
        </S.Fullname>
        <S.Username>
          @{ username }
        </S.Username>
      </S.UserInfo>
    </S.AvatarCard>  
  )
}