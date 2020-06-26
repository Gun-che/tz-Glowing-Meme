import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/news'
import api from '../utils/API'

export function* handlerDeleteNewsRequest(action) {
  try {

    const res = yield apply(api, api.delete, [`feeds/${action.payload.newsId}`, {
      headers: {
        "x-access-token": action.payload.token
      },
    }])
    console.log(res)

    yield put({
      type: a.DELETE_NEWS_SUCCESS,
      payload: res
    })

    yield put({
      type: a.GET_NEWS_REQUEST,
    })

  } catch (error) {

    yield put({
      type: a.DELETE_NEWS_FAILURE,
      payload: error
    })
    console.error(error)
  }
}

export function* watchDeleteNewsRequest() {
  console.log("i'm sign out request")
  yield takeEvery(a.DELETE_NEWS_REQUEST, handlerDeleteNewsRequest)

}
