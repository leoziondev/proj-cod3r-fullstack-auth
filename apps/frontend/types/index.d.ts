/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  // ========================================

declare interface HeaderBoxProps {
    usuario?: string;
    email?: string;
    perfil?: string;
    apelido?: string;
}
