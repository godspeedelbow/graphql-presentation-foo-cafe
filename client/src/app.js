import React, { Component } from 'react';

import { HashRouter as Router } from 'react-router-dom';

import Home from './home';

import { ApolloProvider } from 'react-apollo';
import graphql from './lib/graphql';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={graphql}>
        <Router>
          <Home />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
