import React from "react";
import Image from "next/image";
import { FcLikePlaceholder, FcComments } from "react-icons/fc";
import { useSession } from "next-auth/react";

const Post = ({ post }) => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col" key={post.id}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src={post.profilePicture}
            height={10}
            width={10}
            className="rounded-full w-10 h-10"
            alt="post image"
          ></img>
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-sm text-gray-500">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4">{post.post}</p>
      </div>
      {post.image != null && (
        <div className="relative h-60 md:h-96 bg-white">
          {/*If any image it will be here */}
          <Image
            src={post.image}
            layout="fill"
            objectFit="cover"
            alt="if image is posted"
          ></Image>
        </div>
      )}
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
