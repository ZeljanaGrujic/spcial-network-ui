import React from "react";
import { RiVideoLine } from "react-icons/ri";
import { FcSearch, FcExpand } from "react-icons/fc";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div
      className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px]
    lg:min-w-[250px]"
    >
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoLine></RiVideoLine>
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <FcSearch></FcSearch>
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <FcExpand></FcExpand>
          </div>
        </div>
      </div>
      <Contacts
        src="https://thumbs.dreamstime.com/b/social-media-network-logo-vector-illustration-five-people-group-forum-to-share-ideas-116810481.jpg"
        name="Zeljana Grujic"
      ></Contacts>
      <Contacts
        src="https://thumbs.dreamstime.com/b/social-media-network-logo-vector-illustration-five-people-group-forum-to-share-ideas-116810481.jpg"
        name="Zeljana Grujic 2"
      ></Contacts>
      <Contacts
        src="https://thumbs.dreamstime.com/b/social-media-network-logo-vector-illustration-five-people-group-forum-to-share-ideas-116810481.jpg"
        name="Zeljana Grujic 3"
      ></Contacts>
    </div>
  );
};

export default RightSidebar;
