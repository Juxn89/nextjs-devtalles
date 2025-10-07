/*
  Warnings:

  - Added the required column `city` to the `UserAddresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."UserAddresses" ADD COLUMN     "city" TEXT NOT NULL;
