import React, { useEffect } from 'react'


import { Routes } from '../routes'

export const App = ({ isAuth, initApp }) => {
  useEffect(() => {
    initApp()
  }, [initApp])

  return (
    <Routes />
  )
}
