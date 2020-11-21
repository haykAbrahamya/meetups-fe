import { connect } from 'react-redux'


import { NotificationService as Self } from './NotificationService'
import {
  socketFollow,
  socketUnfollow
} from '../../common/network/network.actions'

const mapStateToProps = () => ({

})

const mapDispatchToProps = {
  socketFollow,
  socketUnfollow
}

export const NotificationService = connect(mapStateToProps, mapDispatchToProps)(Self)