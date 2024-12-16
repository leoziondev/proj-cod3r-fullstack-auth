/*
  Warnings:

  - Added the required column `apelido` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "apelido" VARCHAR(30) NOT NULL;
