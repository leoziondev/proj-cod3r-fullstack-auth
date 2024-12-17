import { Permissao } from "../domain";
import { listaDePerfil } from "./listaDePerfil";

export const listaDePermissao:Permissao[] = [
    {
      id: '1',
      tipo: 'admin',
      descricao: 'Acesso completo ao sistema',
      ativo: true,
      perfis: [
        
      ],
    },
    {
      id: '2',
      tipo: 'editor',
      descricao: 'Permissão para editar conteúdo',
      ativo: true,
      perfis: [],
    },
    {
      id: '3',
      tipo: 'viewer',
      descricao: 'Permissão para visualizar conteúdo',
      ativo: true,
      perfis: [],
    },
];