import * as a from '../actions/news'

const iniitState = {
  newsData: [],
  isFetching: false,
  msg: '',
  editState: '',
  currentData: []
}

export default function reducer(state = iniitState, action) {
  switch (action.type) {
    case a.GET_NEWS_REQUEST:
      return {
        ...state,
        msg: '',
        isFetching: true,
        editState: '',
        currentData: []
      }
    case a.GET_NEWS_SUCCESS:
      return {
        ...state,
        newsData: action.payload,
        isFetching: false,
      }
    case a.GET_NEWS_FAILURE:
      return {
        ...state,
        msg: action.payload.message,
        isFetching: false,
      }

    case a.EDIT_NEWS_REQUEST:
      return {
        ...state,
        msg: '',
        editState: 'loading',
      }
    case a.EDIT_NEWS_SUCCESS:
      return {
        ...state,
        editState: 'done',
      }
    case a.EDIT_NEWS_FAILURE:
      return {
        ...state,
        msg: action.payload,
        editState: 'err',
      }



    case a.CREATE_NEWS_REQUEST:
      return {
        ...state,
        msg: '',
        editState: 'loading',
      }
    case a.CREATE_NEWS_SUCCESS:
      return {
        ...state,
        editState: 'done',
      }
    case a.CREATE_NEWS_FAILURE:
      return {
        ...state,
        msg: action.payload,
        editState: 'err',
      }

    case a.DELETE_NEWS_REQUEST:
      return {
        ...state,
        msg: '',
        isFetching: true,
      }
    case a.DELETE_NEWS_SUCCESS:
      return {
        ...state,
        // newsData: action.payload,
        isFetching: false,
      }
    case a.DELETE_NEWS_FAILURE:
      return {
        ...state,
        msg: action.payload.message,
        isFetching: false,
      }


    case a.GET_NEWS_ITEM_REQUEST:
      return {
        ...state,
        msg: '',
        isFetching: true,
        editState: '',
        // currentData: [],
      }
    case a.GET_NEWS_ITEM_SUCCESS:
      return {
        ...state,
        currentData: action.payload,
        isFetching: false,
      }
    case a.GET_NEWS_ITEM_FAILURE:
      return {
        ...state,
        msg: action.payload.message,
        isFetching: false,
      }

    default:
      return state;
  }
}