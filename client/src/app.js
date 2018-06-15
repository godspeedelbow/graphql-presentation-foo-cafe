import React, { Component } from 'react';

import { Grid, Header } from 'semantic-ui-react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import graphql from './graphql';

import VideoList from './video-list';

import withVideosRest from './with-videos-rest';
import withVideosGraphql from './with-videos-graphql';

const GraphQLVideos = withVideosGraphql(VideoList);
const RestVideos = withVideosRest(VideoList);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={graphql}>
        <Router>
          <Grid centered columns={3}>
            <Grid.Column>
              <Menu />
              <Route exact path="/graphql" component={GraphQLVideos} />
              <Route path="/rest" component={RestVideos} />
            </Grid.Column>
          </Grid>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

function Menu() {
  return (
    <Header
      as="h4"
      style={{
        marginTop: 5,
        marginBottom: 30,
        borderBottom: '1px solid #bbb'
      }}
    >
      <Link
        to={'/rest'}
        style={{
          color: '#333',
          fontWeight: '600',
          textDecoration: 'none'
        }}
      >
        REST
      </Link>
      <Link
        to={'/graphql'}
        style={{
          color: '#333',
          fontWeight: '600',
          textDecoration: 'none',
          marginLeft: 10
        }}
      >
        GraphQL
      </Link>
    </Header>
  );
}
