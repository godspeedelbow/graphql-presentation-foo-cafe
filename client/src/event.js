import React from 'react';

import { Header, Image, Card } from 'semantic-ui-react';
import VideoList from './video-list';

import { getEvent, videosByEvent } from './data';

import { PLAYER_WIDTH } from './constants';

const Event = ({ match }) => {
  const name = match.params.name;
  const event = getEvent(name);
  const videos = videosByEvent(name);
  return (
    <div>
      <Header as="h1">
        Videos from <code>{event.title}</code>
      </Header>

      <Card style={{ width: PLAYER_WIDTH }}>
        <Image fluid src={event.logo} alt={event.title} />
        <Card.Content>
          <Card.Header>{event.title}</Card.Header>
          <Card.Description />
        </Card.Content>
      </Card>
      <VideoList videos={videos} />
    </div>
  );
};
export default Event;
