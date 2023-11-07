import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/signup.module.css';
import '../app/signup.css';

const Signup: NextPage = () => {
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

    // You would handle form submission here,
    // possibly sending the form data to your backend server
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
