const publicIp = require('public-ip');
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");

// 1. Define schema
const typeDefs = `
  type Query {
    ip: String!
  }
`;

const resolvers = {
  Query: {
    ip: () => publicIp.v4(),
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


// 2. Start server
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5001, function() {
  const host = "http://localhost:5001/graphql";
  console.log(`
  Running a GraphQL API server at ${host}.

  Why don't you try this?
  curl \\
    -X POST \\
    -H "Content-Type: application/json" \\
    --data '{ "query": "{ ip }" }' ${host}
  `);
});
