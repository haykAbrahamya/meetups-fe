import React, { useState } from 'react'


import * as S from './UserSearchCard.styles'
import { Icon, GLYPHS } from '../Icon'
import cx from '../../helpers/cx'

export const UserSearchCard = ({
  user,
  userId,
  isMobile,
  following,
  followUser,
  unfollowUser
}) => {
  const [loading, setLoading] = useState(false)

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


  const follow = following && following.find(_ => _.user.id === user.id)
  const followingHandler = async () => {
    setLoading(true)

    if (follow) {
      await unfollowUser(user.id)
    } else {
      await followUser(user.id)
    }

    setLoading(false)
  }

  const followButtonDisabled = userId === user.id

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
                  { item.count || 0}
                </S.Count>
              </S.CountItem>  
            )
          })
        }
      </S.CountsContainer>
      <S.FollowButton
        className={cx({ follow})}
        onClick={!followButtonDisabled ? followingHandler : null}
        disabled={followButtonDisabled || loading }
        loading={loading}
      >
        {
          follow
            ? 'Հետևորդ'
            : 'Հետևել'
        }
      </S.FollowButton>
    </S.UserSearchCardContainer>
  )
}
