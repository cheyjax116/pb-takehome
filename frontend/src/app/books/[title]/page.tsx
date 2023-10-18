"use client";

import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { graphql } from "../../gql";
import Link from "next/link";
import styled from "styled-components";

const BOOK_BY_TITLE = graphql(`
  query BookByTitle($title: String!) {
    bookByTitle(title: $title) {
      title
      author
      pagesRead
      totalPages
      notes
      startDate
      completionDate
      coverImage
    }
  }
`);

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

// type Props = {
//   params: {
//     title: string;
//   };
// };
// const Book = ({ params: { title } }: Props)

const Book = ({ params }) => {
  const [bookTitle, setBookTitle] = useState("");
  // const [coverImage, setCoverImage] = useState("");
  // const [author, setAuthor] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [completionDate, setCompletionDate] = useState("");
  // const [notes, setNotes] = useState("");
  // const [pagesRead, setPagesRead] = useState(0);

  const { data, loading, error } = useQuery(BOOK_BY_TITLE, {
    variables: { title: "Catching Fire" },
  });
  const {
    data: allBooksData,
    loading: allBooksLoading,
    error: allBooksError,
  } = useQuery(GET_ALL_BOOKS);

  // console.log(allBooksData);
  // console.log(data);

  // console.log(data?.bookByTitle.notes);

  useEffect(() => {
    setBookTitle(data?.bookByTitle.title.replace(/\s/g, "").toLowerCase());
  });

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      Book Title: {data?.bookByTitle.title}
      <div>
        <div>
          <BookShelfImageContainer>
            <Link href={bookTitle ? bookTitle : ""}>
              <img src={data?.bookByTitle.coverImage} width="200"></img>;
            </Link>
          </BookShelfImageContainer>
        </div>
      </div>
    </div>
  );
};

export default Book;

const BookShelfImageContainer = styled.div`
  width: 200px;
`;
