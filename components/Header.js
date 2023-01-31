import Image from "next/image";
import React from "react";
import {
  FcSearch,
  FcHome,
  FcShop,
  FcVideoFile,
  FcExpand,
} from "react-icons/fc";
import { BsFlag } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { SlGameController } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white flex items-center shadow-md p-2 top-0 sticky z-50 h-16">
      <div className="flex min-w-fit">
        <Image
          src="https://thumbs.dreamstime.com/b/social-media-network-logo-vector-illustration-five-people-group-forum-to-share-ideas-116810481.jpg"
          height={90}
          width={60}
        ></Image>
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <FcSearch size={20}></FcSearch>
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <FcHome className="mx-auto" size={25}></FcHome>
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BsFlag className="mx-auto text-green-800" size={20}></BsFlag>
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <FcVideoFile className="mx-auto" size={25}></FcVideoFile>
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <FcShop className="mx-auto" size={25}></FcShop>
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <SlGameController className="mx-auto text-blue-900" size={22}></SlGameController>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          onClick={() => signOut()}
        ></Image>
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {" "}
          Logged user {session?.user.name}{" "}
        </p>
        <CgMenuGridO
          size={5}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-800"
        ></CgMenuGridO>

        <AiOutlineMessage
          size={5}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-800"
        ></AiOutlineMessage>

        <AiOutlineBell
          size={5}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-800"
        ></AiOutlineBell>

        <FcExpand
          size={5}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-800"
        ></FcExpand>
      </div>
    </div>
  );
};

export default Header;
