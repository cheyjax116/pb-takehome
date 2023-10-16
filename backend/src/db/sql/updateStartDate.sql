/* @name updateStartDate */
UPDATE
    "book"
SET
    "startDate" = :startDate
WHERE
    "title" = :title;