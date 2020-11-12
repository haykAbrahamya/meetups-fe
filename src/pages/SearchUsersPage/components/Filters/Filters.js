import React from 'react'


import * as S from './Filters.styles'
import { RadioButton } from '../../../../ui'
import { Icon, GLYPHS } from '../../../../components/Icon'
import cx from '../../../../helpers/cx'
import { sortTypes } from '../../SearchUsersPage.types'


export const Filters = ({ toggleFilter, updateFilter, filters }) => {

  const sortTypesOptions = [
    {
      id: 1,
      name: sortTypes.rating,
      title: 'Գնահատականի'
    },
    {
      id: 2,
      name: sortTypes.activity,
      title: 'Ակտիվության'
    },
    {
      id: 3,
      name: sortTypes.followersCount,
      title: 'Հետևորդների քանակի'
    }
  ]

  return (
    <S.FiltersContainer>
      <S.FiltersContainerHeader>
      <S.FiltersContainerTitle>
        Ֆիլտր
      </S.FiltersContainerTitle>
      <S.HideFiltersButton onClick={toggleFilter}>
        <Icon
          glyph={GLYPHS.settings}
          width={30}
          height={30}
        />
      </S.HideFiltersButton>
      </S.FiltersContainerHeader>
      <S.FilterSection>
        <S.FilterSectionTitle>
          Սորտավորել ըստ՝
        </S.FilterSectionTitle>
        {
          sortTypesOptions.map(option => {
            const selected = option.name === filters.sortType

            return (
              <S.RadioButtonContainer
                key={option.id}
                className={cx({ selected })}
                onClick={() => updateFilter({ sortType: option.name })}
              >
                <RadioButton selected={selected}/>
                <S.RadioButtonTitle>
                  { option.title }
                </S.RadioButtonTitle>
              </S.RadioButtonContainer>
            )
          })
        }
      </S.FilterSection>
    </S.FiltersContainer>  
  )
}