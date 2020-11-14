import React from 'react'
import styled from 'styled-components'

import { Loader } from './Loader'
import cx from '../helpers/cx'

export const FlexButton = (props) => {
  const {
    children,
    loading,
    disabled,
    className
  } = props

  return (
    <Button { ...props } className={cx({ [className]: className, disabled })}>
      {
        loading
          ? <Loader />
          : children
      }
    </Button>
  )
}


const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  width: 374px;
  color: #fff;
  background: #5E36FF;
  cursor: pointer;
  border-radius: 7px;
  transition: background 0.3s ease;

  &:hover {
    background: #7E5EFD;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
     background: #5E36FF;
    }
  }
`
