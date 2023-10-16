/** Types generated for queries found in "src/db/sql/bookByAuthor.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'BookByAuthor' parameters type */
export interface IBookByAuthorParams {
  author?: string | null | void;
}

/** 'BookByAuthor' return type */
export interface IBookByAuthorResult {
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

/** 'BookByAuthor' query type */
export interface IBookByAuthorQuery {
  params: IBookByAuthorParams;
  result: IBookByAuthorResult;
}

const bookByAuthorIR: any = {"usedParamSet":{"author":true},"params":[{"name":"author","required":false,"transform":{"type":"scalar"},"locs":[{"a":57,"b":63}]}],"statement":"SELECT\n    *\nFROM\n    \"book\"\nWHERE\n    \"book\".\"author\" = :author"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *     *
 * FROM
 *     "book"
 * WHERE
 *     "book"."author" = :author
 * ```
 */
export const bookByAuthor = new PreparedQuery<IBookByAuthorParams,IBookByAuthorResult>(bookByAuthorIR);


