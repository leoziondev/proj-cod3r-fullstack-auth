import React from 'react'

const HeaderContent = ({ apelido, perfil }: HeaderContentProps) => {
  return (
    <div id="containerHeaderContent"
      className="
        justify-self-start
        flex flex-col justify-center
      ">
        <h1>{apelido}</h1>
        <h2>{perfil}</h2>
    </div>
  )
}

export default HeaderContent
