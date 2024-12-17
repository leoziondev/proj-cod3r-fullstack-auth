import CasoDeUso from "@core/shared/CasoDeUso"
import { Usuario } from "../models"
import { RepositorioUsuario, ProvedorCriptografia } from "../providers"

type Entrada = {
    email: string
    senha: string
}

export default class LoginUsuario implements CasoDeUso<Entrada, Usuario> {
    constructor(
        private readonly repo: RepositorioUsuario,
        private readonly cripto: ProvedorCriptografia
    ) {}

    async executar(entrada: Entrada): Promise<Usuario> {
        const { email, senha } = entrada

        const usuario = await this.repo.buscarPorEmail(email)
        if (!usuario) throw new Error('Usuário não encontrado')
        
        if (usuario.senha){
            const mesmaSenha = await this.cripto.comparar(senha, usuario.senha)
            if (!mesmaSenha) throw new Error('Senha incorreta')
        }

        return usuario
    }
}
