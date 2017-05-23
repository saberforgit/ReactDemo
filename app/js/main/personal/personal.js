/**
 * Created by wangxf on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ToastAndroid,
    TouchableOpacity,
    Alert,
    Text
} from 'react-native';

import Camera from './Camera';

class Personal extends Component {

  constructor(props) {
    super(props);
    this.takePhoto = this.takePhoto.bind(this);
    this.state = {
      header_img: null
    };
  }

  takePhoto() {
    const self = this;
    this.props.navigator.push({
      component: Camera,
      passProps: {
        getPhoto(image) {
          self.setState({
            header_img: image.path
          });
        },
      }
    });
  }

  render() {
    return (
      <View style={personal.container}>
        <TouchableOpacity style={personal.header} onPress={this.takePhoto}>
          <Image style={personal.header_img} source={{ uri: this.state.header_img }} />
          <Text style={personal.header_name}>wangxf</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const personal = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_img: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 25
  },
  header_name: {
    margin: 5,
    textAlign: 'center',
  }
});
module.exports = Personal;
