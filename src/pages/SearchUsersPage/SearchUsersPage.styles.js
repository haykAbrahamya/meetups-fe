import styled from 'styled-components'


import { LayoutStandard } from '../../layouts/Standard'

export const Layout = styled(LayoutStandard)`
  overflow-x: hidden;

  .filterOpened {
    .LayoutContent {
      padding-right: 415px;
    }
  }
`

export const SearchUsersPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    padding: 50px;
  }
`

export const FiltersContainer = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  background: #E9E9E9;
  right: -100%;
  height: 100%;
  z-index: 12;
  width: 100%;
  top: 0;

  &.filterOpened {
    right: 0px;
  }

  @media (min-width: 768px) {
    right: -400px;
    width: 400px;
  }
`

export const SearchCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 55px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const ToggleFilterButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 120x;
  right: 80px;
`

export const ShadowBackground = styled.div`
  transition: background 0.3s ease;
  width: calc(100% - 200px);
  background: transparent;
  position: absolute;
  display: none;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;

  &.filterOpened {
    background: rgba(0, 0, 0, 0.3);
    z-index: 11;
  }

  @media (min-width: 768px) {
    display: block;
  }
`