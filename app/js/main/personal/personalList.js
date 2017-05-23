/**
 * Created by wangxf on 2017/5/8.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
} from 'react-native';

const ProgressBar = require('../../model/ProgressBar');
const IconItem = require('../../model/item_icon');

class PersonalList extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      dataSource:this.props.data
    });
  }

  render() {
    if (!this.state.dataSource) {
      return <ProgressBar />;
    } else {
      const ls = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      return (<View style={personalList.container}>
        <ListView
          dataSource={ls.cloneWithRows(this.state.dataSource)}
          renderRow={(item) => (<IconItem text={item.title} img_uri={item.img} />)}
        />
      </View>);
    }
  }
}

const personalList = StyleSheet.create({
  container: {
    flex: 1,
  },
});
module.exports = PersonalList;
