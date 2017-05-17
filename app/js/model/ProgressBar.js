/**
 *
 * Created by wangxf on 2017/5/10.
 */
import React, {Component} from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
class ProgressBar extends Component {
    render() {
        return (
            <View style={progressbar.container}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
}
const progressbar = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef'
    },
    progress: {}
});

module.exports = ProgressBar;
