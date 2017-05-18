import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableNativeFeedback
} from 'react-native';

class SingerDetails extends Component {

  constructor(props) {
    super(props);
    const movieCastList = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => {
        oldRow !== newRow;
      }
    });
    this.state = {
      dataSource: movieCastList.cloneWithRows(require('../../../data/movies.json').movies),
    };
  }

  /**
   * 渲染行
   * @private
   */
  _renderRow(movie) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={singer.row}>
          <Image style={singer.row_img} source={{ uri: movie.posters.thumbnail }}>
            <View style={singer.text_area}>
              <Text style={singer.right_bottom_text}>{movie.title}</Text>
              <Text style={singer.right_bottom_text}>{movie.year}</Text>
            </View>
          </Image>
        </View>
      </TouchableNativeFeedback>
    );
  }

  /**
   * 渲染头部
   * @private
   */
  _renderHeader() {
    <View style={singer.renderHeader}>
      <Text>My movies list!!!</Text>
    </View>;
  }

  /**
   * 渲染分割线
   * @private
   */
  _renderSeparator(sectionId, rowId) {
    <View
      style={singer.separator}
      key={sectionId + rowId}
    />;
  }

  render() {
    return (
      <ListView
        style={singer.listView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderSeparator={this._renderSeparator}
        initialListSize={10}
      />
    );
  }
}
const singer = StyleSheet.create({
  listView: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#F5FCFF'
  },
  renderHeader: {
    height: 40,
  },
  row: {
    flexDirection: 'row',
    margin: 2,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  row_img: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    borderRadius: 10,
  },
  text_area: {
    justifyContent: 'center',
    padding: 25,
  },
  right_bottom_text: {
    textAlign: 'center',
    color: 'white'
  },
  separator: {
    height: 1,
    backgroundColor: '#000'
  }
});
module.exports = SingerDetails;
