import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  CellView,
  ListView,
  SectionList,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const Http = require('../../utils/http');

class SearchPager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          "key": "功能列表",
          "data": [[
            {
              'img': require('../../../img/main/center/icon/1108187.png'),
              'title': '语音控制'
            },
            {
              'img': require('../../../img/main/center/icon/1110055.png'),
              'title': '个人信息'
            },
            {
              'img': require('../../../img/main/center/icon/1126308.png'),
              'title': '电话管理'
            },
            {
              'img': require('../../../img/main/center/icon/1126309.png'),
              'title': '语音输入'
            },
            {
              'img': require('../../../img/main/center/icon/1180648.png'),
              'title': '水滴显示'
            },
            {
              'img': require('../../../img/main/center/icon/1185229.png'),
              'title': '通讯录'
            }
          ]]
        },
        {
          "key": "飞行控制中心",
          "data": [[
            {
              'img': require('../../../img/main/center/icon/1108187.png'),
              'title': '语音控制'
            },
            {
              'img': require('../../../img/main/center/icon/1110055.png'),
              'title': '个人信息'
            },
            {
              'img': require('../../../img/main/center/icon/1126308.png'),
              'title': '电话管理'
            },
            {
              'img': require('../../../img/main/center/icon/1126309.png'),
              'title': '语音输入'
            },
            {
              'img': require('../../../img/main/center/icon/1180648.png'),
              'title': '水滴显示'
            },
            {
              'img': require('../../../img/main/center/icon/1185229.png'),
              'title': '通讯录'
            }
          ]]
        },
        {
          "key": "泡泡跑",
          "data": [[
            {
              'img': require('../../../img/main/center/icon/1108187.png'),
              'title': '语音控制'
            },
            {
              'img': require('../../../img/main/center/icon/1110055.png'),
              'title': '个人信息'
            },
            {
              'img': require('../../../img/main/center/icon/1126308.png'),
              'title': '电话管理'
            },
            {
              'img': require('../../../img/main/center/icon/1126309.png'),
              'title': '语音输入'
            },
            {
              'img': require('../../../img/main/center/icon/1180648.png'),
              'title': '水滴显示'
            },
            {
              'img': require('../../../img/main/center/icon/1185229.png'),
              'title': '通讯录'
            }
          ]]
        },
        {
          "key": "财富中心",
          "data": [[
            {
              'img': require('../../../img/main/center/icon/1108187.png'),
              'title': '语音控制'
            },
            {
              'img': require('../../../img/main/center/icon/1110055.png'),
              'title': '个人信息'
            },
            {
              'img': require('../../../img/main/center/icon/1126308.png'),
              'title': '电话管理'
            },
            {
              'img': require('../../../img/main/center/icon/1126309.png'),
              'title': '语音输入'
            },
            {
              'img': require('../../../img/main/center/icon/1180648.png'),
              'title': '水滴显示'
            },
            {
              'img': require('../../../img/main/center/icon/1185229.png'),
              'title': '通讯录'
            }
          ]]
        }
      ]
    }
  }

  _renderRow(card) {
    return (
      <TouchableHighlight underlayColor="white">
        <View>
          <View style={styles.row}>
            <Image style={styles.row_img} source={card.img} />
            <Text style={styles.text}>
              {card.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _renderItem = (section) => (
    <ListView
      initialListSize={6}
      contentContainerStyle={styles.list}
      dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(section.item)}
      renderRow={this._renderRow.bind(this)}
    />
  );

  _renderSectionHeader = ({ section }) => (
    <View style={{ flex: 1, height: 25 }}>
      <Text style={styles.sectionHeader} >{section.key}</Text>
    </View>
  );
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          // keyExtractor={this._extraUniqueKey}
          sections={this.state.sections}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  row: {
    justifyContent: 'center',
    width: 90,
    height: 90,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  row_img: {
    width: 50,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    marginLeft: 10,
    padding: 6.5,
    fontSize: 12,
    color: '#787878'
  },
  remark: {
    margin: 10,
    fontSize: 10,
    color: '#D2D2D2',
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {
    flex: 1,
    marginTop: 2,
    fontWeight: 'bold'
  },
});
module.exports = SearchPager;