import React from 'react'
import styled from 'styled-components'


import { LayoutStandard } from '../../layouts/Standard'

export const TestPage = ({ logout }) => {
  return (
    <LayoutStandard>
      <div>Test Page Content</div>
      <div onClick={logout}>Logout</div>
    </LayoutStandard>
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
