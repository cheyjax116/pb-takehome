/** Types generated for queries found in "src/db/sql/insertBook.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'InsertBook' parameters type */
export interface IInsertBookParams {
  author?: string | null | void;
  coverImage?: string | null | void;
  title?: string | null | void;
  totalPages?: number | null | void;
}

/** 'InsertBook' return type */
export interface IInsertBookResult {
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

/** 'InsertBook' query type */
export interface IInsertBookQuery {
  params: IInsertBookParams;
  result: IInsertBookResult;
}

const insertBookIR: any = {"usedParamSet":{"title":true,"author":true,"coverImage":true,"totalPages":true},"params":[{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":151,"b":156}]},{"name":"author","required":false,"transform":{"type":"scalar"},"locs":[{"a":167,"b":173}]},{"name":"coverImage","required":false,"transform":{"type":"scalar"},"locs":[{"a":184,"b":194}]},{"name":"totalPages","required":false,"transform":{"type":"scalar"},"locs":[{"a":205,"b":215}]}],"statement":"INSERT INTO\n    \"book\" (\n        \"title\",\n        \"author\",\n        \"coverImage\",\n        \"totalPages\",\n        \"pagesRead\"\n    )\nVALUES\n    (\n        :title,\n        :author,\n        :coverImage,\n        :totalPages,\n        0\n    ) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "book" (
 *         "title",
 *         "author",
 *         "coverImage",
 *         "totalPages",
 *         "pagesRead"
 *     )
 * VALUES
 *     (
 *         :title,
 *         :author,
 *         :coverImage,
 *         :totalPages,
 *         0
 *     ) RETURNING *
 * ```
 */
export const insertBook = new PreparedQuery<IInsertBookParams,IInsertBookResult>(insertBookIR);


