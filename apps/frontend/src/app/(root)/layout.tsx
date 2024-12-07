import HeaderBox from "@/components/HeaderBox";
import Sidebar from "@/components/Sidebar";
import { Usuario } from "@repo/core";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn:Partial<Usuario> = {
    nome: 'João Marcos Melchiors',
    apelido: 'Kyptronk',
    email: 'joao@zmail.com',
    perfis: [{ tipo: 'Administrador'}, {tipo: 'Moderador'}, {tipo: 'Usuário'}],
    imagem: 'img'
  }

  return (
    <main className="flex-1 flex">
        <Sidebar />
        <div id="containerHeaderPlusContent"
          className="
            flex-1
            flex flex-col 
        ">
          <HeaderBox usuario={loggedIn}                   
          />
          <div className="
            flex-1 
            flex justify-center items-center
          ">
            {children}
          </div>
        </div>
    </main>
  );
}
