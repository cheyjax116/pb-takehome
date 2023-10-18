import { bookService } from "../services/book.service";

const resolvers = {
  Mutation: {
    insertBook: async (parent, args, context) => {
      const { input } = args;
      const savedBook = bookService.insertBook(input);
      return savedBook;
    },
    updateBookInfo: async (parent, args, context) => {
      const { title, edits } = args;
      const pagesRead = args.edits.pagesRead;
      const notes = args.edits.notes;
      const startDate = args.edits.startDate;
      const completionDate = args.edits.completionDate;

      if (pagesRead || pagesRead === 0) {
        bookService.updatePagesRead({
          title,
          pagesRead,
        });
      }

      if (notes || notes === "") {
        bookService.updateBookNotes({
          title,
          notes,
        });
      }

      if (startDate) {
        bookService.updateStartDate({
          title,
          startDate,
        });
      }

      if (completionDate) {
        bookService.updateCompletionDate({
          title,
          completionDate,
        });
      }

      const updatedBookInformation = bookService.bookByTitle({
        title,
      });
      return updatedBookInformation;
    },
  },
  Query: {
    bookByTitle: async (parent, args, context) => {
      const { title } = args;
      return await bookService.bookByTitle({
        title,
      });
    },

    getAllBooks: async (parent, args, context) => {
      return await bookService.getAllBooks();
    },
  },
};

export default resolvers;
