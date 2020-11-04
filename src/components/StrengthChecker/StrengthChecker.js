import React from 'react'


import * as S from './StrengthChecker.styles'

export const StrengthChecker = ({ strengthType, linesCount }) => {
  const strengthColors = ['#D0D0D0', '#EB7777', '#EBA177', '#B0C47F']

  const getStrengthLines = () => {
    const strengthLines = []

    for (let ind = 0; ind < linesCount; ind++) {
      strengthLines.push(
        <S.StrengthLine className={strengthType <= ind ? 'empty' : ''} />
      )
    }

    return strengthLines
  }

  return (
    <S.StrengthCheckerContainer lineColor={strengthColors[strengthType]}>
      { getStrengthLines() }
    </S.StrengthCheckerContainer>
  )
}