import React from 'react'
import { useHistory } from 'react-router-dom'


import * as S from './UsersSearchInput.styles'
import { GLYPHS } from '../Icon'


export const UsersSearchInput = ({ updateFilter, filters, loadUsers }) => {
  const history = useHistory()

  const isSearchPage = history.location.pathname === '/search'

  const handleSearchUsers = (e) => {
    if (e.keyCode === 13) {
      const name = e.target.value
      if (isSearchPage) {
        updateFilter({ name })
        loadUsers()
      } else {
        history.push(`/search?name=${name}`)
      }
    }
  }


  return (
    <S.SearchInput
        placeholder='Որոնել'
        containerClassname='SearchInput'
        onChange={(e) => updateFilter({ name: e.target.value }, false)}
        onKeyUp={handleSearchUsers}
        value={filters.name}
        leftPart={
          <S.SearchInputIcon
            glyph={GLYPHS.searchInput}
            width={14}
            height={14}
          />
        }
     />  
  )
}