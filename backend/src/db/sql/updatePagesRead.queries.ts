/** Types generated for queries found in "src/db/sql/updatePagesRead.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'UpdatePagesRead' parameters type */
export interface IUpdatePagesReadParams {
  pagesRead?: number | null | void;
  title?: string | null | void;
}

/** 'UpdatePagesRead' return type */
export type IUpdatePagesReadResult = void;

/** 'UpdatePagesRead' query type */
export interface IUpdatePagesReadQuery {
  params: IUpdatePagesReadParams;
  result: IUpdatePagesReadResult;
}

const updatePagesReadIR: any = {"usedParamSet":{"pagesRead":true,"title":true},"params":[{"name":"pagesRead","required":false,"transform":{"type":"scalar"},"locs":[{"a":40,"b":49}]},{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":103,"b":108}]}],"statement":"UPDATE\n    \"book\"\nSET\n    \"pagesRead\" = :pagesRead\nWHERE\n    LOWER(REPLACE(\"book\".\"title\", ' ', '')) = :title"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE
 *     "book"
 * SET
 *     "pagesRead" = :pagesRead
 * WHERE
 *     LOWER(REPLACE("book"."title", ' ', '')) = :title
 * ```
 */
export const updatePagesRead = new PreparedQuery<IUpdatePagesReadParams,IUpdatePagesReadResult>(updatePagesReadIR);


