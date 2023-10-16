/* @name updateCompletionDate */
UPDATE
    "book"
SET
    "completionDate" = :completionDate
WHERE
    "title" = :title;