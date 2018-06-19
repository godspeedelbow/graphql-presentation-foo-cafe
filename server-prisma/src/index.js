const { Prisma } = require('prisma-binding')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
  secret: process.env.PRISMA_SECRET, // dirty
  // debug: true, // log all GraphQL queries & mutations sent to the Prisma API
})

db.query.videos(null, '{ name }').then(console.log);

// const { GraphQLServer } = require('graphql-yoga')
// const resolvers = {
//   Query: {
//     videos(parent, args, ctx, info) {
//       return ctx.db.query.videos(null, info)
//     },
//   },
// }

// const server = new GraphQLServer({
//   typeDefs: './src/schema.graphql',
//   resolvers,
//   context: req => ({ ...req, db }),
// })

// server.start({
//     endpoint: '/graphql',
//   },
//   () => console.log('Server is running on http://localhost:4000/graphql')
// );
