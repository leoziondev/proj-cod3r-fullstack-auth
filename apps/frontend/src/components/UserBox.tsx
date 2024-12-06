import React from 'react'
import { Usuario } from '@repo/core'

const UserBox = ({ imagem, usuario, email }: UserBoxProps) => {
  return (
    <div id="containerUserBox" 
      className="
        justify-self-end
        flex gap-4 items-center
    ">
        <div>{imagem}</div>
        <div id="containerUserData">
            <div>{usuario}</div>
            <div>{email}</div>
        </div>
    </div>
  )
}

export default UserBox
