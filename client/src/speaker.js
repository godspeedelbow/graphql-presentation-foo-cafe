import React from 'react';
import { compose, withProps } from 'recompose';

import gql from 'graphql-tag';

import { graphql } from 'react-apollo';
import { fragment } from './video';

import { Header, Image, Card } from 'semantic-ui-react';
import VideoList from './video-list';

import { PLAYER_WIDTH } from './constants';

const Speaker = props => {
  const {
    data: { speaker = {} }
  } = props;

  return (
    <div>
      <Header as="h1">
        Videos by <code>{speaker.fullName}</code>
      </Header>

      <Card style={{ width: PLAYER_WIDTH }}>
        <Image fluid src={speaker.image} alt={speaker.fullName} />
        <Card.Content>
          <Card.Header>{speaker.fullName}</Card.Header>
          <Card.Description>
            <a href={speaker.twitter}>twitter</a>
            <br />
            <a href={speaker.github}>github</a>
          </Card.Description>
        </Card.Content>
      </Card>
      <VideoList videos={speaker.videos} />
    </div>
  );
};

// TODO: fix this, copy pasted from home.js...
const query = gql`
  query {
    speaker(name: "lee-byron") {
      ...VideoEntry
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
  ${fragment}
`;

const SpeakerContainer = graphql(query)(Speaker);

export default SpeakerContainer;

function getSpeaker(props) {
  return props.match.params.name;
}
