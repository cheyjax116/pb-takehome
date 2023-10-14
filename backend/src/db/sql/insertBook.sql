/* @name insertBook */
INSERT INTO
    "book" (
        "title",
        "author",
        "coverImage",
        "totalPages"
    )
VALUES
    (
        :title,
        :author,
        :coverImage,
        :totalPages
    ) RETURNING *;