'use client'

import Image from "next/image"
import Link from "next/link"
import { menuList } from "../data"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

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
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                  <div className={cn("flex justify-center items-center h-10", {"bg-zinc-900": isActive})}>
                    {itemMenu.icon}
                  </div>
                  <p className={cn("flex items-center max-md:hidden text-lg h-10", {"bg-zinc-900": isActive})}>
                    {itemMenu.label}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </section>
  )
}

export default Sidebar
