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
