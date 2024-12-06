import HeaderBox from "@/components/HeaderBox";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {
    user: 'João Marcos Melchiors',
    nickName: 'Kyptronk',
    email: 'joao@zmail.com',
    role: 'Administrador',
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
          <HeaderBox 
            apelido={loggedIn.nickName}
            perfil={loggedIn.role}
            usuario={loggedIn.user}
            email={loggedIn.email} 
            imagem={loggedIn.imagem}
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
