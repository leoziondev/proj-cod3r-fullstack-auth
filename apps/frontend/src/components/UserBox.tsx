import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type UserBoxProps = {
  imagem?: string;
  nome: string;
  email: string;
};

const user: UserBoxProps = {
  imagem: "https://github.com/shadcn.png",
  nome: "João Marcos Melchiors",
  email: "joao@zmail.com",
};

const UserBox = () => {
  return (
    <div className="justify-self-end flex gap-4 items-center">
      <Avatar>
        <AvatarImage src={user.imagem} />
        <AvatarFallback>{user.nome}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-[25px] font-semibold">{user.nome}</p>
        <p className="text-[15px] text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};

export default UserBox;
