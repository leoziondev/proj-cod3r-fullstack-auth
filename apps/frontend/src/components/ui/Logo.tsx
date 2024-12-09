import Link from 'next/link';
import React from 'react';
import Image from "next/image";

export interface LogoProps {
    className?: string;
}

const Logo = (props:LogoProps) => {
  return (
    <Link id="containerLogo" href={'/'}
        className={`
        flex justify-center items-center h-default
        ${props.className && ''}
    `}>
        <Image src={"/LogoSmall.png"} alt={"Logo"} width={162} height={129}/>
  </Link>
  )
}

export default Logo
