/* @name updatePagesRead */
UPDATE
    "book"
SET
    "pagesRead" = :pagesRead
WHERE
    "title" = :title;