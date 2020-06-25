import { all } from 'redux-saga/effects'
import {
  watchSignInRequest,
  watchSignOutRequest
} from './user'

export default function* rootSaga() {
  yield all([
    watchSignInRequest(),
    watchSignOutRequest(),
  ])
}