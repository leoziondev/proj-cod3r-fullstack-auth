import CasoDeUso from "@core/shared/CasoDeUso";
import { RepositorioUsuario } from "../providers";

export default class RecuperarSenha implements CasoDeUso<string, string>{
    constructor(readonly repo: RepositorioUsuario){}

    async executar(entrada: string): Promise<string> {
        const token = await this.repo.gerarTokenPorEmail(entrada)
        if(!token) throw new Error('Nao foi possivel recuperar senha')
       
        await this.repo.salvarToken(entrada, token)
        
        return token
    }
}