/**
 * Created by wangxf on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Alert,
    Platform,
    BackHandler,
    ToastAndroid,
    StyleSheet
} from 'react-native';
import Login from './main/login/Login';
import Splash from './main/login/Splash';
import AppStorage from './utils/storage';
import AppCodes from './const/codes';
class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFirstLanch: true
        }
    }

    componentDidMount() {
        // 添加返回键监听
        this._addBackAndroidListener(this.props.navigator);
    }

    componentWillUnmount() {
        // 移除返回键监听
        this._removeBackAndroidListener();
    }

    componentWillMount() {
        this._initApp();
    }

    render() {
        if (this.state.isFirstLanch) {
            return this._initFirstLanch();
        } else {
            return this._initNoFirstLanch();
        }
    }

    //跳转登录
    _login() {
        return (<Login navigator={this.props.navigator}/>)
    }

    //跳转splash
    _splash() {
        return (<Splash navigator={this.props.navigator}/>)
    }

    //首次启动
    _initFirstLanch() {
        AppStorage.save(AppCodes.APP_LANCHER, AppCodes.APP_LANCHER_TYPE.NoFirst);
        return this._splash();
    }

    //非首次启动
    _initNoFirstLanch() {
        return this._login();
    }

    //初始化app
    _initApp() {
        AppStorage.get(AppCodes.APP_LANCHER).then((value) => {
            value = value ? value : AppCodes.APP_LANCHER_TYPE.First;
            switch (value) {
                case AppCodes.APP_LANCHER_TYPE.First:
                    break;
                case AppCodes.APP_LANCHER_TYPE.NoFirst:
                    this.setState({
                        isFirstLanch: false
                    })
                    break;
                default:
                    this.setState({
                        isFirstLanch: false
                    })
            }
        })
    }

    // 监听返回键事件
    _addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', () => {
                return this._onBackAndroid(navigator);
            });
        }
    }

    // 移除监听
    _removeBackAndroidListener() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', () => {
            });
        }
    }


    // 判断是返回上一页还是退出程序
    _onBackAndroid(navigator) {
        if (!navigator) return false;
        const routers = navigator.getCurrentRoutes();
        // 当前页面不为root页面时的处理
        if (routers.length > 0) {
            const top = routers[routers.length - 1];
            ToastAndroid.show(JSON.stringify(top.component.displayName), ToastAndroid.SHORT);
            switch (top.component.displayName) {
                case 'Root':
                    BackHandler.exitApp();
                    return false;
                    break;
                case 'Login':
                    BackHandler.exitApp();
                    return false;
                    break;
                case 'Main':
                    BackHandler.exitApp();
                    return false;
                    break;
            }
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

    }
}

module.exports = Root;