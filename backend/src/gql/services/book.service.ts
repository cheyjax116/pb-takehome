import { client } from "../../db/connection";
import { head } from "lodash";
import { GraphQLError } from "graphql";
import { insertBook, IInsertBookParams } from "../../db/sql/insertBook.queries";

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
};
