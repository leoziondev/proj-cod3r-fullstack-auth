import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type UserBoxProps = {
  image?: string;
  name: string;
  email: string;
};

const user: UserBoxProps = {
  image: "https://github.com/shadcn.png",
  name: "João Marcos Melchiors",
  email: "joao@zmail.com",
};

const UserBox = () => {
  return (
    <div className="justify-self-end flex gap-4 items-center">
      <Avatar>
        <AvatarImage src={user.image} />
        <AvatarFallback>{user.name}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-[25px] font-semibold">{user.name}</p>
        <p className="text-[15px] text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};

export default UserBox;
