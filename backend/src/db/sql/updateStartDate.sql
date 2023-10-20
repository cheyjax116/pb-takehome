/* @name updateStartDate */
UPDATE
    "book"
SET
    "startDate" = :startDate
WHERE
    LOWER(REPLACE("book"."title", ' ', '')) = :title;