import React from 'react';
import styles from '../styles/NavBar.module.css';
import logo from '../../public/logo_v2.png';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo.toString()} alt="Logo" className={styles.logo} />
            <div className={styles.navbarItems}>
                <a href="#services" className={styles.navbarItem}>Services</a>
                <a href="#resources" className={styles.navbarItem}>Resources</a>
                <a href="#team" className={styles.navbarItem}>Team</a>
                <a href="#donate" className={`${styles.navbarItem} ${styles.donate}`}>Donate</a>
                <a href="#volunteer" className={`${styles.navbarItem} ${styles.volunteer}`}>Volunteer</a>
            </div>
        </div>
    );
}

export default Navbar;
