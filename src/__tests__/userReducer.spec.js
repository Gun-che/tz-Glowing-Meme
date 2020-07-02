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
          authToken: '12345ff',
          token: '123ff'
        }
      }

      const initState = {
        loggedIn: false,
        msg: '',
        token: '',
        authToken: '',
      }

      expect(reducer(initState, action)).toEqual({
        ...initState,
        token: action.payload.token,
        authToken: action.payload.authToken,
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
    }

    const initState = {
      authToken: '12345ff',
      loggedIn: true,
      msg: '',
      token: '1231',
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      token: '',
      authToken: '',
      loggedIn: false,
    })

  })
  it(a.SIGN_OUT_FAILURE, () => {
    const action = {
      type: a.SIGN_OUT_FAILURE,
      payload: 'err'
    }

    const initState = {
      authToken: '12345ff',
      loggedIn: true,
      msg: '',
      token: '1231',
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      msg: action.payload,
    })
  })
})



describe('sign out reducer', () => {

  it(a.REFRESH_TOKEN_REQUEST, () => {
    const action = {
      type: a.REFRESH_TOKEN_REQUEST,
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      msg: '',
    })
  })

  it(a.REFRESH_TOKEN_SUCCESS, () => {
    const action = {
      type: a.REFRESH_TOKEN_SUCCESS,
      payload: {
        token: '123ff',
        authToken: '12345ff'
      }
    }

    const initState = {
      authToken: '12344',
      loggedIn: true,
      msg: '',
      token: '1231',
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      token: action.payload.token,
      authToken: action.payload.authToken,
      loggedIn: true,
    })

  })
  it(a.REFRESH_TOKEN_FAILURE, () => {
    const action = {
      type: a.REFRESH_TOKEN_FAILURE,
      payload: {
        message: 'err'
      }
    }

    const initState = {
      authToken: '12344',
      loggedIn: true,
      msg: '',
      token: '1231',
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      msg: action.payload.message,
      authToken: '',
      token: '',
      loggedIn: false,

    })
  })
})