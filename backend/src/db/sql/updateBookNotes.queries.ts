/** Types generated for queries found in "src/db/sql/updateBookNotes.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'UpdateBookNotes' parameters type */
export interface IUpdateBookNotesParams {
  notes?: string | null | void;
  title?: string | null | void;
}

/** 'UpdateBookNotes' return type */
export type IUpdateBookNotesResult = void;

/** 'UpdateBookNotes' query type */
export interface IUpdateBookNotesQuery {
  params: IUpdateBookNotesParams;
  result: IUpdateBookNotesResult;
}

const updateBookNotesIR: any = {"usedParamSet":{"notes":true,"title":true},"params":[{"name":"notes","required":false,"transform":{"type":"scalar"},"locs":[{"a":36,"b":41}]},{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":95,"b":100}]}],"statement":"UPDATE\n    \"book\"\nSET\n    \"notes\" = :notes\nWHERE\n    LOWER(REPLACE(\"book\".\"title\", ' ', '')) = :title"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE
 *     "book"
 * SET
 *     "notes" = :notes
 * WHERE
 *     LOWER(REPLACE("book"."title", ' ', '')) = :title
 * ```
 */
export const updateBookNotes = new PreparedQuery<IUpdateBookNotesParams,IUpdateBookNotesResult>(updateBookNotesIR);


