import React from "react";
import Image from "next/image";
import { FcLikePlaceholder, FcComments } from "react-icons/fc";
import { useSession } from "next-auth/react";

const Post = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            src={session?.user.image}
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
          ></Image>
          <div>
            <p className="font-medium">Zeljana Grujic</p>
            <p className="text-sm text-gray-500">{`${new Date().getHours()}:${new Date().getMinutes()}, ${new Date().getDay()}.${new Date().getDate()}.${new Date().getFullYear()}`}</p>
          </div>
        </div>
        <p className="py-4">Post abouth The Laffer Curve and explanation</p>
      </div>
      <div className="relative h-60 md:h-96 bg-white">
        {/*If any image it will be here */}
        <Image
          src="https://www.thebalancemoney.com/thmb/bZtEmCmKxvjuQM-i6VeZA7p54tM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LafferCurve-graphic-56a9a8475f9b58b7d0fdb766.jpg"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex items-center justify-center bg-white p-2">
        {/*for footer */}
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FcLikePlaceholder></FcLikePlaceholder>
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FcComments></FcComments>
          <p className="text-sm sm:text-base">Comment</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
