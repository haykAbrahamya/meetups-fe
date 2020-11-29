import { connect } from 'react-redux'


import { MeetupDetailsPage as Self } from './MeetupDetailsPage'
import {
  loadMeetupById
} from '../Meetups.actions'

const mapStateToProps = ({ meetups }) => ({
  meetup: meetups.currentMeetup
})

const mapDispatchToProps = {
  loadMeetupById
}

export const MeetupDetailsPage = connect(mapStateToProps, mapDispatchToProps)(Self)
