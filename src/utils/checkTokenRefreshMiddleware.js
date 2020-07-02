import jwt from 'jsonwebtoken'
import * as a from '../actions/user'
import { reedFromLocalStorage } from './localStorageHelper'

export const checkTokenRefresh = store => next => action => {
  const userData = reedFromLocalStorage();

  if (userData.token && window.gapi && window.gapi.hasOwnProperty('auth2')) {
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
}