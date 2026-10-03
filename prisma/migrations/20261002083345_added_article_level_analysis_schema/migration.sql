-- CreateEnum
CREATE TYPE "AttributionQuality" AS ENUM ('HIGH', 'LOW', 'MEDIUM');

-- AlterTable
ALTER TABLE "Outlet" ADD COLUMN     "attributionQuality" "AttributionQuality",
ADD COLUMN     "authorOpinion" BOOLEAN,
ADD COLUMN     "emotionalWordCount" INTEGER,
ADD COLUMN     "loadedWordCount" INTEGER,
ADD COLUMN     "sensationalWordCount" INTEGER;
