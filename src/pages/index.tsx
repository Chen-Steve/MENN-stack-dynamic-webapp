import React from "react";
import Head from "next/head";

import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Features from "../components/Features";
import Body from "../components/Body";
import Footer from "../components/Footer";

import "../app/globals.css";
import styles from "../app/index.module.css";

const Home: React.FC = () => {
    return (
      <>
        <Head>
          <title>Servicemen to Scholars</title>
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="/favicons/site.webmanifest"/>
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
      <main className={styles.main}>
        <div>
          <Navbar />
          <Header />
          <Features />
          <Body />
          <Footer />
        </div>
      </main>
      </>
  );
}

export default Home;
