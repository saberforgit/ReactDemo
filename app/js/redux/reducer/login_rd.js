import * as TYPES from '../constants/actionTypes'

const initialState = {
  isLoginIn: false,
  user: {},
  status: null
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case TYPES.APP_LOGIN_ING:
      return {
        ...state,
        status: 'logining'
      };
    case TYPES.APP_LOGIN_IN:
      return {
        ...state,
        status: 'loginin',
        user: action.user,
        isLoginIn: true
      };
    case TYPES.APP_LOGIN_OUT:
      return {
        ...state,
        status: 'loginout',
        isLoginIn: false,
        user: null
      };
    case TYPES.APP_LOGIN_ERRO:
      return {
        ...state,
        status: 'loginerror',
        isLoginIn: false,
        user: null
      };
    default:
      return state;
  }
}

