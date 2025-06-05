export const typeDefs = `
  type Query {
    hello: String!
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'Hello from Yoga and Express!',
  },
};
