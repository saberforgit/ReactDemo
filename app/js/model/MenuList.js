import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  SectionList,
  View,
  TouchableNativeFeedback
} from 'react-native';
var MasonryFirst = require('../main/center/masonry');
class MenuList_N extends Component {

  constructor(props) {
    super(props);
    // 初始状态
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    };
  }

  render() {
    return (
      <ListView
        initialListSize={6}
        contentContainerStyle={styles.list_tab}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
      />
    );
  }

  _renderRow(menu) {
    return (
      <TouchableHighlight underlayColor="white" onPress={this._tabPress.bind(this)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={menu.img} />
            <Text style={styles.text}>
              {menu.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _tabPress() {
    this.props.navigator.push({
      component: MasonryFirst,
    });
  }
};
const styles = StyleSheet.create({
  continers: {
    flex: 1,
  },
  list_hh: {
    flex: 1,
    width: '100%',
  },
  list_tab: {
    marginTop: 5,
    padding: 3,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 85,
    height: 85,
    alignItems: 'center',
  },
  thumb: {
    width: 45,
    height: 45
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
});

module.exports = MenuList_N;