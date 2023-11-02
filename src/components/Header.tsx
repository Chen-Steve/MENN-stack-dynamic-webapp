import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.textSection}>
            <p className={styles.title}>
              Empowering Veterans Through Higher Education
            </p>
            <p className={styles.description}>
              We are a non-profit startup dedicated to helping service people connect to the resources they need for higher education.
            </p>
          </div>
        </div>
        <div className={styles.backgroundImage}></div>
      </div>
    );
}

export default Header;