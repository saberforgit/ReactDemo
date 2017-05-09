/**
 * Created by wangxf on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import Login from './Login';
class Splash extends Component {

    _jump() {
        this.props.navigator.push({
            component: Login,
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this._jump()
        }, 2000);
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={login.container}>
                <ImageView />
            </View>
        );
    }
}
;

class ImageView extends Component {

    render() {
        let path = {src: require('../../app/img/login_bg.jpg')}
        return (
            <Image source={path.src} style={login.imageView}/>
        );
    }
}

const login = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        flex: 1,
        width: '100%',
    }
});

module.exports = Splash;