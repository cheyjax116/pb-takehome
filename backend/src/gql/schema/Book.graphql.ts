import gql from "graphql-tag";

export const Book = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    coverImage: String!
    totalPages: Int!
    pagesRead: Int!
    notes: String!
    startDate: DateTime!
    completionDate: DateTime!
  }

  input BookInput {
    title: String!
    author: String!
    coverImage: String!
    totalPages: Int!
    pagesRead: Int = 0
    notes: String
  }

  type Mutation {
    insertBook(input: BookInput!): Book!
  }

  type Query {
    bookByTitle(title: String!): Book
    bookByAuthor(author: String!): [Book!]!
  }
`;
