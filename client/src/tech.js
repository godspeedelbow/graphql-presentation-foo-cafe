import React from 'react';
import VideoList from './video-list';

import { Header } from 'semantic-ui-react';

import { getTech, videosByTech } from './data';

const Tech = ({ match }) => {
  const name = match.params.name;
  const tech = getTech(name);
  const videos = videosByTech(name);

  return (
    <div>
      <Header as="h1">
        Videos about <code>{tech.title}</code>
      </Header>
      <VideoList videos={videos} />
    </div>
  );
};

export default Tech;
