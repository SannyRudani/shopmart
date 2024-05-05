import Image from "next/image";
import React from "react";
import IconButton from "./IconButton";
import Input from "./Input";
import Icon from "./Icon";
import Pills from "./Pills";

const Navbar = () => {
  return (
    <div className="w-100 bg-black h-16 text-white flex flex-row items-center justify-between px-8 sticky top-0 z-[1000]">
      <div className="flex flex-row gap-x-3.5">
        <Image
          src={"/images/logo.svg"}
          height={100}
          width={100}
          alt={"logo"}
          className="pr-3"
        />
        <IconButton
          prependIcon="pls-order_vertical1"
          label="Menu"
          className=""
          prependIconSize="1.5rem"
        />
        <Input
          name={"search"}
          value={""}
          inputClassName={""}
          type={"text"}
          className={"px-1"}
          apendIcon="pls-Search1"
        />
      </div>
      <div className="flex flex-row gap-x-3.5">
        <IconButton
          apendIcon="pls-Edit-1"
          prependIcon="pls-Location"
          label="Mumbai, 400049"
          className=""
          apendIconSize="1.5rem"
          prependIconSize="1.5rem"
        />
        <Icon icon="pls-user" fontSize="1.5rem" />
        <Pills pillIcon="pls-Cart" notificationCount={1} />
      </div>
    </div>
  );
};

export default Navbar;
