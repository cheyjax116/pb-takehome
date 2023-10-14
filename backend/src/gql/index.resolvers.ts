import bookResolver from "./resolvers/book";

const resolvers = {
  Mutation: {
    ...bookResolver.Mutation,
  },

  Query: {},
};

export default resolvers;
