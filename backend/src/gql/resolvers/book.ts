import { bookService } from "../services/book.service";

const resolvers = {
  Mutation: {
    insertBook: async (parent: any, args: { input: any }, context: any) => {
      const { input } = args;
      const savedBook = bookService.insertBook(input);
      return savedBook;
    },
  },
  Query: {
    // bookByTitle: async (parent, args, context) => {
    //     const {title} = args
    //     const book = bookService.
    // }
  },
};

export default resolvers;
