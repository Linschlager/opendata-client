const { ApolloServer, gql } = require('apollo-server');
const { fetchLocations } = require('./api');

const typeDefs = gql`
    # Used to filter station queries
    enum Type {
      all,
      station,
      poi,
      address
    }
    type Coordinates {
      type: String
      x: Float
      y: Float
    }
    type Location {
      id: String
      name: String
      score: String
      coordinate: Coordinates
      distance: Float
      icon: String
    }
    type Query {
      stations(query: String, type: Type): [Location]
    }
`;

const resolvers = {
  Query: {
    stations: async (root, args) => {
      console.log(args);
      const raw = await fetchLocations(args.query, args.type);
      const result = await raw.json();
      return result.stations;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: false,
  cors: true
});

server.listen(3000);