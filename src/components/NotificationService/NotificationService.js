import React, { useEffect, useCallback, useRef } from 'react'
import { toast } from 'react-toastify'


import { NOTIFICATION_TYPES } from './NotificationService.types'
import { subscribeSocket } from '../../socket'

export const NotificationService = ({
  socketFollow,
  socketUnfollow
}) => {

  const audioRef = useRef(null)

  const handleNewNotification = useCallback(({ notification }) => {
    audioRef.current.play()

    switch (notification.type) {
      case NOTIFICATION_TYPES.follow_user:
        socketFollow(notification.user, notification.followingId)
        toast(`User ${notification.user.fullname} started follow you`)
        break
      case NOTIFICATION_TYPES.unfollow_user:
        socketUnfollow(notification.user.userId)
        toast(`User ${notification.user.fullname} unfollow you`)
        break
      default:
        console.error('Not implement notification with type ' + notification.type)
    }
  }, [
    socketFollow,
    socketUnfollow
  ])


  useEffect(() => {
    subscribeSocket('follow_user', handleNewNotification)
    subscribeSocket('unfollow_user', handleNewNotification)
  }, [
    handleNewNotification
  ])

  useEffect(() => {
    audioRef.current.volume = 0.5
  }, [])

  return (
    <audio
      ref={audioRef}
      src='/images/audio/notify.mp3'
    />
  )
}
