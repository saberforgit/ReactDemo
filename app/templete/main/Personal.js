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
class Personal extends Component {


    render() {
        return (
            <Image style={personal.img_bg} source={require('../../img/main/person_bg.jpg')}>

            </Image>
        );
    }
}

const personal = StyleSheet.create({
    img_bg: {
        width: '100%',
        height: '100%'
    }
});
module.exports = Personal;