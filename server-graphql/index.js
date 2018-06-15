const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const typeDefs = require('./types');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = 5000;

app.listen(PORT, function() {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
});
