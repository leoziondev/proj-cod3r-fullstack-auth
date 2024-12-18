import Id from "./Id";
import Perfil from "./Perfil";

export default interface Usuario extends Id{
    nome: string,
    apelido: string,
    email: string,
    senha?: string,
    ativo: boolean,
    tokenRecuperacao?: string,
    dataExpiracaoToken?: Date,
    autenticacao: boolean,
    telefone: string,
    imagem: string,
    perfis?: Partial<Perfil>[]
}