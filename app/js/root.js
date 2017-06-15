import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configStore';
import App from './app';

class Root extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => {
        console.info('App loaded..');
        this.setState = { isLoading: false };
      })
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
module.exports  = Root;
