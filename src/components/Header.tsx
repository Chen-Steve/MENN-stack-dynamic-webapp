import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.textSection}>
            <p className={`${styles.title} ${styles.titleFirstLine}`}>
              Empowering Veterans
            </p>
            <p className={styles.title}>
              Through Higher Education
            </p>
            <p className={styles.description}>
              We are a non-profit startup dedicated to helping service people connect to the resources they need for higher education.
            </p>
            {/*We provide a platform for veterans to connect with mentors, find scholarships, and learn about the college application process.*/}
            <div className={styles.actionSection}>
              <button className={styles.learnMoreBtn}>Learn More</button>
              <button className={styles.signUpBtn}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;
