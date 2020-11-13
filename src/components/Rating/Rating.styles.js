import styled from 'styled-components'


import { Icon } from '../Icon'


export const RatingContainer = styled.div`
  display: flex;
  position: relative;
`

export const RatingIcon = styled(Icon)`
  margin-left: 10px;

  &:first-of-type {
    margin-left: 0px;
  }
`

export const FilledStars = styled.div`
  position: absolute;
  display: flex;
`