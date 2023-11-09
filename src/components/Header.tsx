import React from 'react';
import Link from 'next/link';
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
              <a href="https://chat.openai.com/g/g-z9E31ofob-scholarship-finder-for-servicemen" className={styles.learnMoreBtn} target="_blank" rel="noopener noreferrer">Try our GPT!</a>
              <Link href="/signup" className={styles.signUpBtn}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;
