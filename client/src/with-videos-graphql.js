import { compose, withProps } from 'recompose';

import gql from 'graphql-tag';

import { graphql } from 'react-apollo';

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

const withVideosGraphQL = compose(
  graphql(query),
  withProps(props => {
    const {
      data: { videos = [] }
    } = props;

    return {
      videos
    };
  })
);

export default withVideosGraphQL;
