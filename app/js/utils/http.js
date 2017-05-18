/**
 * Created by wangxf on 2017/5/10.
 */
class Http {
  static get(url, responseType, callback) {
    const opts = {
      method: 'GET'
    };
    fetch(url, opts)
      .then((response) => {
        switch (responseType) {
          case 'JSON':
            return response.json();
          case 'TEXT':
            return response.text();
          default:
            return response.json();
        }
      })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((error) => {
        callback(error);
      });
  }

  static getJson(url, callback) {
    this.get(url, 'JSON', callback);
  }

  static getText(url, callback) {
    this.get(url, 'TEXT', callback);
  }

  post() {

  }
}

module.exports = Http;
