import React from 'react';
import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import styles from '../app/index.module.css';
import privacyStyles from '../styles/Privacy.module.css';
import "../app/globals.css";


const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <div>
                <Navbar />
                <div className={privacyStyles.privacyContainer}>
                <h1 className={privacyStyles.header}>Privacy Policy</h1>
                    <p className={privacyStyles.lastUpdated}>Last updated December 10, 2023</p>

                    <section className={privacyStyles.section}>
                        <p className={privacyStyles.sectionContent}>
                            This privacy notice for <strong>Servicemen to Scholars LLC</strong> (doing business as S2S) ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                        </p>
                        <ul>
                            <li>Visit our website at servicementoscholars.org, or any website of ours that links to this privacy notice</li>
                            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                        </ul>
                        <p className={privacyStyles.sectionContent}>
                            <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at stevenchen@servicementoscholars.org.
                        </p>
                    </section>

                    <section className={privacyStyles.section}>
                        <h2 className={privacyStyles.sectionTitle}>SUMMARY OF KEY POINTS</h2>
                        <p className={privacyStyles.sectionContent}>
                            <em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</em>
                        </p>
                        <p>
                        <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                        </p>
                        <p>
                            <strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about sensitive information we process.
                        </p>
                        <p>
                            <strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.
                        </p>
                        <p>
                            <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                        </p>
                        <p>
                            <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
</p>

<p>
<strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.
</p>

<p>
<strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
</p>

<p>
<strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
</p>

<p>
<strong>Want to learn more about what we do with any information we collect?</strong> Review the privacy notice in full.
                        </p>
                    </section>


                </div>
                <Footer />
                </div>
            </main>
        </>
    );
};

export default PrivacyPolicy;
