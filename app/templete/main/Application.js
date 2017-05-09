/**
 * Created by wangxf on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
class Application extends Component {


    render() {
        return (
            <Image style={app.img_bg} source={require('../../img/main/app_bg.jpg')}>

            </Image>
        );
    }
}

const app = StyleSheet.create({
    img_bg: {
        width: '100%',
        height: '100%'
    }
});
module.exports = Application;