import React from 'react'


const HeaderBox = ({ usuario, perfil, apelido, email }: HeaderBoxProps) => {
  return (
    <div id="containerHeaderBox" 
        className="grid 
        grid-cols-[1fr_400px]
        items-center
    ">
        <div id="containerContext"
            className="justify-self-start
        ">
            <h1>{apelido}</h1>
            <h2>{perfil}</h2>
        </div>
        <div id="containerUser" 
            className="justify-self-end
            flex items-center gap-4
        ">
            <div>Avatar</div>
            <div id="containerDataUSer">
                <div>{usuario}</div>
                <div>{email}</div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBox
