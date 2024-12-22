import { ProvedorCriptografia, RepositorioUsuario } from "../providers";
import CasoDeUso2 from "@core/shared/casoDeUso2";

export default class RedefinirSenha implements CasoDeUso2<string,string>{
   constructor(readonly repo: RepositorioUsuario, readonly cripto: ProvedorCriptografia){}

   async executar(entrada1: string, entrada2: string): Promise<void> {
    const usuario = await this.repo.buscarPorToken(entrada1);

    if (!usuario) throw new Error('Token inválido ou expirado');

    // Criptografar nova senha
    const senhaHash = await this.cripto.criptografar(entrada2);
 
    // Atualizar senha e limpar o token
    await this.repo.atualizarSenha(usuario.id, senhaHash);
    }
}