import {
  put,
  takeEvery,
  call,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/user';
import api from '../utils/API'
import { writeLocalStorage, cleareLocalStorage } from '../utils/localStorageHelper'

export function* handlerSignInRequest() {
  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance);

    const response = yield apply(auth2, auth2.signIn);

    const token = yield apply(response, response.getAuthResponse)

    const id = yield apply(api, api.post, ['auth/google/', {
      token: token.id_token
    }])

    writeLocalStorage({
      token: id.data.token,
      authToken: token.id_token,
      loggedIn: true,
    })

    yield put({
      type: a.SIGN_IN_SUCCESS,
      payload: {
        authToken: token.id_token,
        token: id.data.token,
      }
    })

  } catch (e) {
    console.error(e)

    yield put({
      type: a.SIGN_IN_FAILURE,
      payload: e
    })
  }
}

export function* handlerSignOutRequest() {

  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance);

    yield apply(auth2, auth2.signOut)

    cleareLocalStorage()

    yield put({
      type: a.SIGN_OUT_SUCCESS
    })

  } catch (e) {
    console.error(e)

    yield put({
      type: a.SIGN_OUT_FAILURE,
      payload: e
    })
  }
}


export function* watchSignInRequest() {

  yield takeEvery(a.SIGN_IN_REQUEST, handlerSignInRequest)
}

export function* watchSignOutRequest() {

  yield takeEvery(a.SIGN_OUT_REQUEST, handlerSignOutRequest)
}