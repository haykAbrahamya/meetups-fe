import styled from 'styled-components'


export const FiltersContainer = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px;
  }
`

export const FiltersContainerTitle = styled.div`
  font-size: 20px;
  margin-right: auto;
  margin-left: 10px;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background: #e9e9e9;
  border-radius: 7px;
  padding: 20px 20px 5px;

  @media (min-width: 768px) {
    background: transparent;
    margin-top: 30px;
    padding: 20px;    
  }

  @media (min-width: 1280px) {
    background: #e9e9e9; 
  }
`

export const FilterSectionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`

export const HideFiltersButton = styled.div`
  cursor: pointer;
`

export const FiltersContainerHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;

  .svg-icon {
    margin-top: 2px;
  }

  @media (min-width: 768px) {
    padding-bottom: 30px;
    margin-bottom: 0px;
  }

  @media (min-width: 1280px) {
    border: none;
    justify-content: normal;
  }
`

export const RadioButtonTitle = styled.div`
  font-size: 16px;
  margin-left: 15px;
  color: #9A99A0;
  line-height: 21px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`
export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 15px 0px;
  transition: 0.3s ease;
  cursor: pointer;

  &.selected {
    ${RadioButtonTitle} {
      color: #000;
    }
  }

  &:hover {
    background: #D2E6E2;
  }

  @media (min-width: 768px) {
    padding: 20px 15px;    
  }
`