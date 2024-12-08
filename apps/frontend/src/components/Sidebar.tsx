'use client'

import Image from "next/image"
import Link from "next/link"
import { menuList } from "../data"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { FaChevronLeft } from "react-icons/fa"

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <section className="sidebar">
      <Link id="containerLogo" href={'/'}
        className="
        flex justify-center items-center h-default
        border-b border-zinc-800
      ">
        <Image src={"/LogoSmall.png"} alt={"Logo"} width={162} height={129}/>
      </Link>
      <nav className="flex w-full">
        <ul className="flex-1">
          {menuList.map((itemMenu, index)=> {
            
            const isActive = itemMenu.route === pathname || pathname.startsWith(`${pathname}/`)

            return (
              <li key={index} className="my-3">
                <Link 
                  href={itemMenu.route} 
                  className="sidebarGrid">
                  <div className={cn("flex justify-center items-center h-10", {"bg-zinc-900": isActive})}>
                    {itemMenu.icon}
                  </div>
                  <div className="itemLabelContainer">
                    <p className={cn("itemLabel", {"bg-zinc-900": isActive})}>
                      {itemMenu.label}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {/*Implementar função para fechar e abrir sidebar*/}
      <FaChevronLeft className="absolute bottom-4 right-3"/> 
    </section>
  )
}

export default Sidebar
