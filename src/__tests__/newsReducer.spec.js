import reducer, { initState } from '../reducers/news'
import * as a from '../actions/news'


describe('news reducers', () => {
  describe('get all news reducer', () => {

    it(a.GET_NEWS_REQUEST, () => {
      const action = {
        type: a.GET_NEWS_REQUEST,
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: '',
        isFetching: true,
        editState: '',
        currentData: []
      })
    })

    it(a.GET_NEWS_SUCCESS, () => {
      const action = {
        type: a.GET_NEWS_SUCCESS,
        payload: [1, 2, 3]
      }

      const initState = {
        newsData: [],
        isFetching: true,
        msg: '',
        editState: '',
        currentData: []
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        newsData: action.payload,
        isFetching: false,
      })

    })
    it(a.GET_NEWS_FAILURE, () => {
      const action = {
        type: a.GET_NEWS_FAILURE,
        payload: {
          message: 'err'
        }
      }

      const initState = {
        newsData: [],
        isFetching: true,
        msg: '',
        editState: '',
        currentData: []
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: action.payload.message,
        isFetching: false,
      })
    })
  })

  describe('get item news reducer', () => {

    it(a.GET_NEWS_ITEM_REQUEST, () => {
      const action = {
        type: a.GET_NEWS_ITEM_REQUEST,
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: '',
        isFetching: true,
        editState: '',
      })
    })

    it(a.GET_NEWS_ITEM_SUCCESS, () => {
      const action = {
        type: a.GET_NEWS_ITEM_SUCCESS,
        payload: [1]
      }

      const initState = {
        newsData: [],
        isFetching: true,
        msg: '',
        editState: '',
        currentData: []
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        currentData: action.payload,
        isFetching: false,
      })

    })
    it(a.GET_NEWS_ITEM_FAILURE, () => {
      const action = {
        type: a.GET_NEWS_ITEM_FAILURE,
        payload: {
          message: 'err'
        }
      }

      const initState = {
        newsData: [],
        isFetching: true,
        msg: '',
        editState: '',
        currentData: []
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: action.payload.message,
        isFetching: false,
      })
    })
  })



  describe('edit news reducer', () => {

    it(a.EDIT_NEWS_REQUEST, () => {
      const action = {
        type: a.EDIT_NEWS_REQUEST,
        payload: { 1: 1 }
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: '',
        editState: 'loading',
      })
    })

    it(a.EDIT_NEWS_SUCCESS, () => {
      const action = {
        type: a.EDIT_NEWS_SUCCESS,
        payload: [1]
      }

      const initState = {
        newsData: [1],
        isFetching: false,
        msg: '',
        editState: 'loading',
        currentData: [1, 2, 3],
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        editState: 'done',
      })

    })
    it(a.EDIT_NEWS_FAILURE, () => {
      const action = {
        type: a.EDIT_NEWS_FAILURE,
        payload: 'err'
      }

      const initState = {
        newsData: [1],
        isFetching: false,
        msg: '',
        editState: 'loading',
        currentData: [1, 2, 3]
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: action.payload,
        editState: 'err'
      })
    })
  })



  describe('Create news reducer', () => {

    it(a.CREATE_NEWS_REQUEST, () => {
      const action = {
        type: a.CREATE_NEWS_REQUEST,
        payload: { 1: 1 }
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: '',
        editState: 'loading',
      })
    })

    it(a.CREATE_NEWS_SUCCESS, () => {
      const action = {
        type: a.CREATE_NEWS_SUCCESS,
        payload: [1]
      }

      const initState = {
        newsData: [1],
        isFetching: false,
        msg: '',
        editState: 'loading',
        currentData: [1, 2, 3],
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        editState: 'done',
      })

    })
    it(a.CREATE_NEWS_FAILURE, () => {
      const action = {
        type: a.CREATE_NEWS_FAILURE,
        payload: 'err'
      }

      const initState = {
        newsData: [1],
        isFetching: false,
        msg: '',
        editState: 'loading',
        currentData: [1, 2, 3]
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: action.payload,
        editState: 'err'
      })
    })
  })



  describe('Delete news reducer', () => {

    it(a.DELETE_NEWS_REQUEST, () => {
      const action = {
        type: a.DELETE_NEWS_REQUEST,
        payload: { 1: 1 }
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: '',
        isFetching: true,
      })
    })

    it(a.DELETE_NEWS_SUCCESS, () => {
      const action = {
        type: a.DELETE_NEWS_SUCCESS,
        payload: [1]
      }

      const initState = {
        newsData: [1],
        isFetching: true,
        msg: '',
        currentData: [1, 2, 3],
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        isFetching: false,
      })

    })
    it(a.DELETE_NEWS_FAILURE, () => {
      const action = {
        type: a.DELETE_NEWS_FAILURE,
        payload: {
          message: 'err'
        }
      }

      const initState = {
        newsData: [1],
        isFetching: true,
        msg: '',
        currentData: [1, 2, 3]
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: action.payload.message,
        isFetching: false,
      })
    })
  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState)
  })
})