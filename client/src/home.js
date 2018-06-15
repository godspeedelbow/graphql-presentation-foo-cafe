import React, { Fragment } from 'react';

import { Header } from 'semantic-ui-react';
import VideoList from './video-list';

import withVideosRest from './with-videos-rest';
import withVideosGraphql from './with-videos-graphql';

const GraphQLVideos = withVideosGraphql(VideoList);
const RestVideos = withVideosRest(VideoList);

const Home = props => {
  return (
    <Fragment>
      <div
        style={{
          width: '50%',
          backgroundColor: 'yellow',
          float: 'left'
        }}
      >
        <Header as="h1">REST</Header>
        <RestVideos />
      </div>
      <div
        style={{
          width: '50%',
          backgroundColor: 'lawngreen',
          float: 'right'
        }}
      >
        <Header as="h1">GraphQL</Header>
        <GraphQLVideos />
      </div>
    </Fragment>
  );
};

export default Home;
