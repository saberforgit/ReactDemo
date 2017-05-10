/**
 * Created by wangxf on 2017/5/10.
 */

'use strict';
import React, {Component} from 'react';
import {
    Platform,
    Navigator,
    BackAndroid,
    ToastAndroid,
    NativeModules,
} from 'react-native';

// 类
var NativeCommonTools = NativeModules.CommonTools;

class BackAndroidTool extends Component {
    // 监听返回键事件
    static addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => {
                return this.onBackAndroid(navigator);
            });
        }
    }


    // 移除监听
    static removeBackAndroidListener() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', () => {
            });
        }
    }

    // 判断是返回上一页还是退出程序
    static onBackAndroid(navigator) {
        if (!navigator) return false;
        const routers = navigator.getCurrentRoutes();
        // 当前页面不为root页面时的处理
        if (routers.length > 1) {
            const top = routers[routers.length - 1];
            if (top.ignoreBack || top.component.ignoreBack) {
                // 路由或组件上决定这个界面忽略back键
                return true;
            }
            const handleBack = top.handleBack || top.component.handleBack;
            if (handleBack) {
                // 路由或组件上决定这个界面自行处理back键
                return handleBack();
            }
            // 默认行为： 退出当前界面。
            navigator.pop();
            return true;
        }
        // 当前页面为root页面时的处理
        if (this.lastBackPressed && (this.lastBackPressed + 2000 >= Date.now())) {
            //最近2秒内按过back键，可以退出应用。
            NativeCommonTools.onBackPressed();
            return true;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }

    // 自定义返回按钮事件
    static customHandleBack(navigator, handleBack) {
        if (navigator) {
            let routes = navigator.getCurrentRoutes(); //nav是导航器对象
            let lastRoute = routes[routes.length - 1]; // 当前页面对应的route对象
            lastRoute.handleBack = handleBack;
        }
    }

}

module.exports = BackAndroidTool;