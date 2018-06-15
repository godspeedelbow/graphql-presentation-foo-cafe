import React from 'react';
import Video from './video';

const VideoList = ({ videos }) =>
  videos.map(video => <Video key={video.name} video={video} />);

export default VideoList;
