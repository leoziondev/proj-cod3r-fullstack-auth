/*
  Warnings:

  - You are about to drop the column `usuario` on the `Perfil` table. All the data in the column will be lost.
  - You are about to drop the column `perfil` on the `Permissao` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Permissao" DROP CONSTRAINT "Permissao_perfil_fkey";

-- AlterTable
ALTER TABLE "Perfil" DROP COLUMN "usuario";

-- AlterTable
ALTER TABLE "Permissao" DROP COLUMN "perfil";

-- CreateTable
CREATE TABLE "PerfisDosUsuarios" (
    "usuarioId" INTEGER NOT NULL,
    "perfilId" INTEGER NOT NULL,

    CONSTRAINT "PerfisDosUsuarios_pkey" PRIMARY KEY ("usuarioId","perfilId")
);

-- CreateTable
CREATE TABLE "PermissoesDosPerfis" (
    "perfilId" INTEGER NOT NULL,
    "permissaoId" INTEGER NOT NULL,

    CONSTRAINT "PermissoesDosPerfis_pkey" PRIMARY KEY ("perfilId","permissaoId")
);

-- AddForeignKey
ALTER TABLE "PerfisDosUsuarios" ADD CONSTRAINT "PerfisDosUsuarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfisDosUsuarios" ADD CONSTRAINT "PerfisDosUsuarios_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissoesDosPerfis" ADD CONSTRAINT "PermissoesDosPerfis_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissoesDosPerfis" ADD CONSTRAINT "PermissoesDosPerfis_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "Permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
