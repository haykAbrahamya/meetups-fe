import styled from 'styled-components'


import { Input } from '../../../ui'
import { Icon } from '../../../components/Icon'

export const HeaderAuthContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;

  .SearchInput {
    margin-left: 20px;
    width: 100%;

    @media (min-width: 768px) {
      width: unset;
      margin: auto;
    }
  }
`

export const ProjectName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 12px;
  margin-top: 3px;
  display: none;

  @media (min-width: 1280px) {
    display: block;
  }
`

export const Logo = styled.div`
  min-width: 30px;
  width: 30px;
  height: 25px;
  margin-left: 20px;
  background: url('/images/icons/logo.svg');

  @media (min-width: 768px) {
    margin-left: 40px;
  }
`

export const SearchInput = styled(Input)`
  padding: 14px 18px 14px 42px;
  width: calc(100% - 100px);

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