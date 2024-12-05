/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `Perfil` table. All the data in the column will be lost.
  - You are about to drop the column `perfilId` on the `Permissao` table. All the data in the column will be lost.
  - Added the required column `usuario` to the `Perfil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perfil` to the `Permissao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Permissao" DROP CONSTRAINT "Permissao_perfilId_fkey";

-- AlterTable
ALTER TABLE "Perfil" DROP COLUMN "usuarioId",
ADD COLUMN     "usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Permissao" DROP COLUMN "perfilId",
ADD COLUMN     "perfil" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_usuario_fkey" FOREIGN KEY ("usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permissao" ADD CONSTRAINT "Permissao_perfil_fkey" FOREIGN KEY ("perfil") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
