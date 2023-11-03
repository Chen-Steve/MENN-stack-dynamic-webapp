import React from 'react';
import styles from '../styles/Features.module.css';

const Features: React.FC = () => {
  return (
    <div className={styles.featuresContainer}>
        <div className={styles.imageArea}>
            <img src="/veteran_education.png" alt="Statistic: Number of veterans in the United States in 2021, by educational attainment | Statista"/>
        </div>
    <div className={styles.textArea}>
      <div className={styles.featureBlock}>
        <h2>Easy Access to Resources</h2>
        <p>Our platform provides a user-friendly interface that allows service people to easily access a wide range of educational resources, including scholarships, grants, and online courses.</p>
      </div>
      <div className={styles.featureBlock}>
        <h2>Tailored Guidance</h2>
        <p>We understand that each service person has unique educational goals and challenges. Our platform offers personalized guidance based on their unique background to help them navigate the higher education landscape and make informed decisions.</p>
      </div>
      <div className={styles.featureBlock}>
        <h2>Community Support</h2>
        <p>Being part of a supportive community can greatly enhance the educational journey. Our platform connects service people with like-minded individuals, mentors, and experts who can provide valuable support and encouragement.</p>
      </div>
    </div>
    </div>
  );
}

export default Features;
