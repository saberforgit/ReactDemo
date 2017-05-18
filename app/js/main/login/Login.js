/**
 * Created by wangxf on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableNativeFeedback,
    StyleSheet
} from 'react-native';
import Main from '../main';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      passwd: ''
    };
  }

  _onPressButton() {
    this.props.navigator.push({
      component: Main,
      passProps: {
        name: this.state.name,
        passwd: this.state.passwd
      },
    });
  }

  render() {
    const path = { src: require('../../../img/login_bg.jpg') };
    return (
      <Image source={path.src} style={login.bg}>
        <View style={login.container}>
          <View style={login.input}>
            <View style={login.input_area}>
              <Image style={login.input_header} source={require('../../../img/account_login.png')} />
              <TextInput
                onChangeText={(name) => {
                  this.setState({ name });
                }} value={this.state.name}
                style={login.input_name}
                placeholder="请输入姓名"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={login.input_area}>
              <Image
                style={login.input_header} source={require('../../../img/passwd_login.png')}
                resizeMode="contain"
              />
              <TextInput
                onChangeText={(passwd) => {
                  this.setState({ passwd });
                }} value={this.state.passwd}
                style={login.input_passwd}
                placeholder="请输入密码"
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                onSubmitEditing={this._onPressButton.bind(this)}
              />
            </View>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              onPress={this._onPressButton.bind(this)}
            >
              <View style={login.input_submmit}>
                <Text style={login.input_submit_text}>登陆</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Image>
    );
  }

}

const login = StyleSheet.create({
  bg: {
    height: '100%',
    width: '100 %'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    justifyContent: 'center',
    width: '80%',
  },
  input_area: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  input_header: {
    marginLeft: 5,
    width: 35,
    height: 30
  },
  input_name: {
    flex: 1,
    paddingLeft: 15,
        // borderBottomWidth: 1,
  },
  input_passwd: {
    flex: 1,
    paddingLeft: 15,
        // borderBottomWidth: 1,
  },
  input_submmit: {
    margin: 5,
    marginTop: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'green'
  },
  input_submit_text: {
    fontSize: 22,
    color: 'white'
  }
});
module.exports = Login;
