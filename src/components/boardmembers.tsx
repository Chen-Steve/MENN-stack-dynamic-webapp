import React from "react";
import styles from "../styles/boardmembers.module.css";

// Define the Member interface outside of the BoardMembers component
interface SocialInfo {
  icon: string;
  url: string;
}

interface Member {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  socials: {
    twitter?: SocialInfo;
    linkedin?: SocialInfo;
    github?: SocialInfo; // Add this if you want a GitHub link as well
  };
}

// Update the MemberCard props to match the Member interface
const MemberCard = ({ id, name, title, description, imageUrl, socials }: Member) => {

  // Correctly applying conditional class names
  const imageWrapperClass = id === 2 ? `${styles.memberImageWrapper} ${styles.cutBottomImage}` : styles.memberImageWrapper;

  return (
    <div className={styles.memberCard}>
      <div className={styles.memberImageWrapper}>
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
        {socials.github && (
          <a href={socials.github.url} target="_blank" rel="noopener noreferrer">
            <img alt="Github" loading="lazy" src={socials.github.icon} className={styles.socialIcon} />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter.url} target="_blank" rel="noopener noreferrer">
            <img alt="Twitter" loading="lazy" src={socials.twitter.icon} className={styles.socialIcon} />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin.url} target="_blank" rel="noopener noreferrer">
            <img alt="LinkedIn" loading="lazy" src={socials.linkedin.icon} className={styles.socialIcon} />
          </a>
        )}
      </div>
    </div>
  );
};

const BoardMembers: React.FC = () => {
  // Example member data
  const members: Member[] = [
    {
      id: 1,
      name: 'Carston B Maher',
      title: 'CEO & Founder',
      description: 'Carston Maher, CEO of Servicemen to Scholars, specializes in simplifying college admissions for veterans. He balances leading the organization with his ROTC duties at Brown University, where he studies economics, and enjoys hiking in his free time.      ',
      imageUrl: '/carston.jfif', 
      socials: {
        "twitter": {
          "icon": "/x_twitter.svg",
          "url": ""
        }, 
        "linkedin": {
          "icon": "/linkedin.svg",
          "url": "https://www.linkedin.com/in/carstonmaher/"
        }
      },
    },
    {
      id: 2,
      name: 'Steven Chen',
      title: 'CTO',
      description: 'Steven Chen is a Computer Science and Statistics undergrad at the University of Illinois, responsible for developing our websites advanced tech stack. He\s currently designing the AI that tailor\s and dispatch educational content directly to you. Outside of programming, he likes hitting the gym and playing badminton.',
      imageUrl: '/headshot.jpg',
      socials: {
        "github": {
          "icon": "/github.svg",
          "url": "https://www.github.com/chen-steve/"
        },
        "linkedin": {
          "icon": "/linkedin.svg",
          "url": "https://www.linkedin.com/in/chensteven2077/"
        }
      },
    },
    {
      id: 3,
      name: 'Caleb Schultz',
      title: 'COO',
      description: 'Caleb Schultz is a student at Brown University studying the intersection of computer science and neuroscience      ',
      imageUrl: '/Caleb.jfif',
      socials: {
        "twitter": {
          "icon": "/x_twitter.svg",
          "url": ""
        }, 
        "linkedin": {
          "icon": "/linkedin.svg",
          "url": "https://www.linkedin.com/in/calebschultz1/"
        }
      },
    },
    {
      id: 4,
      name: 'Benjamin Buka',
      title: 'CDO',
      description: 'Benjamin Buka is studying International Affairs & Statistics at Brown University.       ',
      imageUrl: '/ben.jfif',
      socials: {
        "twitter": {
          "icon": "/x_twitter.svg",
          "url": ""
        }, 
        "linkedin": {
          "icon": "/linkedin.svg",
          "url": "https://www.linkedin.com/in/benjamin-buka-581689257/"
        }
      },
    },
    {
      id: 5,
      name: 'Sean Anderson',
      title: 'CFO',
      description: 'Sean Anderson is an undergraduate student at Stevens Institute of Technology. He\s responsible for putting our funds to work so we can provide you with the best information and resources available. But, he\s not just effective when it comes to financial planning. When it comes to strategy games like Risk, Sean is a mastermind.',
      imageUrl: '/sean.jfif',
      socials: {
        "twitter": {
          "icon": "/x_twitter.svg",
          "url": ""
        }, 
        "linkedin": {
          "icon": "/linkedin.svg",
          "url": "https://www.linkedin.com/in/sean-anderson-403ab4199/"
        }
      },
    },
    {
      id: 6,
      name: 'Sam Foth',
      title: 'Social Media Director',
      description: 'Sam Foth, a media production student at the University of Central Florida, channels his passion for social media into managing Servicemen to Scholars\ online presence. When he\s not spreading our mission on various platforms, he indulges in his love for roller coasters at Universal Studios.',
      imageUrl: '/sam.jfif',
      socials: {
        "twitter": {
          "icon": "/x_twitter.svg",
          "url": ""
        }, 
        "linkedin": {
          "icon": "/linkedin.svg",
          "url": "https://www.linkedin.com/in/samuel-foth-216381263/"
        } 
      },
    },
    {
      id: 6,
      name: 'Jack Aregood',
      title: 'Board Member',
      description: 'Jack Aregood is an undergraduate student at Rutgers University and serves on the Board of Trustees. As a board member, he provides his insight for our vision and direction. When he\s not providing his guidance to our team, Jack can be found writing code, jamming out to music, or playing a game of Spikeball.      ',
      imageUrl: '/placeholderhead.svg',
      socials: {
        "twitter": {
          "icon": "/x_twitter.svg",
          "url": ""
        }, 
        "linkedin": {
          "icon": "/linkedin.svg",
          "url": "https://www.linkedin.com/in/calebschultz1/"
        }
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