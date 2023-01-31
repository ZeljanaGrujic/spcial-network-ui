import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { React, Component } from "react";
import { Provider } from "react-redux";
import store from "C:\\Users\\user\\Desktop\\spring-boot-app-3\\spcial-network-ui\\public\\src\\app\\store.js"

export default function App({ Component, pageProps: { session, pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
