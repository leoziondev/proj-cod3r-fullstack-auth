import React from "react";
import HeaderContent from "./HeaderContent";
import UserBox from "./UserBox";

const HeaderBox = () => {
  return (
    <div className="flex w-full justify-between items-center h-40 sm:px-11 px-0">
      <HeaderContent />
      <UserBox />
    </div>
  );
};

export default HeaderBox;
