const { ApolloServer, gql } = require('apollo-server-micro');
const { fetchLocations } = require('./api');

const typeDefs = gql`
  type Coordinates {
    type: String
    x: Int
    y: Int
  }
  type Location {
    id: String
    name: String
    score: String
    coordinate: Coordinates
    distance: Int
    icon: String
  }
  type Query {
    stations: [Location]
  }
`;

const resolvers = {
  Query: {
    stations: async (root, args, context) => {
      const raw = await fetchLocations('Basel', 'ALL');
      const result = await raw.json();
      console.log(result);
      return result.stations;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server.createHandler();