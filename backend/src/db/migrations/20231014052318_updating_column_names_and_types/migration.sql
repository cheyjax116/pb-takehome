/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bookPages` on the `Book` table. All the data in the column will be lost.
  - The `id` column on the `Book` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `totalPages` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "bookPages",
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "totalPages" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "pagesRead" DROP NOT NULL,
ALTER COLUMN "completionDate" DROP NOT NULL,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("id");
