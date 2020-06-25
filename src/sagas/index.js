import { all } from 'redux-saga/effects'
import {
  watchSignInRequest,
  watchSignOutRequest
} from './user'
import {
  watchNewsRequest,
} from './news'

export default function* rootSaga() {
  yield all([
    watchSignInRequest(),
    watchSignOutRequest(),
    watchNewsRequest(),
  ])
}