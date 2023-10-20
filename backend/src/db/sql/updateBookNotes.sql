/* @name updateBookNotes */
UPDATE
    "book"
SET
    "notes" = :notes
WHERE
    LOWER(REPLACE("book"."title", ' ', '')) = :title;