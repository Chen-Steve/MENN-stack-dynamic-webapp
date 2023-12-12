import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Company logo */}
      <div className={styles.logo}>
        {/* Insert your logo image here */}
        <img src="path-to-your-logo.png" alt="Company Logo" />
      </div>
      
      {/* User profile section */}
      <div className={styles.profile}>
        <img src="path-to-user-avatar.png" alt="User Avatar" className={styles.avatar} />
        <h3 className={styles.userName}>Jaydon Frankie</h3>
      </div>
      
      {/* Navigation menu */}
      <nav className={styles.navMenu}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Dashboard</li>
          {/* Add other nav items with their icons */}
        </ul>
      </nav>
      
      {/* Call to action section */}
      <div className={styles.cta}>
        <p>Get more? From only $69</p>
        <button className={styles.upgradeBtn}>Upgrade to Pro</button>
      </div>
    </aside>
  );
};

export default Sidebar;