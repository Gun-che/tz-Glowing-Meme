import { all } from 'redux-saga/effects'
import {
  watchSignInRequest,
  watchSignOutRequest
} from './user'
import {
  watchNewsRequest,
  watchNewsItemRequest,
} from './news'
import { watchDeleteNewsRequest } from './newsEdit'

export default function* rootSaga() {
  yield all([
    watchSignInRequest(),
    watchSignOutRequest(),
    watchNewsRequest(),
    watchDeleteNewsRequest(),
    watchNewsItemRequest(),
  ])
}