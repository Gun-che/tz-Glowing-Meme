import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from '../actions/user'

export const initState = {
  userData: {},
  loggedIn: JSON.parse(localStorage.getItem('loggedInGoogleSignIn')) || false,
  msg: '',
  token: localStorage.getItem('tokenGoogle') || '',
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        msg: '',
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        userData: action.payload.profile,
        loggedIn: true,
        token: action.payload.token
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        msg: action.payload,
        loggedIn: false
      }



    case SIGN_OUT_REQUEST:
      return {
        ...state,
        msg: '',
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        userData: {},
        loggedIn: false,
        token: ''
      }
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        msg: action.payload,
      }



    default:
      return state;
  }
}