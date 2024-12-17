import Id from "./Id";
import Perfil from "./Perfil";

export default interface Permissao extends Id {
    tipo: string,
    descricao: string,
    ativo: boolean,
    perfis: Perfil[]
}
