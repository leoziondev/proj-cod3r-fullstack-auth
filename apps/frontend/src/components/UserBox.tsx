import React from 'react'

export interface UserBoxProps {
  imagem: string,
  nome: string,
  email: string,
}


const UserBox = ({ imagem, nome, email }: UserBoxProps) => {
  return (
    <div id="containerUserBox" 
      className="
        justify-self-end
        flex gap-4 items-center
    ">
        <div>{imagem}</div>
        <div id="containerUserData">
            <div>{nome}</div>
            <div>{email}</div>
        </div>
    </div>
  )
}

export default UserBox
