import { Perfil } from "../domain";
import { listaDePermissao } from "./listaDePermissao";
import { listaDeUsuario } from "./listaDeUsuario";

// Perfis
export const listaDePerfil:Perfil[] = [
    {
      id: '1',
      tipo: 'Administrador',
      descricao: 'Perfil com todas as permissões',
      createAt: new Date(),
      ativo: true,
      usuario: [], // Yuji Itadori e Satoru Gojo
      permissoes: [], // Admin
    },
    {
      id: '2',
      tipo: 'Editor',
      descricao: 'Perfil com permissões de edição',
      createAt: new Date(),
      ativo: true,
      usuario: [], // Megumi Fushiguro
      permissoes: [], // Editor
    },
    {
      id: '3',
      tipo: 'Visualizador',
      descricao: 'Perfil com permissões de visualização',
      createAt: new Date(),
      ativo: true,
      usuario: [], // Nobara Kugisaki
      permissoes: [], // Viewer
    },
];