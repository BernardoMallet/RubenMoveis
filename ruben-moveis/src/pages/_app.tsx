import React from "react";
import { AppProps } from "next/app";

import GlobalStyles from "../styles/global";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="././images/favicon.ico"
        />
        <title>Ruben Móveis - Estantes de Aço</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
