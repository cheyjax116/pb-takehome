/** Types generated for queries found in "backend/db/sql/insertBook.sql" */
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

const insertBookIR: any = {"usedParamSet":{"title":true,"author":true,"coverImage":true,"totalPages":true},"params":[{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":130,"b":135}]},{"name":"author","required":false,"transform":{"type":"scalar"},"locs":[{"a":146,"b":152}]},{"name":"coverImage","required":false,"transform":{"type":"scalar"},"locs":[{"a":163,"b":173}]},{"name":"totalPages","required":false,"transform":{"type":"scalar"},"locs":[{"a":184,"b":194}]}],"statement":"INSERT INTO\n    \"book\" (\n        \"title\",\n        \"author\",\n        \"coverImage\",\n        \"totalPages\"\n    )\nVALUES\n    (\n        :title,\n        :author,\n        :coverImage,\n        :totalPages\n    ) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "book" (
 *         "title",
 *         "author",
 *         "coverImage",
 *         "totalPages"
 *     )
 * VALUES
 *     (
 *         :title,
 *         :author,
 *         :coverImage,
 *         :totalPages
 *     ) RETURNING *
 * ```
 */
export const insertBook = new PreparedQuery<IInsertBookParams,IInsertBookResult>(insertBookIR);


