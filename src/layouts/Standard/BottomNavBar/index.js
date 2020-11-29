import { connect } from 'react-redux'


import { BottomNavBar as Self } from './BottomNavBar'

const mapStateToProps = ({ user }) => ({
  username: user.userData.username
})

export const BottomNavBar = connect(mapStateToProps)(Self)