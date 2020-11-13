import React from 'react'


import * as S from './UserSearchCard.styles'
import { Icon, GLYPHS } from '../Icon'

export const UserSearchCard = ({ user, isMobile }) => {
  const [firstname, lastname] = user.fullname.split(' ')
  const counts = [
    {
      id: 1,
      icon: GLYPHS.star,
      color: '#E8834B',
      count: user.rating
    },
    {
      id: 2,
      icon: GLYPHS.followers,
      color: '#4E4BE8',
      count: user.followersCount
    },
    {
      id: 3,
      icon: GLYPHS.meetups,
      color: '#E84B4B',
      count: user.meetupsCount
    }
  ]

  return (
    <S.UserSearchCardContainer>
      <S.Avatar src={'images/user.jpg'} />
      <S.NamesContainer>
        <S.FullName>
          { firstname }
          <br />
          { lastname }
        </S.FullName>
        <S.UserName>
          @{ user.username }
        </S.UserName>
      </S.NamesContainer>
      <S.CountsContainer>
        {
          counts.map(item => {
            return (
              <S.CountItem key={item.id}>
                <S.IconContainer color={item.color}>
                  <S.RectangleBackground
                    width={32}
                    height={32}
                    fill={item.color}
                    glyph={GLYPHS.rectangle}
                  />
                  <Icon
                    width={18}
                    height={18}
                    fill='#fff'
                    glyph={item.icon}
                  />
                </S.IconContainer>
                <S.Count>
                  { item.count || 17 }
                </S.Count>
              </S.CountItem>  
            )
          })
        }
      </S.CountsContainer>
      <S.FollowButton>
        Հետևել
      </S.FollowButton>
    </S.UserSearchCardContainer>
  )
}
