/* @name updatePagesRead */
UPDATE
    "book"
SET
    "pagesRead" = :pagesRead
WHERE
    LOWER(REPLACE("book"."title", ' ', '')) = :title;