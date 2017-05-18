/**
 * Created by wangxf on 2017/5/10.
 */
import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

const ProgressBar = () => (
  <View style={progressbar.container}>
    <ActivityIndicator size="large" />
  </View>
);

const progressbar = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  progress: {}
});
module.exports = ProgressBar;
