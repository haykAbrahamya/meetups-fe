import { NETWORK_TYPES } from './network.types'
import { FetchApi } from '../../helpers/FetchApi'

export const loadFollowing = () => async dispatch => {
  try {
    const { data } = await FetchApi.get('following')

    dispatch({
      type: NETWORK_TYPES.LOAD_FOLLOWING,
      following: data.following,
      followers: data.followers
    })
  } catch (e) {
    console.log('error', e)
  }
}

export const followUser = (userId) => async dispatch => {
  try {
    const { data } = await FetchApi.post('following', { userId })

    dispatch({
      type: NETWORK_TYPES.FOLLOW_USER,
      following: data
    })
  } catch (e) {
    console.log('err', e)
  }
}

export const unfollowUser = (userId) => async dispatch => {
  try {
    await FetchApi.delete(`following?userId=${userId}`)

    dispatch({
      type: NETWORK_TYPES.UNFOLLOW_USER,
      userId
    })
  } catch (e) {
    console.log('err', e)
  }
}