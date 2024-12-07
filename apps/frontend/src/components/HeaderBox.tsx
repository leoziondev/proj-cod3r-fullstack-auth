import React from 'react'
import HeaderContent from './HeaderContent'
import UserBox from './UserBox'
import { Usuario } from '@repo/core'

export interface HeaderBoxProps {
  usuario: Partial<Usuario>
}

const HeaderBox = ({ usuario }: HeaderBoxProps) => {
  return (
    <div id="containerHeaderBox" 
        className="header
    ">
        <HeaderContent 
            apelido={usuario.apelido ?? 'sem apelido'}
            perfil={usuario.perfis ? usuario.perfis.reduce(( acc, perfil ) => {
              let tmp:string
              if(!acc) {
                tmp = perfil.tipo ? perfil.tipo : 'never tuch this'
              } else {
                tmp = `${acc}, ${perfil.tipo}` 
              }
              return tmp
            }, '') : 'Sem Perfil'}
        />
        <UserBox 
            nome={usuario.nome ?? 'sem nome'} 
            imagem={usuario.imagem ?? 'sem imagem'} 
            email={usuario.email ?? 'sem email'} 
        />
    </div>
  )
}

export default HeaderBox
