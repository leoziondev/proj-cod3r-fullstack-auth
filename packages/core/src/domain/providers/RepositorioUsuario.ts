import Usuario from '../models/Usuario'

export default interface RepositorioUsuario {
    salvar(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
    recuperarSenha(email: string): Promise<void>
}