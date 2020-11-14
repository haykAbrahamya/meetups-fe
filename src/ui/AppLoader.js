import React from 'react'
import styled, { keyframes } from 'styled-components'


export const AppLoader = () => {
  return (
    <LoaderContainer>
      <Circle />
      <Circle />
      <Circle />
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const CircleAnimation = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40%{
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

const Circle = styled.div`
  width: 10px;
  height: 20px;
  border-radius: 62px;
  background-color: #5E36FF;
  position: relative;
  -webkit-animation: 1.2s ${CircleAnimation} ease-in-out infinite;
  animation: 1.2s ${CircleAnimation} ease-in-out infinite ;

  &:nth-child(2) {
    margin: 0 15px;
    -webkit-animation: 1.2s ${CircleAnimation} ease-in-out infinite .15555s;
    animation: 1.2s ${CircleAnimation} ease-in-out infinite .15555s;   
  }

  &:nth-child(3) {
    -webkit-animation: 1.2s ${CircleAnimation} ease-in-out infinite .300000s;
    animation: 1.2s ${CircleAnimation} ease-in-out infinite .300000s;
  }
`