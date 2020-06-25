import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE
} from '../actions/news'

const iniitState = {
  newsData: [],
  isFetching: false,
  msg: '',
}

export default function reducer(state = iniitState, action) {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        msg: '',
        isFetching: true,
      }
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        newsData: action.payload,
        isFetching: false,
      }
    case GET_NEWS_FAILURE:
      return {
        ...state,
        msg: action.payload.message,
        isFetching: false,
      }

    default:
      return state;
  }
}