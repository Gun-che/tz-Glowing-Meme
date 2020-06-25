import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE
} from '../actions/news'
import api from '../utils/API'

export function* handlerNewsRequest() {
  try {
    const news = yield apply(api, api.get, ['feeds/']);
    console.log(news);

    yield put({
      type: GET_NEWS_SUCCESS,
      payload: news.data.feeds
    })

  } catch (error) {

    yield put({
      type: GET_NEWS_FAILURE,
      payload: error
    })
    console.error(error)
  }
}

export function* watchNewsRequest() {

  console.log("i'm sign out request")

  yield takeEvery(GET_NEWS_REQUEST, handlerNewsRequest)
}