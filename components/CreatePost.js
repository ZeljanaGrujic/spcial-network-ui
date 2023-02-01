import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FcVideoFile, FcStackOfPhotos, FcFullTrash } from "react-icons/fc";

import { BsPhone, BsEmojiSmile } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "public/src/features/postSlice";

const CreatePost = () => {
  const SOCIAL_NETWORK_ENDPOINT = "http://localhost:8080/api/v1/post";
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();

  const [imageToPost, setImageToPost] = useState(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();
    formData.append("file", imageToPost);
    console.log("Image to post: " + imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);

    axios
      .post(SOCIAL_NETWORK_ENDPOINT, formData, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        inputRef.current.value = "";
        dispatch(addPost(response.data));
        console.log(response.data);
        removeImage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <img
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          alt="users session image"
        ></img>
        <form className="flex-flex">
          <input
            type="text"
            ref={inputRef}
            placeholder={`Type your question...`}
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
          ></input>
          <button hidden onClick={handleSubmit}>Submit</button>
        </form>
      </div>

      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
        >
          <Image
            src={imageToPost}
            height={10}
            width={200}
            className="object-contain"
            alt="user image for adding post"
          ></Image>
          <FcFullTrash className="h-8 hover:text-red-500"></FcFullTrash>
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center 
        hover:bg-gray-100 rounded-md hover:cursosr-pointer"
        >
          <FcVideoFile size={20}></FcVideoFile>
          <p className="font-semibold text-gray-600">Videos</p>
        </div>
        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center 
        hover:bg-gray-100 rounded-md hover:cursosr-pointer"
        >
          <FcStackOfPhotos size={20}></FcStackOfPhotos>
          <p className="font-semibold text-gray-600">Pictures</p>
          <input
            ref={hiddenFileInput}
            onChange={addImageToPost}
            type="file"
            accept="image/*"
            hidden
          ></input>
        </div>
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center 
        hover:bg-gray-100 rounded-md hover:cursosr-pointer"
        >
          <BsEmojiSmile size={20} className="text-yellow-300"></BsEmojiSmile>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
