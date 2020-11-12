import styled from 'styled-components'


export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`

export const FiltersContainerTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const FilterSectionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`

export const HideFiltersButton = styled.div`
  cursor: pointer;
`

export const FiltersContainerHeader = styled.div`
  display: flex;
  padding-bottom: 30px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(181, 178, 189, 0.5);
`

export const RadioButtonTitle = styled.div`
  font-size: 16px;
  margin-left: 20px;
  color: #B5B2BD;
`
export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 30px 0px 30px 20px;
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
`