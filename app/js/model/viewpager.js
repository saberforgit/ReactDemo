import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import ViewPager from 'react-native-viewpager';

class ViewPager_N extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      pagers: dataSource.cloneWithPages(this.props.data)
    };
  }

  _renderPage(pager) {
    return (
      <Image
        source={pager.img}
        style={styles.page}
      />
    );
  }

  render() {
    return (
      <ViewPager
        style={styles.viewpager}
        dataSource={this.state.pagers}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true}
      />
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
