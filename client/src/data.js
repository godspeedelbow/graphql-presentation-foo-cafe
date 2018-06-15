import groupBy from 'lodash/groupBy';

const tech = {
  'immutable-js': { name: 'immutable-js', title: 'ImmutableJS' },
  redux: { name: 'redux', title: 'Redux' },
  relay: { name: 'relay', title: 'Relay' },
  graphql: { name: 'graphql', title: 'GraphQL' },
  react: { name: 'react', title: 'React' }
};

export const events = {
  'render-2016': {
    name: 'render-2016',
    title: 'Render 2016',
    website: 'http://2016.render-conf.com/',
    logo: 'http://2016.render-conf.com/img/Render_logo_Colour.png'
  },
  'react-europe-2015': {
    name: 'react-europe-2015',
    title: 'React Europe 2015',
    website: 'https://2015.react-europe.org/',
    logo: 'https://2015.react-europe.org/images/reacteurope.png'
  },
  'react-europe-2016': {
    name: 'react-europe-2016',
    title: 'React Europe 2016',
    website: 'https://2016.react-europe.org/',
    logo: 'https://2016.react-europe.org/images/reacteurope%20.png'
  },
  'react-europe-2017': {
    name: 'react-europe-2017',
    title: 'React Europe 2017',
    website: 'https://2017.react-europe.org/',
    logo: 'https://www.react-europe.org/images/reacteurope.png'
  }
};

export const speakers = {
  'lee-byron': {
    name: 'lee-byron',
    fullName: 'Lee Byron',
    image:
      'https://pbs.twimg.com/profile_images/826651806696501248/TOro78hz_400x400.jpg',
    twitter: 'https://twitter.com/leeb',
    github: 'https://github.com/leeb'
  },
  'dan-abramov': {
    name: 'dan-abramov',
    fullName: 'Dan Abramov',
    image:
      'https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp_400x400.jpg',
    twitter: 'https://twitter.com/dan_abramov',
    github: 'https://github.com/gaearon'
  }
};

export const videos = [
  {
    name: 'lee-byron-relay-modern',
    speaker: 'lee-byron',
    title: 'Relay Modern',
    date: new Date('24 May, 2017'),
    event: 'react-europe-2017',
    source: {
      origin: 'youtube',
      id: 'OdsMz7h_Li0',
      url: 'https://www.youtube.com/watch?v=OdsMz7h_Li0'
    },
    duration: '27:32',
    tech: ['relay', 'graphql', 'react']
  },
  {
    name: 'dan-abramov-the-redux-journey',
    speaker: 'dan-abramov',
    title: 'The Redux Journey',
    date: new Date('Jun 4, 2016'),
    event: 'react-europe-2016',
    source: {
      origin: 'youtube',
      id: 'uvAXVMwHJXU',
      url: 'https://www.youtube.com/watch?v=uvAXVMwHJXU'
    },
    duration: '25:56',
    tech: ['redux', 'react']
  },
  {
    name: 'lee-byron-immutable-user-interfaces',
    speaker: 'lee-byron',
    title: 'Immutable User Interfaces',
    description:
      'One of the greatest challenges of building a rich UI is keeping track of all that is changing: incoming touch and mouse events, new data from your servers, animations, and more. Here we propose a new way to tackle this challenge that is as old as computing itself: don’t let anything change in the first place.\nCome learn about how to build rich and highly performant UIs without losing your sanity by leveraging immutable data and the optimization techniques it enables.',
    date: new Date('22 April, 2016'),
    event: 'render-2016',
    source: {
      origin: 'vimeo',
      id: '166790294',
      url: 'https://vimeo.com/166790294'
    },
    duration: '29:34',
    tech: ['immutable-js', 'react']
  },
  {
    name: 'dan-abramov-live-react-hot-reloading-with-time-travel',
    speaker: 'dan-abramov',
    title: 'Live React: Hot Reloading with Time Travel',
    date: new Date('Jul 5, 2015'),
    event: 'react-europe-2015',
    source: {
      origin: 'youtube',
      id: 'xsSnOQynTHs',
      url: 'https://www.youtube.com/watch?v=xsSnOQynTHs'
    },
    duration: '30:40',
    tech: ['redux', 'react']
  }
];

const bySpeaker = groupBy(videos, 'speaker');
const byEvent = groupBy(videos, 'event');
const byTech = videos.reduce(
  (agg, video) => ({
    ...agg,
    ...video.tech.reduce(
      (_agg, tech) => ({
        ..._agg,
        [tech]: [...(agg[tech] || []), video]
      }),
      {}
    )
  }),
  {}
);

export const getSpeaker = name => speakers[name];
export const getEvent = name => events[name];
export const getTech = name => tech[name];
export const videosBySpeaker = speaker => bySpeaker[speaker];
export const videosByEvent = event => byEvent[event];
export const videosByTech = tech => byTech[tech];
