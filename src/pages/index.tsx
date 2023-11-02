import React from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../app/globals.css";
import styles from "../app/index.module.css";

const Home: React.FC = () => {
    return (
      <main className={styles.main}>
        <div>
          <NavBar />
          <Header />
          <Footer />
        </div>
      </main>
  );
}

export default Home;
