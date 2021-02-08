import React, { useState } from 'react'


import * as S from './UserSearchCard.styles'
import * as h from './UserSearchCard.helpers'
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

  const followingHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (follow) {
      await unfollowUser(user.id)
    } else {
      await followUser(user.id)
    }

    setLoading(false)
  }

  const followButtonDisabled = userId === user.id
  const follow = following && following.find(_ => _.user.id === user.id)

  return (
    <S.UserSearchCardContainer to={`profile/${user.username}`}>
      <S.Avatar src={'/images/user.jpg'} />
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
          h.getCounts(user).map(item => {
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
        onClick={e => !followButtonDisabled ? followingHandler(e) : null}
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
