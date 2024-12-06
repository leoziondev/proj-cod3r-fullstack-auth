import React from 'react'
import HeaderContent from './HeaderContent'
import UserBox from './UserBox'


const HeaderBox = ({ usuario, perfil, apelido, email, imagem }: HeaderBoxProps) => {
  return (
    <div id="containerHeaderBox" 
        className="grid 
        grid-cols-[1fr_400px]
        items-center
    ">
        <HeaderContent 
            apelido={apelido} 
            perfil={perfil} 
        />
        <UserBox 
            usuario={usuario} 
            imagem={imagem} 
            email={email} 
        />
    </div>
  )
}

export default HeaderBox
