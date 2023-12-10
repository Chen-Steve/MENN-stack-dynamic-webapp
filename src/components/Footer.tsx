import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import PrivacyPolicy from '../pages/privacy'; 

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
        <a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer"  title="Instagram">
            <div className={styles.charity}></div>
        </a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/servicementoscholars/" target="_blank" rel="noopener noreferrer" className={styles.instagramIcon} title="Instagram"></a>
          <a href="https://www.linkedin.com/company/servicemen-to-scholars/" target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon} title="LinkedIn"></a>
          <a href="https://twitter.com/service2scholar?s=20" target="_blank" rel="noopener noreferrer" className={styles.xIcon} title="X"></a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.textBase}>
          © 2023 Servicemen to Scholars. The following trademarks used herein are owned by Servicemen to Scholar&apos;s LLC and its affiliates. Servicemen to Scholars LLC. is a nonprofit, tax-exempt charitable organization (tax ID number: 92-3756275) under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law.
        </p>
        <div className={styles.footerLinks}>
          <p className={`${styles.textXs} ${styles.underline}`}>
          <Link href="/privacy" className={`${styles.textXs} ${styles.underline}`}>
            Privacy Policy
            </Link>
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