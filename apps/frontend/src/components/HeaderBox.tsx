import React from 'react'

const HeaderBox = ({ nickName, role, user, email }: HeaderBoxProps) => {
  return (
    <div id="containerHeaderBox" 
        className="grid 
        grid-cols-[1fr_400px]
        items-center
    ">
        <div id="containerContext"
            className="justify-self-start
        ">
            <h1>{nickName}</h1>
            <h2>{role}</h2>
        </div>
        <div id="containerUser" 
            className="justify-self-end
            flex items-center gap-4
        ">
            <div>Avatar</div>
            <div id="containerDataUSer">
                <div>{user}</div>
                <div>{email}</div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBox
