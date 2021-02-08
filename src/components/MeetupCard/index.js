import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import { MeetupCard as Self } from './MeetupCard'
import {
  joinMeetup,
  deleteMeetup,
  setFormInitialData
} from '../../pages/Meetups/Meetups.actions'

const mapStateToProps = ({ user }) => ({
  userId: user.userData.id
})

const mapDispatchToProps = {
  joinMeetup,
  deleteMeetup,
  setFormInitialData
}

export const MeetupCard = withRouter(connect(mapStateToProps, mapDispatchToProps)(Self))