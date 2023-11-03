import React from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";

import "../app/globals.css";
import styles from "../app/index.module.css";

const Home: React.FC = () => {
    return (
      <main className={styles.main}>
        <div>
          <NavBar />
          <Header />
          <Features />
          <Footer />
        </div>
      </main>
  );
}

export default Home;
