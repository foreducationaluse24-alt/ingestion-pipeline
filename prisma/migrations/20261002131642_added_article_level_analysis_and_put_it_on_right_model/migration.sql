/*
  Warnings:

  - You are about to drop the column `attributionQuality` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `authorOpinion` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `emotionalWordCount` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `loadedWordCount` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `sensationalWordCount` on the `Outlet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "attributionQuality" "AttributionQuality",
ADD COLUMN     "authorOpinion" BOOLEAN,
ADD COLUMN     "emotionalWordCount" INTEGER,
ADD COLUMN     "loadedWordCount" INTEGER,
ADD COLUMN     "sensationalWordCount" INTEGER;

-- AlterTable
ALTER TABLE "Outlet" DROP COLUMN "attributionQuality",
DROP COLUMN "authorOpinion",
DROP COLUMN "emotionalWordCount",
DROP COLUMN "loadedWordCount",
DROP COLUMN "sensationalWordCount";
