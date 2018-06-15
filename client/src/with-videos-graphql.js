import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loader from './loader';

const query = gql`
  query {
    videos {
      name
      title
      duration
      source

      speaker {
        name
        fullName
        image
      }
      event {
        name
        title
        logo
      }
      technologies {
        name
        title
      }
    }
  }
`;

const withVideosGraphQL = Component => () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <p>Error :(</p>;

      const { videos = [] } = data;

      return <Component videos={videos} />;
    }}
  </Query>
);

export default withVideosGraphQL;
