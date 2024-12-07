import Image from "next/image"
import Link from "next/link"

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

    </section>
  )
}

export default Sidebar
