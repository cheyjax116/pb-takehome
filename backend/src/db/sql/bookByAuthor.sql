/* @name bookByAuthor */
SELECT
    *
FROM
    "book"
WHERE
    "book"."author" = :author;