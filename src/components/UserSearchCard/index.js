import { connect } from 'react-redux'


import { UserSearchCard as Self } from './UserSearchCard'
import {
  followUser,
  unfollowUser
} from '../../common/network/network.actions'


const mapStateToProps = ({ app, network, user }) => ({
  isMobile: app.dimensions.width < 768,
  followers: network.followers,
  following: network.following,
  userId: user.userData.id
})

const mapDispatchToProps = {
  followUser,
  unfollowUser
}

export const UserSearchCard = connect(mapStateToProps, mapDispatchToProps)(Self)
