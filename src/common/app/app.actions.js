import { storeUserData } from '../user/user.actions.js'
import { FetchApi } from '../../helpers/FetchApi'


export const initApp = () => async dispatch => {
  const isAuth = !!FetchApi.getToken()

  if (isAuth) {
    const userData = FetchApi.getStorageData('userData')
    dispatch(storeUserData(userData))
  }
}