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
class Home extends Component {


    render() {
        return (
            <Image style={home.img_bg} source={require('../../img/main/home_bg.jpg')}>

            </Image>
        );
    }
}

const home = StyleSheet.create({
    img_bg: {
        width: '100%',
        height: '100%'
    }
});
module.exports = Home;