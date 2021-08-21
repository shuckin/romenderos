import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../lib/strapi/api";
import { getStrapiMedia } from "../lib/strapi/media";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";


export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <libk rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
