import React from 'react'

export interface HeaderContentProps {
  apelido: string,
  perfil: string,
}

const HeaderContent = ({ apelido, perfil }: HeaderContentProps) => {
  return (
    <div id="containerHeaderContent"
      className="
        justify-self-start
        flex flex-col justify-center
      ">
        <h1>{apelido}</h1>
        <h2>{perfil ?? 'sem perfil'}</h2>
    </div>
  )
}

export default HeaderContent
