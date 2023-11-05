import React from 'react';
import styles from '../styles/Body.module.css';

const Body: React.FC = () => {
  return (
    <div className={styles.bodyContainer}>
      <h1 className={styles.title}>Charting New Horizons for Military Scholars</h1>
      <div className={styles.statsContainer}>
        <div className={styles.statBlock}>
          <h2>$274 Million</h2>
          <p>Dive into a vast pool of resources specifically earmarked for military personnel and their families to support their academic journeys.</p>
        </div>
        <div className={styles.statBlock}>
          <h2>Maximize Veteran Benefits in Higher Education</h2>
          <p>Only 43% of military undergraduates and 36% of graduate students utilized veteran benefits in 2015-16. Become part of the empowered minority who are taking full advantage of educational benefits to transform their academic and professional futures.</p>
        </div>
        <div className={styles.statBlock}>
          <h2>Financial Aid Opportunities</h2>
          <p>Secure an ROTC allocation for a service-aligned education pathway or with specialized aid like the Pat Tillman Foundation&apos;s award, military members like you and your families have access to a diverse array of financial resources for academic advancement.</p>
        </div>
        <div className={styles.statBlock}>
          <h2>Financial Challenges</h2>
          <p>Despite facing high tuition fees, additional costs for supplies, and variable living and medical expenses, you can leverage underutilized veterans benefits and targeted scholarships to navigate financial challenges and achieve your academic goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
