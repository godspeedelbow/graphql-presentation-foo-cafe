const fetch = require("node-fetch");

module.exports = {
  Query: {
    videos: () => get('videos'),
  },
  Video: {
    // name: (video) => video.name,
    // title: (video) => video.title,
    // source: (video) => video.source,
    // duration: (video) => video.duration,
    speaker: (video) => get(`speakers/${video.speaker}`),
    event: (video) => get(`events/${video.event}`),
    technologies: (video) => video.technologies.map(
      technology => get(`technologies/${technology}`)
    )
  },
};

const REST_API_BASE_URL = 'http://localhost:5000';
function get(path) {
  return fetch(`${REST_API_BASE_URL}/${path}`)
    .then(res => res.json());
}
