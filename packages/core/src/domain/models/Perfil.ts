import Id from "./Id";
import Permissao from "./Permissao";
import Usuario from "./Usuario";

export default interface Perfil extends Id {
    tipo: string,
    descricao: string,
    ativo: boolean,
    usuarios: Usuario[],
    permissoes: Permissao[]
}