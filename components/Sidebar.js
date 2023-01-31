import React from "react";
import Image from "next/image";
import { CgUserlane } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import { MdGroups } from "react-icons/md";
import {
  FcSearch,
  FcHome,
  FcShop,
  FcVideoFile,
  FcExpand,
} from "react-icons/fc";
import { BsStopwatch } from "react-icons/bs";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        ></Image>
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>

      <SidebarItem Icon={HiOutlineUserGroup} value="Friends"></SidebarItem>
      <SidebarItem Icon={MdGroups} value="Groups"></SidebarItem>
      <SidebarItem Icon={FcShop} value="Marketplace"></SidebarItem>
      <SidebarItem Icon={FcVideoFile} value="Live video"></SidebarItem>
      <SidebarItem Icon={BsStopwatch} value="Memories"></SidebarItem>
      <SidebarItem Icon={FcExpand} value="Pages"></SidebarItem>
    </div>
  );
};

export default Sidebar;
