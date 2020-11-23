import { connect } from 'react-redux'


import { ProfilePage as Self } from './ProfilePage'
import {
  loadUserData
} from './ProfilePage.actions'

const mapStateToProps = ({ user, profile, network }) => ({
  profileData: profile.profileData,
  myId: user.userData.id,
  following: network.following,
  followers: network.followers
})

const mapDispatchToProps = {
  loadUserData
}

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(Self)
