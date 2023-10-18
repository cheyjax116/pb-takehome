/** Types generated for queries found in "src/db/sql/getAllBooks.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAllBooks' parameters type */
export type IGetAllBooksParams = void;

/** 'GetAllBooks' return type */
export interface IGetAllBooksResult {
  author: string;
  completionDate: Date | null;
  coverImage: string;
  id: string;
  notes: string | null;
  pagesRead: number | null;
  startDate: Date;
  title: string;
  totalPages: number;
}

/** 'GetAllBooks' query type */
export interface IGetAllBooksQuery {
  params: IGetAllBooksParams;
  result: IGetAllBooksResult;
}

const getAllBooksIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT\n    *\nFROM\n    book"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *     *
 * FROM
 *     book
 * ```
 */
export const getAllBooks = new PreparedQuery<IGetAllBooksParams,IGetAllBooksResult>(getAllBooksIR);


