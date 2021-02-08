import React from 'react'
import styled from 'styled-components'


export const TestPage = ({ logout }) => {
  return (
    <>
      <div>Test Page Content</div>
      <div onClick={logout}>Logout</div>
    </>
  )
}

const TestPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`
