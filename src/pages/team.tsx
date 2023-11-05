import React from "react";

import "../app/globals.css";
import styles from "../app/index.module.css";

import Navbar from "../components/NavBar";
import BoardMembers from "../components/boardmembers";
import Footer from "../components/Footer";

const Team: React.FC = () => {
    return (
      <main className={styles.main}>
        <div>
          <Navbar />
          <BoardMembers />
          <Footer />
        </div>
      </main>
  );
}

export default Team;