/*
  Warnings:

  - You are about to drop the column `iamgePath` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `iamgePath`,
    ADD COLUMN `imagePath` VARCHAR(191);
