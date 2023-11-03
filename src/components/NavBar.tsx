import React from 'react';
import styles from '../styles/NavBar.module.css';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}></div>
            <div className={styles.navbarItems}>
                <a href="#services" className={styles.navbarItem}>Services</a>
                <a href="#resources" className={styles.navbarItem}>Resources</a>
                <a href="#team" className={styles.navbarItem}>Team</a>
                <a href="https://donate.stripe.com/aEU7sRd6j3lE59u3cc" className={`${styles.navbarItem} ${styles.donate}`} target="_blank" rel="noopener noreferrer">Donate</a>
                <a href="#volunteer" className={`${styles.navbarItem} ${styles.volunteer}`}>Volunteer</a>
            </div>
        </div>
    );
}

export default Navbar;
