import styled from 'styled-components'


import { Input } from '../../../ui'
import { Icon } from '../../../components/Icon'

export const HeaderAuthContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  padding: 0px 20px;
  height: 75px;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: center;
    padding: 0px;
    height: 110px;
    width: 100%;
  }

  .SearchInput {
    width: 100%;
    margin-right: 20px;

    @media (min-width: 768px) {
      margin-left: 20px;
      width: unset;
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
  background: url('/images/icons/logo.svg');

  @media (min-width: 768px) {
    margin-left: 20px;
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

export const ToggleFilterButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-left: 50px;
  }
`