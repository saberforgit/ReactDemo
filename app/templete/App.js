/**
 * Created by wangxf on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    Platform,
    TouchableOpacity
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Root from './Root';
import Splash from './Splash';
import Main from './Main';
import ListR from './main/ListViewSimpleExample';
class App extends Component {

    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    /**
     * 配置场景动画
     * @param route 路由
     * @param routeStack 路由栈
     * @returns {*} 动画
     */
    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.FadeAndroid; // 右侧弹出
    }

    render() {
        return (
            <Navigator
                style={app.root}
                initialRoute={{component: Root}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }

}
const app = StyleSheet.create({
    root: {
        flex: 1,
    }
});
module.exports = App;