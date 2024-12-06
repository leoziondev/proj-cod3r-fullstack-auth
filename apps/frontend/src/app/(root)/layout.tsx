import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const loggedIn = {
        role: 'Adminstrador'
    };

    return (
    <main className="flex w-full h-screen">
        <Sidebar role={loggedIn.role}/>
        <div>{children}</div>
    </main>
    );
}
