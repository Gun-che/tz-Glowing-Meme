import * as a from '../actions/user'
import { reedFromLocalStorage } from '../utils/localStorageHelper'

const info = reedFromLocalStorage();

export const initState = {
  loggedIn: info.loggedIn,
  msg: '',
  token: info.token,
  authToken: info.authToken,
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case a.SIGN_IN_REQUEST:
      return {
        ...state,
        msg: '',
      }
    case a.SIGN_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token,
        authToken: action.payload.authToken,
      }
    case a.SIGN_IN_FAILURE:
      return {
        ...state,
        msg: action.payload,
        loggedIn: false
      }



    case a.SIGN_OUT_REQUEST:
      return {
        ...state,
        msg: '',
      }
    case a.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        token: '',
        authToken: '',
      }
    case a.SIGN_OUT_FAILURE:
      return {
        ...state,
        msg: action.payload,
      }




    case a.REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        msg: '',
      }
    case a.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        authToken: action.payload.authToken,
        loggedIn: true,
        token: action.payload.token,
      }
    case a.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        msg: action.payload.message,
        authToken: '',
        token: '',
        loggedIn: false,
      }



    default:
      return state;
  }
}