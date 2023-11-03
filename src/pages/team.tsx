import React from "react";

import "../app/globals.css";
import styles from "../app/index.module.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Team: React.FC = () => {
    return (
      <main className={styles.main}>
        <div>
          <NavBar />

          <Footer />
        </div>
      </main>
  );
}

export default Team;