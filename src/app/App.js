import React, { useEffect, useCallback } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import { Routes } from './routes'
import { NotificationService } from '../components/NotificationService'


export const App = ({
  isAuth,
  userId,
  initApp,
  initialized,
  initSockets,
  closeSockets,
  socketInitialized,
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
      initSockets(userId)

      return () => {
        closeSockets(userId)
      }
    }
  }, [
    userId,
    isAuth,
    initSockets
  ])  

  return (
    initialized &&
      <>
        <Routes />
        <ToastContainer />
        { 
          socketInitialized &&
            <NotificationService />
        }
      </>
  )
}
