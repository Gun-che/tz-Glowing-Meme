import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/news'
import api from '../utils/API'

export function* handlerNewsRequest() {
  try {
    const news = yield apply(api, api.get, ['feeds/']);

    yield put({
      type: a.GET_NEWS_SUCCESS,
      payload: news.data.feeds
    })

  } catch (error) {

    console.error(error)
    yield put({
      type: a.GET_NEWS_FAILURE,
      payload: error
    })
  }
}

export function* handlerNewsItemRequest(action) {
  try {
    const res = yield apply(api, api.get, [`feeds/${action.payload}`])

    yield put({
      type: a.GET_NEWS_ITEM_SUCCESS,
      payload: [res.data.feed],
    })

  } catch (error) {
    console.error(error)

    yield put({
      type: a.GET_NEWS_ITEM_FAILURE,
      payload: error,
    })
  }
}

export function* watchNewsRequest() {
  yield takeEvery(a.GET_NEWS_REQUEST, handlerNewsRequest)
}

export function* watchNewsItemRequest() {
  yield takeEvery(a.GET_NEWS_ITEM_REQUEST, handlerNewsItemRequest)
}