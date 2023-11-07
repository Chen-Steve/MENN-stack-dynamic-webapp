import React from 'react';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}></div>
            <div className={styles.navbarItems}>
                <Link href="/" className={styles.navbarItem}>Home</Link>
                <Link href="#services" className={styles.navbarItem}>Services</Link>
                <Link href="#resources" className={styles.navbarItem}>Resources</Link>
                <Link href="/team" className={styles.navbarItem}>Team</Link>
                <a href="https://donate.stripe.com/aEU7sRd6j3lE59u3cc" className={`${styles.navbarItem} ${styles.donate}`} target="_blank" rel="noopener noreferrer">Donate</a>
                <Link href="/signup" className={`${styles.navbarItem} ${styles.volunteer}`}>Sign In</Link>
            </div>
        </div>
    );
}

export default Navbar;
