import { BadRequestException, Injectable } from '@nestjs/common';
import { RepositorioUsuario, Usuario } from '@repo/core';
import * as crypto from 'crypto';
import { addHours } from 'date-fns';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsuarioPrisma implements RepositorioUsuario {
  constructor(private readonly prisma: PrismaService) {}

  async salvar(usuario: Usuario): Promise<void> {
    await this.prisma.usuario.create({
      data: usuario as any,
    });
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async gerarTokenPorEmail(email: string): Promise<string | null> {
    const usuarioPrisma = await this.buscarPorEmail(email);
    if (!usuarioPrisma) throw new BadRequestException('Usuário não encontrado');
    // Gerar token aleatório
    const token = crypto.randomBytes(32).toString('hex');

    // Aqui você enviaria o email com o link (simulação)
    console.log(
      `Link de recuperação: http://localhost:4001/auth/redefinir-senha?token=${token}`,
    );
    return token;
  }

  async salvarToken(email: string, token: string): Promise<void> {
    const expiracao = addHours(new Date(), 2); // Token válido por 2 horas
    await this.prisma.usuario.update({
      where: { email },
      data: {
        resetToken: token,
        resetTokenExpires: expiracao,
      },
    });
  }

  async buscarPorToken(token: string): Promise<Usuario | null> {
    const usuario = await this.prisma.usuario.findFirst({
      where: { resetToken: token, resetTokenExpires: { gt: new Date() } },
    });

    return usuario;
  }

  async atualizarSenha(_id: string, _senhaHash: string): Promise<void> {
    await this.prisma.usuario.update({
      where: { id: _id },
      data: {
        senha: _senhaHash,
        resetToken: null,
        resetTokenExpires: null,
      },
    });
  }
}
