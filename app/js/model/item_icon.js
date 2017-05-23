/**
 * Created by wangxf on 2017/5/23.
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

class IconItem extends Component {

  render() {
    return (
      <View style={item.container}>
        <View style={item.item_header_view}>
          <Image style={item.item_header_img} source={{ uri: this.props.img_uri }} />
        </View>
        <View style={item.item_text_view}>
          <Text style={item.item_text}>{this.props.text}</Text>
        </View>
        <View style={item.item_img_view}>
          <Image source={require('../../img/model/right_ios.png')} style={item.item_img} />
        </View>
      </View>
    );
  }

}

const item = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    marginTop: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  item_header_view: {
    width: '20%',
    alignItems: 'center'
  },
  item_header_img: {
    marginLeft: 5,
    height: 45,
    width: 45,
  },
  item_text_view: {
    width: '60%'
  },
  item_text: {
    marginLeft: 5
  },
  item_img_view: {
    width: '20%',
    alignItems: 'center'
  },
  item_img: {
    height: 30,
    width: 30,
    opacity: 0.7
  }
});
module.exports = IconItem;
