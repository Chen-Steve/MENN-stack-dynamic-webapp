import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'; 
import type { Metadata } from 'next'
import styles from '../styles/signup.module.css';
import '../app/signup.css';

export const metadata: Metadata = {
  title: 'Contact Information',
};

const Signup: NextPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceStatus: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.log('Submitting form data:', formData);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted"); // Add this line for debugging

    if (step === 1) {
      // Move to the next step
      setStep(step + 1);
    } else {
      // Submit the form
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

        console.log("Form submitted successfully");
        router.push('/'); // Navigate to the landing page
      } catch (error) {
        // Handle error
        console.error('There was an error!', error);
      }
    }
  };

  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>
          {step === 1 ? 'First, your contact information' : 'Are you currently active duty, a reservist, or a veteran?*'}
        </h1>
        <p className={styles.description}>* indicates a required field</p>
        <form onSubmit={handleSubmit} className={styles.form}>
        {step === 1 && (
          <>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>First name*</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              required className={styles.input} 
              value={formData.firstName} // Controlled component
              onChange={handleInputChange} // Update state on change
              />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>Last name*</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              required className={styles.input} 
              value={formData.lastName} // Controlled component
              onChange={handleInputChange}
              />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required pattern="^\(\d{3}\) \d{3}-\d{4}$" 
              placeholder="(201) 555-0123" 
              className={styles.input} 
              value={formData.phone} // Controlled component
              onChange={handleInputChange}
              />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email*</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required className={styles.input} 
              value={formData.email} // Controlled component
              onChange={handleInputChange}
              />
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>ENTER</button>
          </div>
          </>
        )}

          {step === 2 && (
            <>
              {/* Military Status Field */}
              <div className={styles.formGroup}>
                <label htmlFor="serviceStatus" className={styles.label}>Military Status*</label>
                <select
                  id="serviceStatus"
                  name="serviceStatus"
                  value={formData.serviceStatus}
                  onChange={handleInputChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select an option</option>
                  <option value="Active Duty">Active Duty</option>
                  <option value="Reservist">Reservist</option>
                  <option value="Veteran">Veteran</option>
                  <option value="National Guard">National Guard</option>
                  <option value="Interested">Not currently serving, but interested in military-affiliated educational resources</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <button type="submit" className={styles.submitButton}>Submit</button>
              </div>
            </>
          )}
        </form>
      </main>
    </>
  );
};

export default Signup;