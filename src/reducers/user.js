import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from '../actions/user'

const iniitState = {
  userData: {},
  loggedIn: false,
  msg: ''
}

export default function reducer(state = iniitState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        msg: ''
      }
    case SIGN_IN_SUCCESS:
      return {
        userData: action.payload,
        loggedIn: true,

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
        userData: {}
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        msg: '',
        userData: {}
      }
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        msg: action.payload,
        userData: {}
      }

    default:
      return state;
  }
}