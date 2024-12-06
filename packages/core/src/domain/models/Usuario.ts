import Id from "./Id";
import Perfil from "./Perfil";

export default interface Usario extends Id{
    nome: string,
    email: string,
    senha: string,
    createAt: Date,
    ativo: boolean,
    autenticacao: boolean,
    telefone: string,
    imagem: string,
    perfis?: Perfil[]
}