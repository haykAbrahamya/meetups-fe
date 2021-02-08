import { GLYPHS } from '../Icon'

export const getCounts = (user) => {
  const counts = [
    {
      id: 1,
      icon: GLYPHS.star,
      color: '#E8834B',
      count: user.rating
    },
    {
      id: 2,
      icon: GLYPHS.followers,
      color: '#4E4BE8',
      count: user.followersCount
    },
    {
      id: 3,
      icon: GLYPHS.meetups,
      color: '#E84B4B',
      count: user.meetupsCount
    }
  ]

  return counts
}