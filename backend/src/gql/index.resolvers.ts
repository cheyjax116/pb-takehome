import bookResolver from "./resolvers/book";

const resolvers = {
  Query: {
    ...bookResolver.Query,
  },
  Mutation: {
    ...bookResolver.Mutation,
  },
};

export default resolvers;
