import {
  put,
  takeEvery,
  call,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/user';
import api from '../utils/API'
import { writeLocalStorage } from '../utils/localStorageHelper'

export function* handlerTokenRefreshRequest() {
  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance);
    console.log('yo!', auth2.currentUser)
    const currentUser = auth2.currentUser;
    const response = yield apply(currentUser, currentUser.get);

    const token = yield apply(response, response.reloadAuthResponse)

    const authToken = token.id_token

    const id = yield apply(api, api.post, ['auth/google/', {
      token: token.id_token
    }])
    console.log(id)

    writeLocalStorage({
      token: id.data.token,
      authToken,
      loggedIn: true,
    })

    yield put({
      type: a.REFRESH_TOKEN_SUCCESS,
      payload: {
        authToken,
        token: id.data.token,
      }
    })

    yield localStorage.setItem('requestInProcess', 'false');

  } catch (e) {
    console.log(e)

    yield put({
      type: a.REFRESH_TOKEN_FAILURE,
      payload: e
    })
  }
}



export function* watchTokenRefreshRequest() {
  console.log('yo!')

  yield takeEvery(a.REFRESH_TOKEN_REQUEST, handlerTokenRefreshRequest)
}