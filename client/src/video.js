import React from 'react';

import ReactPlayer from 'react-player';
import { Card, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { PLAYER_WIDTH, PLAYER_HEIGHT } from './constants';

import gql from 'graphql-tag';

const Video = ({ video }) => {
  return (
    <Card style={{ width: PLAYER_WIDTH }} key={video.name}>
      <ReactPlayer
        width={PLAYER_WIDTH}
        height={PLAYER_HEIGHT}
        controls
        url={video.source}
      />
      <Card.Content>
        <Card.Header>
          {video.title}{' '}
          <small
            style={{
              color: '#999',
              fontWeight: 'normal',
              borderBottom: '1px dotted'
            }}
          >
            {video.duration}
          </small>
        </Card.Header>
        <Card.Meta>{prettyDate(video.date || new Date())}</Card.Meta>
        <Card.Description>
          <p>
            <Link to={`/speaker/${video.speaker.name}`} key="speaker">
              <Label as="span" style={{ marginLeft: 3 }} image>
                <img src={video.speaker.image} alt={video.speaker.fullName} />
                {video.speaker.fullName}
              </Label>
            </Link>
            <Link to={`/event/${video.event.name}`} key="event">
              <Label as="span" style={{ marginLeft: 3 }} image>
                {video.event.logo && (
                  <img src={video.event.logo} alt={video.event.title} />
                )}
                {video.event.title}
              </Label>
            </Link>
          </p>
          <p>
            {video.technologies.map(tech => (
              <Link to={`/tech/${tech.name}`} key={tech.name}>
                <Label as="span" style={{ marginLeft: 3 }}>
                  {tech.title}
                </Label>
              </Link>
            ))}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          10 views
        </a>
      </Card.Content>
    </Card>
  );
};

export default Video;

export const fragment = gql`
  fragment VideoEntry on video {
    name
    title
    duration
    source
    speaker {
      name
      fullName
      image
    }
  }
`;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function prettyDate(_date) {
  const date = new Date(_date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${months[month]} ${day}, ${year}`;
}
