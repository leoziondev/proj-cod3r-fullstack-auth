import Link from 'next/link';
import React from 'react';
import Image from "next/image";

export interface LogoProps {
    width?: number,
    height?: number,
    className?: string;
}

const Logo = (props:LogoProps) => {
  const { width = 162, height = 129, className = ''} = props

  return (
    <Link id="containerLogo" href={'/'}
        className={`
        flex justify-center items-center h-[${height}px]
        ${className}
    `}>
        <Image src={"/LogoSmall.png"} alt={"Logo"} width={width} height={height}/>
  </Link>
  )
}

export default Logo
