import React, { useEffect, useCallback } from 'react'


import { Routes } from '../routes'
import { initSocket, closeSocket } from '../socket'


export const App = ({
  isAuth,
  userId,
  initApp,
  initialized,
  setWindowDimensions
}) => {
  const handleResize = useCallback(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [
    setWindowDimensions
  ])

  useEffect(() => {
    initApp()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [
    initApp,
    handleResize,
    setWindowDimensions
  ])

  useEffect(() => {
    if (isAuth) {
      initSocket(userId)

      return () => {
        console.log('here')
        closeSocket(userId)
      }
    }
  }, [
    userId,
    isAuth
  ])

  return (
    initialized &&
      <Routes />
  )
}
