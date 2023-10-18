import { client } from "../../db/connection";
import { head, update } from "lodash";
import { GraphQLError } from "graphql";
import { insertBook, IInsertBookParams } from "../../db/sql/insertBook.queries";
import {
  getAllBooks,
  IGetAllBooksParams,
} from "../../db/sql/getAllBooks.queries";
import {
  bookByTitle,
  IBookByTitleParams,
} from "../../db/sql/bookByTitle.queries";
import {
  updatePagesRead,
  IUpdatePagesReadParams,
} from "../../db/sql/updatePagesRead.queries";

import {
  updateBookNotes,
  IUpdateBookNotesParams,
} from "../../db/sql/updateBookNotes.queries";

import {
  updateCompletionDate,
  IUpdateCompletionDateParams,
} from "../../db/sql/updateCompletionDate.queries";
import {
  updateStartDate,
  IUpdateStartDateParams,
} from "../../db/sql/updateStartDate.queries";

export const bookService = {
  insertBook: async (params: IInsertBookParams) => {
    const book = head(await insertBook.run(params, client));
    if (!book) {
      console.log("Unable to insert book");
      throw new GraphQLError("book unable to insert", {
        extensions: {
          code: "Book Failed to Insert",
          http: { status: 401 },
        },
      });
    }
    return book;
  },

  getAllBooks: async (params: IGetAllBooksParams) => {
    const allBooks = await getAllBooks.run(params, client);
    return allBooks;
  },
  bookByTitle: async (params: IBookByTitleParams) => {
    const validTitle = head(await bookByTitle.run(params, client));
    return validTitle;
  },
  updatePagesRead: async (params: IUpdatePagesReadParams) => {
    const updatedPages = head(await updatePagesRead.run(params, client));
    return updatedPages;
  },
  updateBookNotes: async (params: IUpdateBookNotesParams) => {
    const updatedNotes = head(await updateBookNotes.run(params, client));
    return updatedNotes;
  },
  updateStartDate: async (params: IUpdateStartDateParams) => {
    const updatedStartDate = head(await updateStartDate.run(params, client));
    return updatedStartDate;
  },
  updateCompletionDate: async (params: IUpdateCompletionDateParams) => {
    const updatedCompletionDate = head(
      await updateCompletionDate.run(params, client)
    );
    return updatedCompletionDate;
  },
};
