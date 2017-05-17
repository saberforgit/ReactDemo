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
import ViewPager from 'react-native-viewpager';
class ViewPager_N extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      pagers: dataSource.cloneWithPages(this.props.data)
    };
  }

  render() {
    return (
      <ViewPager
        style={styles.viewpager}
        dataSource={this.state.pagers}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true} />
    );
  }

  _renderPage(pager) {
    return (
      <Image
        source={pager.img}
        style={styles.page} />
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: 200,
  },
  viewpager: {
    flex: 1
  }
});

module.exports = ViewPager_N;