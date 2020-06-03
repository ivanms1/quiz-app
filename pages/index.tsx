import Head from 'next/head';
import Layout from '../components/Layout';
import Button from '../components/Button';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Quiz App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.HomePage}>
        <h1 className={styles.Title}>Welcome to the Quiz App</h1>
        <div className={styles.ActionButtons}>
          <Button
            className={styles.ActionButton}
            size='big'
            kind='primary'
            link
            href='/quickstart'
          >
            Quick Start
          </Button>
          <Button
            className={styles.ActionButton}
            size='big'
            kind='primary'
            link
            href='/custom'
          >
            Custom Quiz
          </Button>
        </div>
      </div>
    </Layout>
  );
}
