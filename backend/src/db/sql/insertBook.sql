/* @name insertBook */
INSERT INTO
    "book" (
        "title",
        "author",
        "coverImage",
        "totalPages",
        "pagesRead"
    )
VALUES
    (
        :title,
        :author,
        :coverImage,
        :totalPages,
        0
    ) RETURNING *;