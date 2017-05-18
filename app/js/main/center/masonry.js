/**
 * Created by wangxf on 2017/5/8.
 */
// @flow
import React, { Component } from 'react';
import {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const tabDatas = {
  'cards': [
    {
      'img': require('../../../img/main/center/bg/8b328bb3ac650a7f0e5b5207c4c0679c.jpg'),
    },
    {
      'img': require('../../../img/main/center/bg/9a1583fa83e9ca863efc13f64c91aa7f.jpg'),
    },
    {
      'img': require('../../../img/main/center/bg/9cb2d55e6a563d72e84b0304b13722e9.jpg'),
    },
    {
      'img': require('../../../img/main/center/bg/9e975419fd18e06e58af25fe2f088769.jpg'),
    },
    {
      'img': require('../../../img/main/center/bg/15cff0abcc60b6db36993d9c7c81ff27.jpg'),
    },
    {
      'img': require('../../../img/main/center/bg/5404a72869401b3b3f25e8b1.jpg'),
    }
  ]
};

class MasonryFirst extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(tabDatas.cards)
    };
  }

  _renderHeader() {
    return (
      <View>
        <Text style={styles.list_header_text}>瀑布流</Text>
      </View>
    );
  }

  _renderRow(card) {
    return (
      <TouchableHighlight underlayColor="white">
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={card.img} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        initialListSize={2}
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSectionHeader={this._renderHeader}
        stickySectionHeadersEnabled={true}
      />
    );
  }

}


const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    padding: 3,
    backgroundColor: '#e9e9e9',
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    margin: 2,
    alignItems: 'center',
  },
  thumb: {
    flex: 1
  },
  list_header_text: {
    textAlign: 'center'
  }
});
module.exports = MasonryFirst;
