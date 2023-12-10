import React, { useEffect, useState } from 'react';
import scholarshipsData from '../scholarships/scholarships.json';
import styles from '../styles/Demo.module.css';
import Link from 'next/link';

interface Scholarship {
  title: string;
  description: string[];
  link: string;
  max_award_amount: string;
  applicable_for: string;
  application_deadline: string;
}

const Demo: React.FC = () => {
  const [scholarships, setScholarships] = useState<Scholarship[]>(scholarshipsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://demo.ckan.org/api/3/action/group_list')
      .then(response => response.json())
      .then((data) => {
        // Assuming the API returns scholarships in a compatible format
        setScholarships(prevScholarships => [...prevScholarships, ...data.result]);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch scholarships');
        setLoading(false);
      });
  }, []);

  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.title && typeof scholarship.title === 'string' &&
    scholarship.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>Available Scholarships</div>
      <input
        type="text"
        placeholder="Search scholarships..."
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        className={styles.search}
      />
      {loading && <p>Loading scholarships...</p>}
      {error && <p>{error}</p>}
      {!loading && filteredScholarships.length === 0 && <p>No scholarships found.</p>}
      {filteredScholarships.map((scholarship, index) => (
      <div key={index} className={styles.card}>
        <h2>{scholarship.title}</h2>
          <p>{scholarship.description.join(' ')}</p>
          <p>Applicable for: {scholarship.applicable_for}</p>
          <p>Deadline: {scholarship.application_deadline}</p>
          <p>Award Amount: {scholarship.max_award_amount}</p>
          <Link href={scholarship.link} className={styles.button}>Apply Now</Link>
        </div>  
      ))}
    </div>
  );
};

export default Demo;