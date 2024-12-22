import Link from "next/link";
import React from "react";
import Image from "next/image";

type LogoProps = {
  size?: "small" | "medium";
};

const Logo = ({ size = "medium" }: LogoProps) => {
  return (
    <Link href="#">
      {size === "small" ? (
        <Image
          priority
          src={"/images/logo.svg"}
          alt={"Logo"}
          width={67}
          height={34}
        />
      ) : (
        <Image
          priority
          src={"/images/logo.svg"}
          alt={"Logo"}
          width={133}
          height={100}
        />
      )}
    </Link>
  );
};

export default Logo;
