import reducer, { initState } from '../reducers/user'
import * as a from '../actions/user'


describe('user reducers', () => {
  describe('sign in reducer', () => {

    it(a.SIGN_IN_REQUEST, () => {
      const action = {
        type: a.SIGN_IN_REQUEST,
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: '',
      })
    })

    it(a.SIGN_IN_SUCCESS, () => {
      const action = {
        type: a.SIGN_IN_SUCCESS,
        payload: {
          profile: { 1: [1, 2, 3] },
          token: '123ff'
        }
      }

      const initState = {
        userData: {},
        loggedIn: false,
        msg: '',
        token: '',
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        token: action.payload.token,
        userData: action.payload.profile,
        loggedIn: true,
      })

    })
    it(a.SIGN_IN_FAILURE, () => {
      const action = {
        type: a.SIGN_IN_FAILURE,
        payload: 'err'
      }

      const initState = {
        userData: {},
        loggedIn: false,
        msg: '',
        token: '',
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        msg: action.payload,
      })
    })
  })
})


describe('sign out reducer', () => {

  it(a.SIGN_OUT_REQUEST, () => {
    const action = {
      type: a.SIGN_OUT_REQUEST,
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      msg: '',
    })
  })

  it(a.SIGN_OUT_SUCCESS, () => {
    const action = {
      type: a.SIGN_OUT_SUCCESS,
      payload: { 1: 1 }
    }

    const initState = {
      userData: { 1: 1, 2: 2 },
      loggedIn: true,
      msg: '',
      token: '1231',
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      token: '',
      userData: {},
      loggedIn: false,
    })

  })
  it(a.SIGN_OUT_FAILURE, () => {
    const action = {
      type: a.SIGN_OUT_FAILURE,
      payload: 'err'
    }

    const initState = {
      userData: { 1: 1, 2: 2 },
      loggedIn: true,
      msg: '',
      token: '1231',
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      msg: action.payload,
    })
  })



  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState)
  })
})