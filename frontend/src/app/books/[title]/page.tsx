"use client";

import { useQuery } from "@apollo/client";
import React, { ReactNode, useEffect, useState } from "react";
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

// type Props = {
//   params: {
//     title: string;
//   };
// };
// const Book = ({ params: { title } }: Props)

const percentage = (pagesRead: number, totalPages: number) => {
  return ((pagesRead / totalPages) * 100).toFixed(0) + "%";
};

const convertDate = (date: string) => {
  if (date === null) {
    return "N/A";
  }
  let newDate = new Date(date);
  newDate.toLocaleDateString("en-US"),
    { month: "2-digit", day: "2-digit", year: "numeric" };
  return newDate.toString();
};

const Book = ({ params }) => {
  const [bookTitle, setBookTitle] = useState("");
  // const [coverImage, setCoverImage] = useState("");
  // const [author, setAuthor] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [completionDate, setCompletionDate] = useState("");
  // const [notes, setNotes] = useState("");
  // const [pagesRead, setPagesRead] = useState(0);

  const { data, loading, error } = useQuery(BOOK_BY_TITLE, {
    variables: { title: params.title.replace(/\-/g, "") },
  });

  // console.log(data);

  // useEffect(() => {
  //   setBookTitle(data?.bookByTitle.title.replace(/\s/g, "").toLowerCase());
  // });

  if (loading)
    return <p style={{ textAlign: "center", padding: "50%" }}>Loading...</p>;
  return (
    <MainDiv>
      <BookTitle>{data?.bookByTitle.title}</BookTitle>
      <h2 style={{ paddingBottom: "30px" }}>By: {data?.bookByTitle.author}</h2>
      <div>
        <CoverImageContainer>
          <img src={data?.bookByTitle.coverImage}></img>
        </CoverImageContainer>
      </div>

      <BookStatsDiv>
        <div>
          Pages: {data?.bookByTitle.pagesRead} / {data?.bookByTitle.totalPages}{" "}
          (
          {percentage(
            data?.bookByTitle.pagesRead,
            data?.bookByTitle.totalPages
          )}
          )
        </div>
        <div>Start Date: {convertDate(data?.bookByTitle.startDate)}</div>
        <div>
          Completion Date: {convertDate(data?.bookByTitle.completionDate)}
        </div>
      </BookStatsDiv>
      <div style={{ width: "600px", paddingTop: "10px", alignItems: "center" }}>
        Notes: {data?.bookByTitle.notes}
      </div>
      <ButtonDiv>
        <Button>Update Book Stats</Button>
        <Link href={"/"} style={{ paddingTop: "100px" }}>
          <Button>Go To Bookshelf</Button>
        </Link>
      </ButtonDiv>
    </MainDiv>
  );
};

export default Book;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
`;

const CoverImageContainer = styled.div`
  width: 400px;
`;

const Button = styled.button`
  font-size: 20px;
  padding-top: 20px;
  align-self: flex-end;
  width: 230px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3b61eb;
  margin: 0 1em;
  padding: 0.8em 1em;
  &:hover {
    background-color: #3b61eb;
    color: whitesmoke;
  }
`;

const BookTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-top: 15px;
  /* padding-bottom: 20px; */
`;

const ButtonDiv = styled.div`
  padding-top: 100px;
  justify-content: flex-end;
`;

const BookStatsDiv = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
