import {
  put,
  takeEvery,
  call,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/user';
import api from '../utils/API'

export function* handlerSignInRequest() {
  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance);

    const response = yield apply(auth2, auth2.signIn);

    const token = yield apply(response, response.getAuthResponse)

    console.log('getted primary token')
    const id = yield apply(api, api.post, ['auth/google/', {

      token: token.id_token

    }])
    console.log(id.data.token)

    localStorage.setItem('loggedIn', 'true');

    yield put({
      type: a.SIGN_IN_SUCCESS,
      payload: {
        profile: response.getBasicProfile(),
        token: id.data.token,
      }
    })


    // const news = yield apply(api, api.post, ['feeds/', {
    //   title: '1',
    //   content: '123123'
    // }, {
    //     headers: {
    //       "x-access-token": id.data.token
    //     },
    //   }])

    // console.log(news)


  } catch (e) {
    console.log(e)
    yield put({
      type: a.SIGN_IN_FAILURE,
      payload: e
    })
  }
}

export function* handlerSignOutRequest() {

  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance);

    const response = yield apply(auth2, auth2.signOut)

    localStorage.setItem('loggedIn', 'false');

    yield put({
      type: a.SIGN_OUT_SUCCESS
    })
    console.log(response, 'im exit')
  } catch (e) {

    yield put({
      type: a.SIGN_OUT_FAILURE,
      payload: e
    })
    console.log(e)
  }
}


export function* watchSignInRequest() {

  yield takeEvery(a.SIGN_IN_REQUEST, handlerSignInRequest)
}

export function* watchSignOutRequest() {

  yield takeEvery(a.SIGN_OUT_REQUEST, handlerSignOutRequest)
}