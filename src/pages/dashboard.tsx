import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from '../components/sidebar';
import ScholarshipList from '../components/ScholarshipList';
import styles from '../styles/ScholarshipList.module.css'

const Dashboard: React.FC = () => {
  return (
    <NextUIProvider>
      <div className={styles.container}>
        <Sidebar />
        <ScholarshipList />
      </div>
    </NextUIProvider>
  );
};

export default Dashboard;