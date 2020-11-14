import { connect } from 'react-redux'


import { UserSearchCard as Self } from './UserSearchCard'
import {
  followUser,
  unfollowUser
} from '../../common/network/network.actions'


const mapStateToProps = ({ app, network }) => ({
  isMobile: app.dimensions.width < 768,
  followers: network.followers,
  following: network.following
})

const mapDispatchToProps = {
  followUser,
  unfollowUser
}

export const UserSearchCard = connect(mapStateToProps, mapDispatchToProps)(Self)
