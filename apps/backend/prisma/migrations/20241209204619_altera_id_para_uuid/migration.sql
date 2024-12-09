/*
  Warnings:

  - The primary key for the `Perfil` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PerfisDosUsuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Permissao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PermissoesDosPerfis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_perfil_fkey";

-- DropForeignKey
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_usuario_fkey";

-- DropForeignKey
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_perfil_fkey";

-- DropForeignKey
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_permissao_fkey";

-- AlterTable
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Perfil_id_seq";

-- AlterTable
ALTER TABLE "PerfisDosUsuarios" DROP CONSTRAINT "PerfisDosUsuarios_pkey",
ALTER COLUMN "perfil" SET DATA TYPE TEXT,
ALTER COLUMN "usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "PerfisDosUsuarios_pkey" PRIMARY KEY ("usuario", "perfil");

-- AlterTable
ALTER TABLE "Permissao" DROP CONSTRAINT "Permissao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Permissao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Permissao_id_seq";

-- AlterTable
ALTER TABLE "PermissoesDosPerfis" DROP CONSTRAINT "PermissoesDosPerfis_pkey",
ALTER COLUMN "perfil" SET DATA TYPE TEXT,
ALTER COLUMN "permissao" SET DATA TYPE TEXT,
ADD CONSTRAINT "PermissoesDosPerfis_pkey" PRIMARY KEY ("perfil", "permissao");

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Usuario_id_seq";

-- AddForeignKey
ALTER TABLE "PerfisDosUsuarios" ADD CONSTRAINT "PerfisDosUsuarios_usuario_fkey" FOREIGN KEY ("usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfisDosUsuarios" ADD CONSTRAINT "PerfisDosUsuarios_perfil_fkey" FOREIGN KEY ("perfil") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissoesDosPerfis" ADD CONSTRAINT "PermissoesDosPerfis_perfil_fkey" FOREIGN KEY ("perfil") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissoesDosPerfis" ADD CONSTRAINT "PermissoesDosPerfis_permissao_fkey" FOREIGN KEY ("permissao") REFERENCES "Permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
