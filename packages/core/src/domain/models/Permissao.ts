import Id from "./Id";
import Perfil from "./Perfil";

export default interface Permissao extends Id {
    tipo: string,
    descricao: string,
    createAt: Date,
    ativo: boolean,
    perfis: Perfil[]
}
