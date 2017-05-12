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
import Login from './Login';

import ViewPager  from 'react-native-viewpager';
const BANNER_IMGS = [
    {src: require('../img/main/home_bg.jpg')},
    {src: require('../img/main/person_bg.jpg')},
    {src: require('../img/main/app_bg.jpg')}
];

class Splash extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _jump() {
        this.props.navigator.push({
            component: Login,
        })
    }

    componentDidMount() {
        // 添加返回键监听
        this.addBackAndroidListener(this.props.navigator);
    }

    componentWillUnmount() {
        // 移除返回键监听
        this.removeBackAndroidListener();
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data.src}
                style={login.page}/>
        );
    }

    render() {
        return (
            <View style={login.container}>
                <ViewPager
                    style={login.viewpager}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    onChangePage={(page) => {
                        if (page == 2) {
                            this._jump();
                        }
                    }}
                    autoPlay={true}/>
            </View>
        );
    }


    // 监听返回键事件
    addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', () => {
                return this.onBackAndroid(navigator);
            });
        }
    }

    // 移除监听
    removeBackAndroidListener() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', () => {
            });
        }
    }


    // 判断是返回上一页还是退出程序
    onBackAndroid(navigator) {
        if (!navigator) return false;
        const routers = navigator.getCurrentRoutes();
        // 当前页面不为root页面时的处理
        if (routers.length > 0) {
            const top = routers[routers.length - 1];
            ToastAndroid.show(JSON.stringify(top.component.displayName), ToastAndroid.LONG);
            switch (top.component.displayName) {
                case 'Splash':
                    return true;
                    break;
                case 'Login':
                    return false;
                    break;
                case 'Main':
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

const login = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    page: {
        flex: 1,
        width: '100%',
    },
    viewpager: {
        flex: 1,
        width: '100%',
    }
});

module.exports = Splash;