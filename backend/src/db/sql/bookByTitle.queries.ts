/** Types generated for queries found in "src/db/sql/bookByTitle.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'BookByTitle' parameters type */
export interface IBookByTitleParams {
  title?: string | null | void;
}

/** 'BookByTitle' return type */
export interface IBookByTitleResult {
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

/** 'BookByTitle' query type */
export interface IBookByTitleQuery {
  params: IBookByTitleParams;
  result: IBookByTitleResult;
}

const bookByTitleIR: any = {"usedParamSet":{"title":true},"params":[{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":81,"b":86}]}],"statement":"SELECT\n    *\nFROM\n    \"book\"\nWHERE\n    LOWER(REPLACE(\"book\".\"title\", ' ', '')) = :title"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *     *
 * FROM
 *     "book"
 * WHERE
 *     LOWER(REPLACE("book"."title", ' ', '')) = :title
 * ```
 */
export const bookByTitle = new PreparedQuery<IBookByTitleParams,IBookByTitleResult>(bookByTitleIR);


