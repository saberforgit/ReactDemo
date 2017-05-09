/**
 * Created by wangxf on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableNativeFeedback,
    Animated,
    Alert,
    StyleSheet
} from 'react-native';
import Main from './Main'
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            passwd: ""
        }
    };


    render() {
        let path = {src: require('../img/login_bg.jpg')}
        return (
            <Image source={path.src} style={login.bg}>
                <View style={login.container}>
                    <View style={login.input}>
                        <View style={login.input_area}>
                            <TextInput onChangeText={(name) => {
                                this.setState({name: name})
                            }} value={this.state.name}
                                       style={login.input_name}
                                       placeholder="请输入姓名"
                                       underlineColorAndroid="transparent"/>
                            <TextInput onChangeText={(passwd) => {
                                this.setState({passwd: passwd})
                            }} value={this.state.passwd}
                                       style={login.input_passwd}
                                       placeholder="请输入密码"
                                       keyboardType="numeric"
                                       underlineColorAndroid="transparent"
                                       secureTextEntry={true}
                                       onSubmitEditing={this._onPressButton.bind(this)}/>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.SelectableBackground()}
                                onPress={this._onPressButton.bind(this)}>
                                <View style={login.input_submmit}>
                                    <Text style={login.input_submit_text}>登陆</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                    </View>
                </View>
            </Image>
        )
    }

    _onPressButton() {
        // Alert.alert("111111","name" + this.state.name + "+ passwd:" + this.state.passwd);
        this.props.navigator.push({
            component: Main,
            passProps: {
                name: this.state.name,
                passwd: this.state.passwd
            },
        });
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
        borderRadius: 5,
    },
    input_area: {
        margin: 5,
        justifyContent: 'center',
    },
    input_name: {
        backgroundColor: 'white',
        margin: 5,
        paddingLeft: 10,
        // borderBottomWidth: 1,
    },
    input_passwd: {
        margin: 5,
        paddingLeft: 10,
        backgroundColor: 'white'
        // borderBottomWidth: 1,
    },
    input_submmit: {
        margin: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    input_submit_text: {
        fontSize: 22,
        color: 'white'
    }
});
module.exports = Login;