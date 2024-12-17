import { Perfil } from "../domain";
import { listaDePermissao } from "./listaDePermissao";
import { listaDeUsuario } from "./listaDeUsuario";

// Perfis
export const listaDePerfil:Perfil[] = [
    {
      id: '1',
      tipo: 'Administrador',
      descricao: 'Perfil com todas as permissões',
      ativo: true,
      usuarios: [], // Yuji Itadori e Satoru Gojo
      permissoes: [], // Admin
    },
    {
      id: '2',
      tipo: 'Editor',
      descricao: 'Perfil com permissões de edição',
      ativo: true,
      usuarios: [], // Megumi Fushiguro
      permissoes: [], // Editor
    },
    {
      id: '3',
      tipo: 'Visualizador',
      descricao: 'Perfil com permissões de visualização',
      ativo: true,
      usuarios: [], // Nobara Kugisaki
      permissoes: [], // Viewer
    },
];