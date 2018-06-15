module.exports = `
  type Query {
    videos: [Video]!
  }

  type Video {
    name: String!
    title: String!
    source: String!
    duration: String

    speaker: Speaker!
    technologies: [Technology]!
    event: Event!
  }

  type Speaker {
    name: String!
    fullName: String
    image: String
    twitter: String
    github: String
  }

  type Technology {
    name: String!
    title: String!
  }

  type Event {
    name: String!
    title: String!
    website: String
    logo: String
  }
`;
