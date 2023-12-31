/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query BookByTitle($title: String!) {\n    bookByTitle(title: $title) {\n      title\n      author\n      pagesRead\n      totalPages\n      notes\n      startDate\n      completionDate\n      coverImage\n    }\n  }\n": types.BookByTitleDocument,
    "\n  mutation UpdateBookInfo($title: String!, $edits: updateBookInput) {\n    updateBookInfo(title: $title, edits: $edits) {\n      pagesRead\n      notes\n      startDate\n      completionDate\n    }\n  }\n": types.UpdateBookInfoDocument,
    "\n  query GetAllBooks {\n    getAllBooks {\n      coverImage\n      title\n      id\n      notes\n      pagesRead\n      startDate\n      completionDate\n      author\n      totalPages\n    }\n  }\n": types.GetAllBooksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BookByTitle($title: String!) {\n    bookByTitle(title: $title) {\n      title\n      author\n      pagesRead\n      totalPages\n      notes\n      startDate\n      completionDate\n      coverImage\n    }\n  }\n"): (typeof documents)["\n  query BookByTitle($title: String!) {\n    bookByTitle(title: $title) {\n      title\n      author\n      pagesRead\n      totalPages\n      notes\n      startDate\n      completionDate\n      coverImage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBookInfo($title: String!, $edits: updateBookInput) {\n    updateBookInfo(title: $title, edits: $edits) {\n      pagesRead\n      notes\n      startDate\n      completionDate\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBookInfo($title: String!, $edits: updateBookInput) {\n    updateBookInfo(title: $title, edits: $edits) {\n      pagesRead\n      notes\n      startDate\n      completionDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllBooks {\n    getAllBooks {\n      coverImage\n      title\n      id\n      notes\n      pagesRead\n      startDate\n      completionDate\n      author\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query GetAllBooks {\n    getAllBooks {\n      coverImage\n      title\n      id\n      notes\n      pagesRead\n      startDate\n      completionDate\n      author\n      totalPages\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;