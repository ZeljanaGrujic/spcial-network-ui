import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Head from "next/head";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex items-center justify-end min-w-fit space-x-2">
          Signed in with {session.user.email} email <br />
          <button
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
        <Head>
          <title>Social network</title>
        </Head>
        <Header></Header>
        <main className="flex bg-gray-100">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <RightSidebar></RightSidebar>
        </main>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center mx-auto">
        <Image
          src="https://thumbs.dreamstime.com/b/social-media-network-logo-vector-illustration-five-people-group-forum-to-share-ideas-116810481.jpg"
          height={240}
          width={240}
          alt="Login logo"
        ></Image>
        <div className="text-red-600 font-semibold">
          You are not signed in! <br />
        </div>

        <button
          className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
}
