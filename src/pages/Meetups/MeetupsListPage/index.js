import { connect } from 'react-redux'


import { MeetupsListPage as Self } from './MeetupsListPage'
import {
  loadMeetups
} from '../Meetups.actions'


const mapStateToProps = ({ meetups }) => ({
  results: meetups.results
})

const mapDispatchToProps = {
  loadMeetups
}

export const MeetupsListPage = connect(mapStateToProps, mapDispatchToProps)(Self)
