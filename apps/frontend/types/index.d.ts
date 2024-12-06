/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  // ========================================

declare interface HeaderBoxProps {
    usuario: string;
    email: string;
    perfil: string;
    apelido: string;
    imagem: string;
};

declare interface HeaderContentProps {
  apelido: string;
  perfil: string;
};

declare interface UserBoxProps {
  usuario: string;
  imagem: string;
  email: string;
};
