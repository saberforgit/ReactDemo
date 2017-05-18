/**
 * Created by wangxf on 2017/5/8.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableNativeFeedback
} from 'react-native';

import SingerDetails from '../main/home/singerDetails';

class HomeListView extends Component {
  constructor(props) {
    super(props);
    const moviesDataLv = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => {
        oldRow !== newRow;
      }
    });
    this.state = {
      dataSource: moviesDataLv.cloneWithRows(this.props.sourceData)
    };
  }

  _jumpToDetails(movie) {
    this.props.navigator.push({
      component: SingerDetails,
      passProps: {
        movie
      },
    });
  }


  /**
   * 渲染行
   * @private
   */
  _renderRow(movie) {
    return (
      <TouchableNativeFeedback
        onPress={this._jumpToDetails.bind(this, movie)}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={homeListView.row}>
          <Image
            source={{ uri: movie.posters.thumbnail }}
            style={homeListView.thumbnail}
          />
          <View style={homeListView.text_area}>
            <Text >{movie.title}</Text>
            <Text style={homeListView.right_bottom_text}>{movie.year}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  /**
   * 渲染头部
   * @private
   */
  _renderHeader() {
    return (
      <View>
        <Text style={homeListView.title}>My movies list!!!</Text>
      </View>
    );
  }

  /**
   * 渲染分割线
   * @private
   */
  _renderSeparator(sectionId, rowId) {
    return (
      <View
        style={homeListView.separator}
      />
    );
  }

  render() {
    return (
      <ListView
        style={homeListView.listView}
        dataSource={this.state.dataSource}
        // renderSectionHeader={this._renderHeader}
        renderRow={this._renderRow.bind(this)}
        // stickySectionHeadersEnabled={true}
        // renderHeader={this._renderHeader}
        // renderSeparator={this._renderSeparator}
        initialListSize={8}
      />
    );
  }
}

const homeListView = StyleSheet.create({
  listView: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#F5FCFF'
  },
  row: {
    flexDirection: 'row',
    margin: 2,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  text_area: {
    flex: 1,
    padding: 5,
  },
  right_bottom_text: {
    textAlign: 'right'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#000'
  }
});
module.exports = HomeListView;
