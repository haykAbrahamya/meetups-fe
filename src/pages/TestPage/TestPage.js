import React from 'react'
import styled from 'styled-components'


import { LayoutStandard } from '../../layouts/Standard'

export const TestPage = ({ logout }) => {
  return (
    <LayoutStandard>
      <TestPageContainer>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <div>Test Page ContentTest Page</div>
        <span onClick={logout}>Logout</span>
      </TestPageContainer>
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