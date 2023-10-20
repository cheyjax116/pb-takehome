/* @name updateCompletionDate */
UPDATE
    "book"
SET
    "completionDate" = :completionDate
WHERE
    LOWER(REPLACE("book"."title", ' ', '')) = :title;