import jwt from 'jsonwebtoken'
import * as a from '../actions/user'
import { reedFromLocalStorage } from './localStorageHelper'

export const checkTokenRefresh = store => next => action => {
  try {

    const userData = reedFromLocalStorage();
    const isOnProcess = JSON.parse(localStorage.getItem('requestInProcess')) || false;

    if (!isOnProcess && userData.token && window.gapi && window.gapi.hasOwnProperty('auth2')) {
      localStorage.setItem('requestInProcess', 'true')
      console.log(window.gapi)
      const { token } = userData;

      const googleExpire = jwt.decode(token).exp * 1000 || null;
      const now = new Date().getTime();

      if (googleExpire && (now > googleExpire)) {

        store.dispatch({
          type: a.REFRESH_TOKEN_REQUEST
        })
        return next(action);

      } else {
        return next(action);
      }
    } else {
      return next(action);
    }

  } catch (error) {
    console.error(error)
    alert(`что-то пошло не так (${error.message})`)
    return next(action)
  }
}