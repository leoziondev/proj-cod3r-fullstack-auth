export default interface Permissao {
    id: string,
    tipo: string,
    descricao: string,
    createAt: Data,
    ativo: boolean,
    perfis: Perfil[]
}
