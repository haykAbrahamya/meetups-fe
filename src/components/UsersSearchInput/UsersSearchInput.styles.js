import styled from 'styled-components'


import { Input } from '../../ui'
import { Icon } from '../Icon'


export const SearchInput = styled(Input)`
  padding: 14px 18px 14px 42px;
  width: calc(100% - 60px);

  @media (min-width: 768px) {
    width: 370px;
  }

  @media (min-width: 1280px) {
    width: 527px;
  }
`

export const SearchInputIcon = styled(Icon)`
  position: absolute;
  top: calc(50% - 7px);
  left: 18px;
`