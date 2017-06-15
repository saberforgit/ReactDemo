/**
 * Created by wangxf on 2017/5/8.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Navigator } from 'react-native-deprecated-custom-components';
import Laucher from '../js/laucher';
import Splash from '../js/main/login/Splash';
import Main from '../js/main/main';
import Center from '../js/main/center/center';

let initialRoute = {
  component: Laucher,
  name: 'Laucher'
}

class App extends Component {

  constructor(props) {
    super(props);
    console.info('in App...');
    // if (props.isLoginIn) {
    //   initialRoute = {
    //     component: Main,
    //     name: 'Main'
    //   };
    // }
  }

  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    if (route.type === 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.FadeAndroid; // 右侧弹出
  }

  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  render() {
    return (
      <Navigator
        style={app.root}
        initialRoute={initialRoute}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
      />
    );
  }

}

const app = StyleSheet.create({
  root: {
    flex: 1,
  }
});

function select(store) {
  return {
    isLoginIn: store.loginStore.isLoginIn
  };
}
export default connect(select)(App);
