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
      usuario: [listaDeUsuario[0], listaDeUsuario[3]], // Yuji Itadori e Satoru Gojo
      permissoes: [listaDePermissao[0]], // Admin
    },
    {
      id: '2',
      tipo: 'Editor',
      descricao: 'Perfil com permissões de edição',
      createAt: new Date(),
      ativo: true,
      usuario: [listaDeUsuario[1]], // Megumi Fushiguro
      permissoes: [listaDePermissao[1]], // Editor
    },
    {
      id: '3',
      tipo: 'Visualizador',
      descricao: 'Perfil com permissões de visualização',
      createAt: new Date(),
      ativo: true,
      usuario: [listaDeUsuario[2]], // Nobara Kugisaki
      permissoes: [listaDePermissao[2]], // Viewer
    },
];