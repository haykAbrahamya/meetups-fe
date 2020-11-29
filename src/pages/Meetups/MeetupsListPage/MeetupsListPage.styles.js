import styled from 'styled-components'


export const MeetupsListPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1280px) {
    padding: 50px;
    justify-content: normal;
    flex-direction: row;
    flex-wrap: wrap;
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