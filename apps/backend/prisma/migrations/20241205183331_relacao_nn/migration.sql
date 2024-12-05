/*
  Warnings:

  - The primary key for the `PerfisDosUsuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `perfilId` on the `PerfisDosUsuarios` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `PerfisDosUsuarios` table. All the data in the column will be lost.
  - The primary key for the `PermissoesDosPerfis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `perfilId` on the `PermissoesDosPerfis` table. All the data in the column will be lost.
  - You are about to drop the column `permissaoId` on the `PermissoesDosPerfis` table. All the data in the column will be lost.
  - Added the required column `perfil` to the `PerfisDosUsuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `PerfisDosUsuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perfil` to the `PermissoesDosPerfis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permissao` to the `PermissoesDosPerfis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_perfilId_fkey";

-- DropForeignKey
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_perfilId_fkey";

-- DropForeignKey
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_permissaoId_fkey";

-- AlterTable
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_pkey",
DROP COLUMN "perfilId",
DROP COLUMN "usuarioId",
ADD COLUMN     "perfil" INTEGER NOT NULL,
ADD COLUMN     "usuario" INTEGER NOT NULL,
ADD CONSTRAINT "PerfisDosUsuarios_pkey" PRIMARY KEY ("usuario", "perfil");

-- AlterTable
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_pkey",
DROP COLUMN "perfilId",
DROP COLUMN "permissaoId",
ADD COLUMN     "perfil" INTEGER NOT NULL,
ADD COLUMN     "permissao" INTEGER NOT NULL,
ADD CONSTRAINT "PermissoesDosPerfis_pkey" PRIMARY KEY ("perfil", "permissao");

-- AddForeignKey
ALTER TABLE "PerfisDosUsuarios" ADD CONSTRAINT "PerfisDosUsuarios_usuario_fkey" FOREIGN KEY ("usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfisDosUsuarios" ADD CONSTRAINT "PerfisDosUsuarios_perfil_fkey" FOREIGN KEY ("perfil") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissoesDosPerfis" ADD CONSTRAINT "PermissoesDosPerfis_perfil_fkey" FOREIGN KEY ("perfil") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissoesDosPerfis" ADD CONSTRAINT "PermissoesDosPerfis_permissao_fkey" FOREIGN KEY ("permissao") REFERENCES "Permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
