import { NETWORK_TYPES } from './network.types'
import { FetchApi } from '../../helpers/FetchApi'

export const loadFollowing = () => async dispatch => {
  try {
    const res = await FetchApi.get('following')

    if (!!res) {
      const {
        data: {
          following,
          followers
        }
      } = res

      dispatch({
        type: NETWORK_TYPES.LOAD_FOLLOWING,
        following,
        followers
      })
    }
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

export const socketFollow = (user, followingId) => async (dispatch, getState) => {
  dispatch({
    type: NETWORK_TYPES.SOCKET_FOLLOW_USER,
    user,
    followingId,
    myId: getState().user.userData.id
  })
}

export const socketUnfollow = (userId) => async (dispatch, getState) => {
  dispatch({
    type: NETWORK_TYPES.SOCKET_UNFOLLOW_USER,
    userId,
    myId: getState().user.userData.id
  })
}