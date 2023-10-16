/* @name updateBookNotes */
UPDATE
    "book"
SET
    "notes" = :notes
WHERE
    "title" = :title;