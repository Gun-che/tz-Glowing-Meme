import {
  put,
  takeEvery,
  call,
  apply
} from 'redux-saga/effects'
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from '../actions/user'

export function* handlerSignInRequest() {
  try {
    console.log("i'm saga")
    const auth2 = yield call(window.gapi.auth2.getAuthInstance);

    const response = yield apply(auth2, auth2.signIn);

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: response.getBasicProfile()
    })


  } catch (e) {
    console.log(e)
    yield put({
      type: SIGN_IN_FAILURE,
      payload: e
    })
  }
}

export function* handlerSignOutRequest() {

  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance);

    const response = yield apply(auth2, auth2.signOut)

    yield put({
      type: SIGN_OUT_SUCCESS
    })
    console.log(response, 'im exit')
  } catch (e) {

    yield put({
      type: SIGN_OUT_FAILURE,
      payload: e
    })
    console.log(e)
  }
}

export function* watchSignInRequest() {
  console.log("i'm sign in request")

  yield takeEvery(SIGN_IN_REQUEST, handlerSignInRequest)
}

export function* watchSignOutRequest() {
  console.log("i'm sign out request")

  yield takeEvery(SIGN_OUT_REQUEST, handlerSignOutRequest)
}