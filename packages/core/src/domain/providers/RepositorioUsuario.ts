import Usuario from '../models/Usuario'

export default interface RepositorioUsuario {
    salvar(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
    salvarToken(email: string, token: string): Promise<void>
    gerarTokenPorEmail(email: string): Promise<string | null>
}