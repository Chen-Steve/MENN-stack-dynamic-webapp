import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const footerContent = (
    <div className={`${styles.h}`}>
        <div className={`${styles.w}`}>
            <p className={`${styles.textBase}`}>
                Stay up to date on our latest features and releases by joining our newsletter.
            </p>
            <div className={`${styles.wFull}`}>
                email
                <p className={`${styles.textXs}`}>
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
            </div>
        </div>
    </div>
  );

  const footerBottom = (
    <div className={`${styles.wFull}`}>
        <div className={`${styles.hPx} ${styles}`} />
        <div className={`${styles.wFull}`}>
            <p className={`${styles.textBase}`}>
                © 2023 Servicemen to Scholars. The following trademarks used herein are owned by Servicemen to Scholar's LLC and its affiliates. 
                Servicemen to Scholars LLC. is a nonprofit, tax-exempt charitable organization (tax ID number: 92-3756275) under Section 501(c)(3) of the Internal Revenue Code. 
                Donations are tax-deductible as allowed by law.
            </p>
            <div className={`${styles.wFull}`}>
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

  return (
    <div className={`${styles.footer}`}>
      {footerContent}
      {footerBottom}
    </div>
  );
}

export default Footer;
