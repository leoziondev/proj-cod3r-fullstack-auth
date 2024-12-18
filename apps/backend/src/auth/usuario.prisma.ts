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

  async recuperarSenha(email: string): Promise<void> {
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });
    if (!usuario) throw new BadRequestException('Usuário não encontrado');

    // Gerar token aleatório
    const token = crypto.randomBytes(32).toString('hex');
    const expiracao = addHours(new Date(), 2); // Token válido por 2 horas

    // Salvar token e expiração na base
    await this.prisma.usuario.update({
      where: { email },
      data: {
        resetToken: token,
        resetTokenExpires: expiracao,
      },
    });

    // Aqui você enviaria o email com o link (simulação)
    console.log(
      `Link de recuperação: http://frontend.com/resetar-senha?token=${token}`,
    );
  }
}
