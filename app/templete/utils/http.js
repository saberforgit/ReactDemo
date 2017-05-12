/**
 * Created by wangxf on 2017/5/10.
 */
import React, {Component} from 'react';
import {} from 'react-native';
class Http extends Component {
    static get(url, responseType, callback) {
        var opts = {
            method: "GET"
        }
        fetch(url, opts)
            .then((response) => {
                switch (responseType) {
                    case 'JSON':
                        return response.json();
                        break;
                    case 'TEXT':
                        return response.text();
                        break;
                    default:
                        return response.json();
                }
            })
            .then((responseData) => {
                callback(responseData);
            })
            .catch((error) => {
                callback(error);
            })
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