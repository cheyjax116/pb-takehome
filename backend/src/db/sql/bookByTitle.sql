/* @name bookByTitle */
SELECT
    *
FROM
    "book"
WHERE
    LOWER(REPLACE("book"."title", ' ', '')) = :title;