import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'; 
import Head from 'next/head';
import styles from '../styles/signup.module.css';
import '../app/signup.css';

const Signup: NextPage = () => {
  const router = useRouter(); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      firstName: { value: string };
      lastName: { value: string };
      phone: { value: string };
      email: { value: string };
    };

    const formData = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      phone: target.phone.value,
      email: target.email.value,
    };

    console.log(formData);

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Handle success - maybe redirect to a thank you page or clear the form
      router.push('/'); // Use the router to navigate to the landing page
    } catch (error) {
      console.error('There was an error!', error);
      // Handle errors - show user a message, etc.
    }
  };

  return (
    <>
      <Head>
        <title>Contact Information</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>First, your contact information</h1>
        <p className={styles.description}>* indicates a required field</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>First name*</label>
            <input type="text" id="firstName" name="firstName" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>Last name*</label>
            <input type="text" id="lastName" name="lastName" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone number</label>
            <input type="tel" id="phone" name="phone" required pattern="^\(\d{3}\) \d{3}-\d{4}$" placeholder="(201) 555-0123" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email*</label>
            <input type="email" id="email" name="email" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>ENTER</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;