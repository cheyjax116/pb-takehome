"use client";

import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { graphql } from "../../gql";
import Link from "next/link";
import styled from "styled-components";
import loadingGif from "../../../../public/loading.gif";
import blurredTemplate from "../../../../public/blurredBTemplate.jpg";

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

const UPDATE_BOOK_INFO = graphql(`
  mutation UpdateBookInfo($title: String!, $edits: updateBookInput) {
    updateBookInfo(title: $title, edits: $edits) {
      pagesRead
      notes
      startDate
      completionDate
    }
  }
`);

const percentage = (pagesRead: number, totalPages: number) => {
  return ((pagesRead / totalPages) * 100).toFixed(0) + "%";
};

const convertDate = (date: string) => {
  if (date === null) {
    return "TBD";
  }
  let newDate = new Date(date);
  return newDate.toLocaleDateString("en-US");
};

const Book = ({ params }) => {
  const [startDate, setStartDate] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [notes, setNotes] = useState("");
  const [pagesRead, setPagesRead] = useState("");

  const { data, loading, error } = useQuery(BOOK_BY_TITLE, {
    variables: { title: params.title.replace(/\-/g, "") },
  });

  const [updateBookInfoFunction] = useMutation(UPDATE_BOOK_INFO);

  useEffect(() => {
    setNotes(data?.bookByTitle.notes);
  }, []);

  const timeElaspedReading = (date: string) => {
    if (date === null) {
      return 0;
    }

    let endDate: number;

    if (data?.bookByTitle.completionDate) {
      endDate = new Date(data?.bookByTitle.completionDate).getTime();
    } else {
      endDate = new Date().getTime();
    }
    let startDate = new Date(date).getTime();
    let days = (endDate - startDate) / (1000 * 3600 * 24);
    return Math.floor(days);
  };

  const overlayOn = () => {
    document.getElementById("overlay-container").style.display = "block";
    document.getElementById("form-div").style.display = "block";
  };

  const overlayOff = () => {
    document.getElementById("overlay-container").style.display = "none";
    document.getElementById("form-div").style.display = "none";
    (document.getElementById("form") as HTMLFormElement).reset();
  };

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <Image
          src={loadingGif}
          alt="loading"
          width={150}
          style={{ alignItems: "center" }}
        ></Image>
      </div>
    );
  return (
    <MainDiv id="main">
      <BookTitle>{data?.bookByTitle.title}</BookTitle>
      <h2 style={{ paddingBottom: "30px" }}>By: {data?.bookByTitle.author}</h2>
      <div>
        <CoverImageContainer>
          <img src={data?.bookByTitle.coverImage}></img>
        </CoverImageContainer>
      </div>

      <BookStatsDiv>
        <div>
          Pages Read: {data?.bookByTitle.pagesRead} /{" "}
          {data?.bookByTitle.totalPages} (
          {percentage(
            data?.bookByTitle.pagesRead,
            data?.bookByTitle.totalPages
          )}
          )
        </div>
        <div>Start Date: {convertDate(data?.bookByTitle.startDate)}</div>
        <div>
          Time Spent Reading: {timeElaspedReading(data?.bookByTitle.startDate)}{" "}
          days
        </div>
        <div>
          Completion Date: {convertDate(data?.bookByTitle.completionDate)}
        </div>
        <div style={{ paddingTop: "10px", fontWeight: 600 }}>Notes:</div>{" "}
        <div style={{ width: "500px", textAlign: "center" }}>
          {data?.bookByTitle.notes}
        </div>
      </BookStatsDiv>

      <Overlay id="overlay-container" onClick={overlayOff}></Overlay>
      <FormDiv id="form-div">
        <StyledForm id="form">
          <StyledInput
            placeholder="Pages Read"
            type="number"
            pattern="[0-9]*"
            max={data?.bookByTitle.totalPages}
            onChange={(e) => setPagesRead(e.target.value)}
          ></StyledInput>
          <StyledInput
            placeholder="Start Date"
            max={new Date(data?.bookByTitle.completionDate).toLocaleDateString(
              "en-CA"
            )}
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          ></StyledInput>
          <StyledInput
            placeholder="Completion Date"
            type="date"
            min={new Date(data?.bookByTitle.startDate).toLocaleDateString(
              "en-CA"
            )}
            onChange={(e) => setCompletionDate(e.target.value)}
          ></StyledInput>
          <StyledTextArea
            id="notes-section"
            defaultValue={data?.bookByTitle.notes}
            placeholder="Notes"
            onChange={(e) => setNotes(e.target.value)}
          ></StyledTextArea>
          <div>
            <Button
              style={{ marginTop: "20px" }}
              onClick={() => {
                updateBookInfoFunction({
                  variables: {
                    title: params.title.replace(/\-/g, ""),
                    edits: {
                      pagesRead: pagesRead != "" ? Number(pagesRead) : null,
                      notes: notes,
                      startDate: startDate,
                      completionDate: completionDate,
                    },
                  },
                });
              }}
            >
              Save
            </Button>
          </div>
        </StyledForm>
      </FormDiv>
      <ButtonDiv>
        <Button onClick={() => overlayOn()}>Update Book Stats</Button>
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
  color: "black";
  &:hover {
    background-color: #3b61eb;
    color: whitesmoke;
  }
`;

const BookTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-top: 15px;
`;

const ButtonDiv = styled.div`
  margin-top: 100px;
  align-items: flex-end;
`;

const BookStatsDiv = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormDiv = styled.div`
  display: none;
  z-index: 4;
  margin-top: 20%;
  position: fixed;
  width: 500px;
  text-align: center;
`;
const StyledForm = styled.form`
  display: block;
  padding: 20px;
  border-radius: 5px;
  padding-left: 25px;
  z-index: 1000;
  background: rgba(199, 200, 201, 0.85);
`;

const StyledInput = styled.input`
  width: 370px;
  padding: 10px;
  padding-bottom: 20px;
  grid-gap: 20px !important;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: whitesmoke;
  align-items: center;
  color: black;
  padding-bottom: 10px;
  margin-bottom: 20px;

  &:before {
    content: attr(placeholder) !important;
    color: #aaa;
  }
`;
const StyledTextArea = styled.textarea`
  width: 370px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: whitesmoke;
  align-items: center;
  justify-content: center;
  resize: none;
  height: 100px;
  color: black;
`;

const Overlay = styled.div`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(238, 240, 241, 0.85);
`;
