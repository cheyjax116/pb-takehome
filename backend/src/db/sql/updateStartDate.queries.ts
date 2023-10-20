/** Types generated for queries found in "src/db/sql/updateStartDate.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

/** 'UpdateStartDate' parameters type */
export interface IUpdateStartDateParams {
  startDate?: DateOrString | null | void;
  title?: string | null | void;
}

/** 'UpdateStartDate' return type */
export type IUpdateStartDateResult = void;

/** 'UpdateStartDate' query type */
export interface IUpdateStartDateQuery {
  params: IUpdateStartDateParams;
  result: IUpdateStartDateResult;
}

const updateStartDateIR: any = {"usedParamSet":{"startDate":true,"title":true},"params":[{"name":"startDate","required":false,"transform":{"type":"scalar"},"locs":[{"a":40,"b":49}]},{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":103,"b":108}]}],"statement":"UPDATE\n    \"book\"\nSET\n    \"startDate\" = :startDate\nWHERE\n    LOWER(REPLACE(\"book\".\"title\", ' ', '')) = :title"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE
 *     "book"
 * SET
 *     "startDate" = :startDate
 * WHERE
 *     LOWER(REPLACE("book"."title", ' ', '')) = :title
 * ```
 */
export const updateStartDate = new PreparedQuery<IUpdateStartDateParams,IUpdateStartDateResult>(updateStartDateIR);


