import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ToolbarAndroid,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './main/Home';
import Application from './main/Application';
import Personal from  './main/Personal';
import ListEx from  './main/ListViewSimpleExample';
export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: '首页',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    actions={toolbarActions}
                    navIcon={require('../img/main/setting.png') }
                    style={styles.toolbar}
                    title={this.state.selectedTab}></ToolbarAndroid>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../img/main/home_nor.png")}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require("../img/main/home_press.png")}/>}
                        onPress={() => this.setState({selectedTab: '首页'})}>
                        <Home navigator={this.props.navigator}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Application'}
                        title="Application"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../img/main/app_nor.png")}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require("../img/main/app_press.png")}/>}
                        onPress={() => this.setState({selectedTab: 'Application'})}>
                        <ListEx />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../img/main/person_nor.png")}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require("../img/main/person_press.png")}/>}
                        onPress={() => this.setState({selectedTab: '我的'})}>
                        <Personal />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
let toolbarActions = [
    {title: 'Create', icon: require('../img/voice.png')},
    {title: 'Remove'},
    {title: 'Add'},
    {title: 'Settings', icon: require('../img/voice.png'), show: 'always'},
];
let styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});

module.exports = Main;