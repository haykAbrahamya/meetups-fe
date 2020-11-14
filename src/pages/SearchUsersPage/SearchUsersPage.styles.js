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
  justify-content: center;

  @media (min-width: 768px) {
    padding-top: 0px !important;
    padding: 30px;
  }

  @media (min-width: 1280px) {
    padding: 50px 50px 50px 60px;
  }
`

export const FiltersContainer = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  background: #eee;
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

  @media (min-width: 1280px) {
    position: unset;
  }
`

export const SearchCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  &:first-of-type {
    margin-top: 0px;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin: 15px;

    &:first-of-type {
      margin-top: 15px;
    }
  }

  @media (min-width: 1280px) {
    margin: 25px;
    &:first-of-type {
      margin-top: 25px;
    }
  }

`

export const Results = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
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
    background: rgba(18, 19, 29, 0.5);
    z-index: 11;
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`