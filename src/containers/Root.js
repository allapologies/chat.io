'use strict';
import React, { Component, PropTypes } from 'react';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

class Root extends Component {
  static propTypes = {
      store: PropTypes.object.isRequired
  };
  
  render() {
    return (
      <Provider store={ this.props.store }>
        <div>
          <AppContainer />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default Root;