import React, { useEffect, useCallback } from 'react'


import { Routes } from '../routes'

export const App = ({
  isAuth,
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

  return (
    initialized &&
      <Routes />
  )
}
