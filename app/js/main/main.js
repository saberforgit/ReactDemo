import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ToolbarAndroid,
  Alert,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const Home = require('./home/home');
const CenterTab = require('./center/center');
const Personal = require('./personal/personal');
const Search = require('./search/search');
const SideMenu = require('react-native-side-menu');
const toolbarActions = [
  { title: 'Create', icon: require('../../img/voice.png') },
  { title: 'Remove' },
  { title: 'Add' },
  { title: 'Settings', icon: require('../../img/voice.png'), show: 'always' },
];

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页',
      isSlideOpen: false
    };
  }
  onActionSelected(position) {
    Alert.alert(null, `Selected ${toolbarActions[position].title}`);
  }
  onSlideMenuClick() {
    this.setState({
      isSlideOpen: true
    });
  }

  render() {
    const menu = <Personal navigator={this.props.navigator} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isSlideOpen}
        onChange={(isOpen) => this.setState({ isSlideOpen: isOpen })}
      >
        <View style={styles.container}>
          <ToolbarAndroid
            actions={toolbarActions}
            navIcon={require('../../img/main/setting.png')}
            style={styles.toolbar}
            title={this.state.selectedTab}
            onIconClicked={this.onSlideMenuClick.bind(this)}
            onActionSelected={this.onActionSelected}
          />
          <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === '首页'}
              title="首页"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <Image style={styles.icon} source={require('../../img/main/home_nor.png')} />}
              renderSelectedIcon={() => (<Image
                style={styles.icon}
                source={require('../../img/main/home_press.png')}
              />)}
              onPress={() => this.setState({ selectedTab: '首页' })}
            >
              <Home navigator={this.props.navigator} />
            </TabNavigator.Item>

            <TabNavigator.Item
              selected={this.state.selectedTab === 'Application'}
              title="Application"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <Image style={styles.icon} source={require('../../img/main/app_nor.png')} />}
              renderSelectedIcon={() => (<Image
                style={styles.icon}
                source={require('../../img/main/app_press.png')}
              />)}
              onPress={() => this.setState({ selectedTab: 'Application' })}
            >
              <CenterTab navigator={this.props.navigator} />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'search'}
              title="search"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <Image style={styles.icon} source={require('../../img/main/app_nor.png')} />}
              renderSelectedIcon={() => (<Image
                style={styles.icon}
                source={require('../../img/main/app_press.png')}
              />)}
              onPress={() => this.setState({ selectedTab: 'search' })}
            >
              <Search navigator={this.props.navigator} />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === '我的'}
              title="我的"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => (<Image
                style={styles.icon}
                source={require('../../img/main/person_nor.png')}
              />)}
              renderSelectedIcon={() => (<Image
                style={styles.icon}
                source={require('../../img/main/person_press.png')}
              />)}
              onPress={() => this.setState({ selectedTab: '我的' })}
            >
              <Personal navigator={this.props.navigator} />
            </TabNavigator.Item>
          </TabNavigator>
        </View>
      </SideMenu >
    );
  }
}

let styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  container: {
    flex: 1,
    backgroundColor: '#e9eaed'
  },
  tabText: {
    color: '#000000',
    fontSize: 13
  },
  selectedTabText: {
    color: '#999999',
    fontSize: 13
  },
  icon: {
    width: 20,
    height: 20
  }
});

module.exports = Main;
