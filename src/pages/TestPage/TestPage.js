import React from 'react'


import { LayoutStandard } from '../../layouts/Standard'

export const TestPage = ({ logout }) => {
  return (
    <LayoutStandard>
      <div>Test Page Content</div>
      <div onClick={logout}>Logout</div>
    </LayoutStandard>
  )
}