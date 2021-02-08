import { connect } from 'react-redux'


import { MeetupPage as Self } from './MeetupPage'
import {
  loadMeetupById
} from '../Meetups.actions'

const mapStateToProps = ({ meetups, user, app }) => ({
  meetupForm: meetups.meetupForm,
  userId: user.userData.id
})

const mapDispatchToProps = {
  loadMeetupById
}

export const MeetupPage = connect(mapStateToProps, mapDispatchToProps)(Self)
