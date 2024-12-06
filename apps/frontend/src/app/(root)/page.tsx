import HeaderBox from "@/components/HeaderBox";

export default function Home() {

  const loggedIn = {
    user: 'João Marcos Melchiors',
    nickName: 'Kyptronk',
    email: 'joao@zmail.com',
    role: 'Administrador'
  }


  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
            <HeaderBox 
              nickName={loggedIn.nickName}
              role={loggedIn.role}
              user={loggedIn.user}
              email={loggedIn.email}
            />
        </div>


      </div>
    </section>
  );
}

/*

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import Link from "next/link";


export default function Home() {

return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Fullstack Authentication RBAC</h1>
      <Button asChild>
        <Link href={`/login`}>
          Example
        </Link>
      </Button>
    
      <div className="max-w-2xl mt-16">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
      <Link href="/login">CLique aqui</Link>
    </div>
  )
}

*/
