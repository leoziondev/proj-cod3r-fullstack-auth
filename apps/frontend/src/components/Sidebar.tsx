import Image from "next/image"
import Link from "next/link"
import { listaDoMenu } from "@repo/core"

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link id="containerLogo" href={'/'}
        className="
        flex justify-center items-center h-default
        border-b border-zinc-800
      ">
        <Image src={"/LogoSmall.png"} alt={"Logo"} width={162} height={129}/>
      </Link>
      <nav>
        <ul>
          {listaDoMenu.map((itemMenu, index)=> {
            return (
              <li key={index} className="flex gap-4">
                <Image src={itemMenu.icone} alt={"iconMenu"} width={28} height={28}
                  className="text-white"
                />
                <p>{itemMenu.name}</p>
              </li>
            )
          })}
        </ul>
      </nav>

    </section>
  )
}

export default Sidebar
