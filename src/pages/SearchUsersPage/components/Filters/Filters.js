import React from 'react'


import * as S from './Filters.styles'
import { RadioButton } from '../../../../ui'
import { Icon, GLYPHS } from '../../../../components/Icon'
import cx from '../../../../helpers/cx'
import { sortFields } from '../../SearchUsersPage.types'


export const Filters = ({
  viewportWidth,
  toggleFilter,
  updateFilter,
  filters,
  loadUsers
}) => {
  const isDesktop = viewportWidth >= 1280

  const sortFieldsOptions = [
    {
      id: 1,
      name: sortFields.rating,
      title: 'Գնահատականի'
    },
    {
      id: 2,
      name: sortFields.activity,
      title: 'Ակտիվության'
    },
    {
      id: 3,
      name: sortFields.followersCount,
      title: 'Հետևորդների քանակի'
    }
  ]

  const handleSelectSortType = (sortField) => {
    updateFilter({ sortField: filters.sortField === sortField ? null : sortField})
    loadUsers()

    if (!isDesktop) {
      toggleFilter()
    }
  }

  return (
    <S.FiltersContainer>
      <S.FiltersContainerHeader>
        <Icon
          glyph={GLYPHS.filter}
          fill='#000'
          width={15}
          height={15}
        />
      <S.FiltersContainerTitle>
        Ֆիլտր
      </S.FiltersContainerTitle>
      {
        !isDesktop &&
          <S.HideFiltersButton onClick={toggleFilter}>
            <Icon
              glyph={GLYPHS.close}
              width={25}
              height={25}
              fill='#000'
            />
          </S.HideFiltersButton>
      }
      </S.FiltersContainerHeader>
      <S.FilterSection>
        <S.FilterSectionTitle>
          Սորտավորել ըստ
        </S.FilterSectionTitle>
        {
          sortFieldsOptions.map(option => {
            const selected = option.name === filters.sortField

            return (
              <S.RadioButtonContainer
                key={option.id}
                className={cx({ selected })}
                onClick={() => handleSelectSortType(option.name)}
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