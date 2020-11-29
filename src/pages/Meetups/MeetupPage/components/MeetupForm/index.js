import { connect } from 'react-redux'


import { MeetupForm as Self } from './MeetupForm'
import {
  createMeetup,
  updateMeetup,
  clearFormData
} from '../../../Meetups.actions'

const mapStateToProps = ({ meetups }) => ({
  meetupForm: meetups.meetupForm
})

const mapDispatchToProps = {
  createMeetup,
  updateMeetup,
  clearFormData
}

export const MeetupForm = connect(mapStateToProps, mapDispatchToProps)(Self)