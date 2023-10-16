/* @name bookByTitle */
SELECT
    *
FROM
    "book"
WHERE
    "book"."title" = :title;