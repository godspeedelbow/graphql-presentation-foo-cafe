
const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
  secret: process.env.PRISMA_SECRET, // dirty secret
  debug: true, // log all GraphQL queries & mutations sent to the Prisma API
})

const resolvers = {
  Query: {
    videos(parent, args, ctx, info) {
      return ctx.db.query.videos(null, info)
    },
  },
  Mutation: {
    async signup(parent, args, ctx, info) {
      const password = await bcrypt.hash(args.password, 10)
      const user = await ctx.db.mutation.createUser({
        data: { ...args, password },
      })

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user,
      }
    },

    async login(parent, { email, password }, ctx, info) {
      const user = await ctx.db.query.user({ where: { email } })
      if (!user) {
        throw new Error(`No such user found for email: ${email}`)
      }

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        throw new Error('Invalid password')
      }

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user,
      }
    },
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema-auth.graphql',
  resolvers,
  context: req => ({ ...req, db }),
})

server.start({
    endpoint: '/graphql',
  },
  () => console.log('Server is running on http://localhost:4000/graphql')
);

