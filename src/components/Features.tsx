import React from 'react';
import styles from '../styles/Features.module.css';
import Image from 'next/image';

const Features: React.FC = () => {
  return (
    <div className={styles.featuresContainer}>
        <div className={styles.imageArea}>
        <Image
          src="/veteran_education.png"
          alt="Statistic: Number of veterans in the United States in 2021, by educational attainment | Statista"
          width={1000} 
          height={770}
          sizes="(max-width: 768px) 100vw, 40vw" // Adjust the percentages as needed
        />
    </div>
      <div className={styles.imageArea2}>
      <Image
        src="/veteran_employment.png"
        alt="Statistic: Employment status of veterans in the United States in 2021, by age | Statista"
        width={1000} 
        height={770}
        sizes="(max-width: 768px) 100vw, 40vw" // Adjust the percentages as needed
      />
      </div>
    <div className={styles.textArea}>
      <div className={styles.featureBlock}>
        <h2>Easy Access to Education</h2>
        <p>Our platform provides a user-friendly interface that allows service people to easily access a wide range of educational resources, including scholarships, grants, and online courses.</p>
      </div>
      <div className={styles.featureBlock}>
        <h2>AI-customized for You </h2>
        <p>Based on your unique educational goals and challenges. Our platform offers personalized guidance to help them navigate the higher education landscape and make informed decisions.</p>
      </div>
      <div className={styles.featureBlock}>
        <h2>Be part of a Community</h2>
        <p>Our platform connects service people with like-minded individuals, mentors, and experts who can provide valuable support and share their journeys.</p>
      </div>

      <div className={styles.partnersBlock}>
        <h2 className={styles.partnersTitle}>Our Partners</h2>
        <p className={styles.partnersDescription}>Coming soon!</p>
        <div className={styles.partnersList}>
          {/* Sample logos or names of sponsors. You can replace these with actual sponsor logos or names. */}
    
          {/* ... */}
        </div>
      </div>

    </div>
    </div>
  );
}

export default Features;
