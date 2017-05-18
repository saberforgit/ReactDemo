/**
 * Created by wangxf on 2017/5/11.
 */
import {
  AsyncStorage
} from 'react-native';

class AppStorage {
  /**
   * 获取
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  static get(key) {
    return AsyncStorage.getItem(key).then((value) => (
      JSON.parse(value)
    ));
  }


  /**
   * 保存
   * @param key
   * @param value
   * @returns {*}
   */
  static save(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }


  /**
   * 更新
   * @param key
   * @param value
   * @returns {Promise<T>|Promise.<TResult>}
   */
  static update(key, value) {
    return AsyncStorage.get(key).then((item) => (
      AsyncStorage.setItem(key, JSON.stringify(typeof value === 'string' ? value : Object.assign({}, item, value)))
    ));
  }


  /**
   * 更新
   * @param key
   * @returns {*}
   */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }
}

export default AppStorage;
