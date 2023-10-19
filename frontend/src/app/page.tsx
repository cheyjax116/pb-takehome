"use client";
import React from "react";
import { graphql } from "../app/gql";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Link from "next/link";

const GET_ALL_BOOKS = graphql(`
  query GetAllBooks {
    getAllBooks {
      coverImage
      title
      id
      notes
      pagesRead
      startDate
      completionDate
      author
      totalPages
    }
  }
`);

export default function Home() {
  const {
    data: allBooksData,
    loading: allBooksLoading,
    error: allBooksError,
  } = useQuery(GET_ALL_BOOKS);

  return (
    <main>
      <Header>Book Shelf</Header>
      <BookShelfContainer>
        {allBooksData?.getAllBooks.map((book) => {
          return (
            <Link
              key={book.id}
              href={`books/${book.title.replace(/\s/g, "-").toLowerCase()}`}
            >
              <img key={book.id} src={book.coverImage} width="300"></img>
            </Link>
          );
        })}
      </BookShelfContainer>
    </main>
  );
}

const BookShelfContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  grid-gap: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Header = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-top: 30px;
`;
