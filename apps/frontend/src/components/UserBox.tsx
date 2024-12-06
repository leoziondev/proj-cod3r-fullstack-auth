import React from 'react'
import { Usuario } from '@repo/core'

const UserBox = ({ imagem, nome, email }: Partial<Usuario>) => {
  return (
    <div id="containerUserBox" className='flex'>
        <div>{imagem}</div>
        <div id="containerUserData">
            <div>{nome}</div>
            <div>{email}</div>
        </div>
    </div>
  )
}

export default UserBox
