import React from "react";
import styles from "../styles/boardmembers.module.css";

// Define the Member interface outside of the BoardMembers component
interface Member {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

// Update the MemberCard props to match the Member interface
const MemberCard = ({ id, name, title, description, imageUrl, socials }: Member) => {

const imageWrapperClass = id === 2 ? `${styles.memberImageWrapper} ${styles.cutBottomImage}` : styles.memberImageWrapper;

  return (
    <div className={styles.memberCard}>
     <div className={styles.imageWrapperClass}>
      <img
        alt={name}
        loading="lazy"
        src={imageUrl}
        className={styles.memberImage}
      />
      </div>
      <div className={styles.memberInfo}>
        <div className={styles.memberName}>{name}</div>
        <div className={styles.memberTitle}>{title}</div>
      </div>
      <div className={styles.memberDescription}>{description}</div>
      <div className={styles.socialIcons}>
        {/* Render social icons based on the available social links */}
        {socials.twitter && <img alt="Twitter" loading="lazy" src={socials.twitter} className={styles.socialIcon} />}
        {socials.linkedin && <img alt="LinkedIn" loading="lazy" src={socials.linkedin} className={styles.socialIcon} />}
        {socials.facebook && <img alt="Facebook" loading="lazy" src={socials.facebook} className={styles.socialIcon} />}
      </div>
    </div>
  );
};

const BoardMembers: React.FC = () => {
  // Example member data
  const members: Member[] = [
    {
      id: 2,
      name: 'Carston B Maher',
      title: 'CEO & Founder',
      description: 'Carston Maher, CEO of Servicemen to Scholars, specializes in simplifying college admissions for veterans. He balances leading the organization with his ROTC duties at Brown University, where he studies economics, and enjoys hiking in his free time.      ',
      imageUrl: '/carston.jfif', 
      socials: {
        twitter: 'path_to_twitter_icon', 
        linkedin: 'path_to_linkedin_icon', 
      },
    },
    {
      id: 2,
      name: 'Steven Chen',
      title: 'CTO',
      description: 'Steven Chen is a Computer Science and Statistics undergrad at the University of Illinois, responsible for developing our websites advanced tech stack. He\s currently designing the AI that tailor\s and dispatch educational content directly to you. Outside of programming, he\s a gym enthusiast and a fan of The Simpsons.   ',
      imageUrl: '/headshot.jpg',
      socials: {
        twitter: 'path_to_twitter_icon', 
        linkedin: 'path_to_linkedin_icon', 
      },
    },
    // ... Add more member objects as needed
  ];

  return (
    <div className={styles.boardMembers}>
      <div className={styles.boardIntro}>
        <div className={styles.introText}>
          <div className={styles.introTitle}>Connecting</div>
          <div className={styles.introHeading}>Meet Our Team</div>
          <div className={styles.introDescription}>
            Get to know the talented individuals behind our organization.
          </div>
        </div>
      </div>
      <div className={styles.membersContainer}>
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;