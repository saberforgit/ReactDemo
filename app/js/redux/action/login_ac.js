/**
 * 登录
 */
import { Alert } from 'react-native';
import *as TYPES from '../constants/actionTypes';

let testUser = {
  name: 'Jack',
  age: 12,
  avatar: 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
}

let skipUser = {
  name: 'Marry',
  age: 24,
  avatar: 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
}

/**
 * 网络登录
 * @param {*登录参数} opt 
 */
export function logIn(opt) {
  return (dispatch) => {
    dispatch({ type: TYPES.APP_LOGIN_ING });
    fetch('http://www.baidu.com')
      .then((res) => {
        dispatch({ type: TYPES.APP_LOGIN_IN, user: testUser });
      }).catch((e) => {
        Alert.alert(null, e);
        dispatch({ type: TYPES.APP_LOGIN_ERRO, error: e })
      })
  }
}
/**
 * 测试登录
 */
export function skipLogin() {
  return {
    type: TYPES.APP_LOGIN_IN,
    user: skipUser
  };
}

export function loginOut() {
  return {
    type: TYPES.APP_LOGIN_OUT
  }
}

