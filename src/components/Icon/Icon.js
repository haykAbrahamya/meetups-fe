import React, { useState } from 'react'

import * as S from './Icon.styles'

const GLYPHS = {
  meetups: 'images/icons/meetups.svg',
  notification: 'images/icons/notification.svg',
  main: 'images/icons/main.svg',
  search: 'images/icons/search.svg',
  settings: 'images/icons/settings.svg',
  plus: 'images/icons/plus.svg',
  profile: 'images/icons/profile.svg',
  star: 'images/icons/star.svg',
  starHalf: 'images/icons/starHalf.svg',
  followers: 'images/icons/followers.svg',
  meetupsCount: 'images/icons/meetupsCount.svg',
  searchInput: 'images/icons/searchInput.svg',
  close: 'images/icons/close.svg',
  filter: 'images/icons/filter.svg',
  rectangle: 'images/icons/rectangle.svg'
}

const Icon = (props)=> {
  const {
    id,
    fill,
    width,
    glyph,
    stroke,
    height,
    noFill,
    onClick,
    className,
    withHover,
    hoverFill,
    strokeWidth,
    onMouseOver,
    onMouseLeave
  } = props

  const [hovered, setHovered] = useState(false)

  if (!glyph) return null

  const handleHover = () => {
    setHovered(true)
  }

  const handleLeave = () => {
    setHovered(false)
  }

  return (
    <S.Icon
      src={glyph}
      id={id}
      fill=''
      width={`${width}px`}
      height={`${height}px`}
      stroke={stroke}
      onClick={onClick}
      onMouseOver={onMouseOver || withHover ? handleHover : null}
      strokeWidth={strokeWidth}
      onMouseLeave={onMouseLeave || withHover ? handleLeave : null}
      filltoset={!noFill ? hovered ? hoverFill : fill : '#000'}
      className={`svg-icon ${className}`}
    />
  )
}

Icon.defaultProps = {
  id: '',
  stroke: '',
  width: '20',
  height: '20',
  className: '',
  fill: '#B5B2BD',
  strokeWidth: '1px',
  hoverFill: '#B5B2BD',
  withHover: false
}

export { Icon, GLYPHS }
