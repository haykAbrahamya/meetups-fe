import React from 'react'


import * as S from './Rating.styles'
import { GLYPHS } from '../Icon'


export const Rating = ({ rating }) => {
  return (
    <S.RatingContainer className='rating'>
      {
        Array.from(Array(5), (el, ind) => {
          return (
            <S.RatingIcon
              width={20}
              height={20}
              glyph={GLYPHS.star}
              key={ind}
            />
          )
        })  
      }
      <S.FilledStars>
        {
          Array.from(Array(Math.ceil(rating)), (el, ind) => {
            return (
              <S.RatingIcon
                width={20}
                height={20}
                glyph={ind === Math.ceil(rating) - 1 && rating > parseInt(rating) ? GLYPHS.starHalf : GLYPHS.star}
                fill='#D98131'
                key={ind}
              />
            )
          })
        }
      </S.FilledStars>
    </S.RatingContainer>  
  )
}