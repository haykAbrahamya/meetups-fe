import { PROFILE_TYPES } from './ProfilePage.types'
import { FetchApi } from '../../helpers/FetchApi'
import { setLoading } from '../../common/app/app.actions'


const setKeys = (obj) => async dispatch => {
  dispatch({
    type: PROFILE_TYPES.SET_KEYS,
    obj
  })
}

export const loadUserData = (username) => async dispatch => {
  try {
    dispatch(setLoading(true))

    const { data: profileData } = await FetchApi.get(`user?username=${username}`)

    dispatch(setKeys({
      profileData: profileData
    }))

  } catch (e) {

  } finally {
    dispatch(setLoading(false))
  }
}
