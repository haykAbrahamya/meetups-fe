import React from 'react'


export const TestPage = ({ logout }) => {
  return (
    <>
      <div>Test Page Content</div>
      <div onClick={logout}>Logout</div>
    </>
  )
}