import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="#">
      <Image
        priority
        src={"/images/logo.svg"}
        alt={"Logo"}
        width={133}
        height={100}
      />
    </Link>
  );
};

export default Logo;
