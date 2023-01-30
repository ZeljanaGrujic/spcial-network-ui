import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";

const SidebarItem = ({ Icon, value }) => {
  return (
    <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
      <Icon className="h-8 w-8 text-blue-500"></Icon>
      <p className="hidden sm:inline-flex font-medium">{value}</p>
    </div>
  );
};

export default SidebarItem;
