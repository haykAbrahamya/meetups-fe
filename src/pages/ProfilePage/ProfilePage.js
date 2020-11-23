import React, { useEffect } from 'react'
import moment from 'moment'


import * as S from './ProfilePage.styles'
import { LayoutStandard } from '../../layouts/Standard'


export const ProfilePage = ({
  myId,
  match,
  profileData,
  loadUserData,
  following: myFollowing,
  followers: myFollowers
}) => {

  const { username } = match.params

  useEffect(() => {
    loadUserData(username)
  }, [
    loadUserData,
    username
  ])

  const ConnectionsList = ({ title, list, dataKey }) => {
    return (
      <S.ConnectionContainer>
        <S.Label>
          { title }
        </S.Label>
        {
          list?.length > 0
            ? <S.ConnectionList>
                {
                  list.map(({ [dataKey]: user }) => {
                    const [firstName = '', lastname = ' '] = user.fullname.split(' ')

                    return (
                      <S.ConnectionCard to={`/profile/${user.username}`}>
                        <S.Avatar path={user.avatarSrc}>
                          { `${firstName[0]} ${lastname[0]}`}
                        </S.Avatar>
                        <span>
                          { user.fullname }
                        </span>
                      </S.ConnectionCard>  
                    )
                  })
                }
              </S.ConnectionList>
            : <S.EmptyList>User has no any { title.toLowerCase() }</S.EmptyList>
        }
      </S.ConnectionContainer>
    )
  }

  const {
    id,
    fullname,
    createdAt,
    following,
    followers
  } = profileData
 
  const isMyProfile = myId === id

  return (
    <LayoutStandard>
      <S.ProfilePageContainer>
        <S.UserInfoSection>
          <S.Label>
            Fullname: <span>{ fullname }</span>
          </S.Label>
          <S.Label>
            In Meetups since: <span>{ moment(createdAt).format('DD/MM/YYYY') }</span>
          </S.Label>
        </S.UserInfoSection>
        <S.UserInfoSection>
         <ConnectionsList title='Following' list={isMyProfile ? myFollowing : following} dataKey='user'/>
         <ConnectionsList title='Followers' list={isMyProfile ? myFollowers : followers} dataKey='follower'/>
        </S.UserInfoSection>
      </S.ProfilePageContainer>      
    </LayoutStandard>  
  )

}