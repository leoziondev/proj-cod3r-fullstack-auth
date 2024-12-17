/*
  Warnings:

  - You are about to drop the `PerfisDosUsuarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PermissoesDosPerfis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_perfil_fkey";

-- DropForeignKey
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_usuario_fkey";

-- DropForeignKey
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_perfil_fkey";

-- DropForeignKey
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_permissao_fkey";

-- DropForeignKey
ALTER TABLE "_PerfilToUsuario" DROP CONSTRAINT "_PerfilToUsuario_B_fkey";

-- DropTable
DROP TABLE "PerfisDosUsuarios";

-- DropTable
DROP TABLE "PermissoesDosPerfis";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "apelido" VARCHAR(30) NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ativo" BOOLEAN NOT NULL,
    "autenticacao" BOOLEAN NOT NULL,
    "telefone" CHAR(14) NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "_PerfilToUsuario" ADD CONSTRAINT "_PerfilToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
