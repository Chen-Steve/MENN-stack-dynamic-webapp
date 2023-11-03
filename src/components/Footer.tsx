import React from 'react';
import { useState } from 'react';

import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}></div>
        <div className={styles.newsletter}>


          <p className={styles.textBase1}>
            Stay up to date on our latest features and releases by joining our newsletter.
          </p>

          {/* NEWSLETTER SUBSCRIPTION  */}
          <div className={styles.emailSection}>
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    className={styles.emailInput} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <a href="https://servicementoscholars.substack.com/" target="_blank" rel="noopener noreferrer">
                    <button 
                        className={styles.subscribeBtn} 
                        onClick={(e) => { 
                            e.preventDefault();
                            if (email) { 
                                setEmail(''); // Clear the email input
                                window.open("https://servicementoscholars.substack.com/", "_blank");
                            }
                        }}
                        disabled={!email}
                    >
                        Subscribe
                    </button>
                </a>
            </div>


          <p className={styles.textXs}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>


        </div>
        <div className={styles.comingSoon}>
        </div>
        <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/servicementoscholars/" target="_blank" rel="noopener noreferrer"  title="Instagram">
                <div className={styles.instagramIcon}></div>
            </a>
            <a href="https://www.linkedin.com/company/servicemen-to-scholars/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                <div className={styles.linkedinIcon}></div>
            </a>
            <a href="https://twitter.com/service2scholar?s=20" target="_blank" rel="noopener noreferrer"  title="X">
                <div className={styles.xIcon}></div>
            </a>
            </div>
        </div>

        
      <div className={styles.footerBottom}>
        <p className={styles.textBase}>
          © 2023 Servicemen to Scholars. The following trademarks used herein are owned by Servicemen to Scholar's LLC and its affiliates. Servicemen to Scholars LLC. is a nonprofit, tax-exempt charitable organization (tax ID number: 92-3756275) under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law.
        </p>
        <div className={styles.footerLinks}>
          <p className={`${styles.textXs} ${styles.underline}`}>
            Privacy Policy
          </p>
          <p className={`${styles.textXs} ${styles.underline}`}>
            Terms of Service
          </p>
          <p className={`${styles.textXs} ${styles.underline}`}>
            Cookies Settings
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;