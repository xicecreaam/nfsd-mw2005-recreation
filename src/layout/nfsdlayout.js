import React from 'react';
import Layout from '@theme/Layout';
import Sidebar from '../components/Sidebar';
import styles from './Layout.module.css';

export default function NfsdLayout({ children, title }) {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <Sidebar />

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </Layout>
  );
}
