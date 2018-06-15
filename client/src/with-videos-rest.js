import { compose, withState, lifecycle } from 'recompose';

const withVideosRest = compose(
  withState('videos', 'setVideos', []),
  lifecycle({
    async componentDidMount() {
      const videos = await get('videos');

      const populatedVideoPromises = videos.map(async video => {
        const [speaker, event, ...technologies] = await Promise.all([
          get(`speakers/${video.speaker}`),
          get(`events/${video.event}`),
          ...video.technologies.map(technology =>
            get(`technologies/${technology}`)
          )
        ]);

        return {
          ...video,
          speaker,
          event,
          technologies
        };
      });

      const populatedVideos = await Promise.all(populatedVideoPromises);

      this.props.setVideos(populatedVideos);
    }
  })
);

export default withVideosRest;

const REST_API_BASE_URL = '//localhost:4000';
function get(path) {
  return fetch(`${REST_API_BASE_URL}/${path}`).then(res => res.json());
}
