import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  Image,
} from 'react-native';
import ViewPager from 'react-native-viewpager';

const imgs = {
  'cards': [
    {
      'img': this.require('../../../img/main/center/bg/8b328bb3ac650a7f0e5b5207c4c0679c.jpg'),
    },
    {
      'img': this.require('../../../img/main/center/bg/9a1583fa83e9ca863efc13f64c91aa7f.jpg'),
    },
    {
      'img': this.require('../../../img/main/center/bg/9cb2d55e6a563d72e84b0304b13722e9.jpg'),
    },
    {
      'img': this.require('../../../img/main/center/bg/9e975419fd18e06e58af25fe2f088769.jpg'),
    },
    {
      'img': this.require('../../../img/main/center/bg/15cff0abcc60b6db36993d9c7c81ff27.jpg'),
    },
    {
      'img': this.require('../../../img/main/center/bg/5404a72869401b3b3f25e8b1.jpg'),
    }
  ]
};
class SectionListTs extends Component {


  constructor(props) {
    super(props);
    // 初始状态
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      imgs: dataSource.cloneWithPages(imgs.cards)
    };
  }


  _renderPage(data) {
    return (
      <Image
        source={data.img}
        style={styles.page}
      />
    );
  }

  _renderItem(info) {
    return info.item.card;
  }
  _sectionComp = info => (<Text
    style={{ height: 30, textAlign: 'center', textAlignVertical: 'center', backgroundColor: 'gray', color: 'white', fontSize: 20 }}
  >{info.section.key}</Text>)

  _extraUniqueKey(item, index) {
    return `index${index}${item}`;
  }
  _renderViewPager() {
    return (<Text>AAAAAAAAAAAAAAAAAA</Text>);
  }

  render() {
    const sections = [];
    const page = (<ViewPager
      style={styles.viewpager}
      dataSource={this.state.imgs}
      renderPage={this._renderPage}
      isLoop={true}
      autoPlay={true}
    />);
    const cards = [];
    cards.push({
      card: page,
    });
    sections.push({ key: 'ViewPager', data: cards });

    return (
      <View style={{ flex: 1 }}>
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          sections={sections}
        />
      </View>
    );
  }
}

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
    backgroundColor: '#e9e9e9',
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
  page: {
    flex: 1,
    height: 200,
  },
  viewpager: {
    flex: 1
  }
});
module.exports = SectionListTs;
