/**
 * Created by wangxf on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ToastAndroid,
    TouchableOpacity,
    Text
} from 'react-native';

import Camera from './Camera';
import ToastModule from '../../native_module/toast';

const PersonalList = require('./personalList');

class Personal extends Component {

    constructor(props) {
        super(props);
        this.takePhoto = this.takePhoto.bind(this);
        this.state = {
            data: null,
            header_img: 'file:///storage/emulated/0/img/1185229.png'
        };
    }

    componentWillMount() {
        this.setState({
            data: require('../../../data/personal.json').personal
        });
    }


    takePhoto() {
        ToastModule.showToast('I am a self toast', ToastModule.SHORT);
        const self = this;
        this.props.navigator.push({
            component: Camera,
            passProps: {
                getPhoto(image) {
                    ToastAndroid.show(JSON.stringify(image), ToastAndroid.LONG);
                    self.setState({
                        header_img: image.path
                    });
                },
            }
        });
    }

    render() {
        return (
            <View style={personal.container}>
                <TouchableOpacity style={personal.header} onPress={this.takePhoto}>
                    <Image style={personal.header_img} source={{ uri: this.state.header_img }} />
                    <Text style={personal.header_name}>wangxf</Text>
                </TouchableOpacity>
                <PersonalList data={this.state.data} />
            </View>
        );
    }
}

const personal = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: '20%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_img: {
        margin: 5,
        height: 50,
        width: 50,
        borderRadius: 25
    },
    header_name: {
        margin: 5,
        textAlign: 'center',
        fontSize: 24
    }
});
module.exports = Personal;
