import React from 'react'


import * as S from './UserSearchCard.styles'
import { Icon, GLYPHS } from '../Icon'
import { Rating } from '../Rating'


export const UserSearchCard = ({ user, isMobile }) => {
  const isCardFull = !isMobile && (!!user.specialization || !!user.about)

  const AvatarContainer = () => {
    const [firstName, lastName] = user.fullname.split(' ')

    const showCounts = !!user.rating || !!user.meetupsCount || !!user.followersCount

    return (
      <S.AvatarWrapper>
        <S.AvatarContainer>
          <S.AvatarImage path={'user.jpg'} className='AvatarImage'/>
          <S.AvatarContainerContent setPadding={showCounts || isCardFull}>
            <S.Fullname>
              { firstName }
              <br />
              { lastName }
            </S.Fullname>
            <S.Username>
              @{ user.username }
            </S.Username>
            {
              showCounts && !isCardFull &&
                <S.CountsContainer>
                  {
                    user.rating && user.rating > 0 &&
                      <S.CountItem>
                        <Icon
                          width={15}
                          height={15}
                          glyph={GLYPHS.star}
                          fill='#D98131'
                        />
                        <span>
                          { user.rating }
                        </span>
                      </S.CountItem>
                  }
                  {
                    user.followersCount &&
                      <S.CountItem>
                        <Icon
                          width={15}
                          height={12}
                          glyph={GLYPHS.followers}
                        />
                        <span>
                          { user.followersCount }
                        </span>
                      </S.CountItem>
                  }
                  {
                    !!user.meetupsCount &&  
                      <S.CountItem>
                        <Icon
                          width={15}
                          height={10}
                          glyph={GLYPHS.meetupsCount}
                        />
                        <span>
                          { user.meetupsCount }
                        </span>
                      </S.CountItem>
                  }
                </S.CountsContainer>
            }
            {
              !showCounts && 
                <S.FollowButtonContainer  className={showCounts || isCardFull ? 'black' : ''}>
                  <S.FollowButton>
                    Հետևել
                  </S.FollowButton>
                </S.FollowButtonContainer>
            }
          </S.AvatarContainerContent>
        </S.AvatarContainer>
        {
          showCounts && 
            <S.FollowButtonContainer  className={showCounts || isCardFull ? 'black' : ''}>
              <S.FollowButton>
                Հետևել
              </S.FollowButton>
            </S.FollowButtonContainer>
        }
      </S.AvatarWrapper>
    )
  }

  const InfoContainer = () => {
    return (
      <S.InfoContainer>
        <Rating rating={user.rating || 0} />
        <S.Specialization>
          { user.specialization }
        </S.Specialization>
        <S.About>
          { user.about }
        </S.About>
        <S.CountsFullContainer>
          <S.CountFullItem>
            <span>
              { user.followersCount || 0 }
            </span>
            Հետևորդ
          </S.CountFullItem>
          <S.CountFullItem>
            <span>
              { user.meetupsCount || 0 }
            </span>
            Միթինգ
          </S.CountFullItem>
        </S.CountsFullContainer>
      </S.InfoContainer>
    )
  }

  return (
    <S.UserSearchCardContainer>
      <AvatarContainer />
      {
        isCardFull &&
          <InfoContainer />
      }
    </S.UserSearchCardContainer>
  )
}
