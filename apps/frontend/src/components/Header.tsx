import React from "react";
import UserBox from "./UserBox";
import SearchBox from "./SearchBox";

export type HeaderProps = {
  perfil: string;
};

const user: HeaderProps = {
  perfil: "Administrador",
};

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center h-40">
      <h1 className="text-[25px] font-semibold">{user.perfil}</h1>

      <div className="flex">
        <SearchBox />
        <UserBox />
      </div>
    </div>
  );
};

export default Header;
