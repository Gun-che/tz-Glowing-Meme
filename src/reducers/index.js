import { combineReducers } from 'redux'
import user from './user'
import news from './news'

export const rootReducer = combineReducers({
  user: user,
  news: news,
})