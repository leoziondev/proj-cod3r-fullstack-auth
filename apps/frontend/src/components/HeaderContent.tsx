import React from "react";

export type HeaderContentProps = {
  perfil: string;
};

const user: HeaderContentProps = {
  perfil: "Administrador",
};

const HeaderContent = () => {
  return <h1 className="text-[25px] font-semibold">{user.perfil}</h1>;
};

export default HeaderContent;
