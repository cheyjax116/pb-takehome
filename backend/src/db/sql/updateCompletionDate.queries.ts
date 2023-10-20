/** Types generated for queries found in "src/db/sql/updateCompletionDate.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

/** 'UpdateCompletionDate' parameters type */
export interface IUpdateCompletionDateParams {
  completionDate?: DateOrString | null | void;
  title?: string | null | void;
}

/** 'UpdateCompletionDate' return type */
export type IUpdateCompletionDateResult = void;

/** 'UpdateCompletionDate' query type */
export interface IUpdateCompletionDateQuery {
  params: IUpdateCompletionDateParams;
  result: IUpdateCompletionDateResult;
}

const updateCompletionDateIR: any = {"usedParamSet":{"completionDate":true,"title":true},"params":[{"name":"completionDate","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":59}]},{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":113,"b":118}]}],"statement":"UPDATE\n    \"book\"\nSET\n    \"completionDate\" = :completionDate\nWHERE\n    LOWER(REPLACE(\"book\".\"title\", ' ', '')) = :title"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE
 *     "book"
 * SET
 *     "completionDate" = :completionDate
 * WHERE
 *     LOWER(REPLACE("book"."title", ' ', '')) = :title
 * ```
 */
export const updateCompletionDate = new PreparedQuery<IUpdateCompletionDateParams,IUpdateCompletionDateResult>(updateCompletionDateIR);


